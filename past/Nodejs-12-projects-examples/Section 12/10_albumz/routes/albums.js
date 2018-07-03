var express = require('express');
var router = express.Router();
var Firebase = require('firebase');
var fbRef = new Firebase('https://albumz01.firebaseio.com/');
var multer = require('multer');
var upload = multer({dest:'./public/images/uploads'});

router.get('*', function(req, res, next) {
	// Check Authentication
	if(fbRef.getAuth() == null){
	  	res.redirect('/users/login');
	}
	next();
});

router.get('/', function(req, res, next) {
  	var albumRef = fbRef.child('albums');

	albumRef.once('value', function(snapshot){
		var albums = [];
		snapshot.forEach(function(childSnapshot){
			var key = childSnapshot.key();
			var childData = childSnapshot.val();
			if(childData.uid == fbRef.getAuth().uid){
				albums.push({
					id: key,
					artist: childData.artist,
					genre: childData.genre,
					info: childData.info,
					title: childData.title,
					label: childData.label,
					tracks: childData.tracks,
					cover: childData.cover
				});
			}
		});
		res.render('albums/index',{albums: albums});
	});
});

router.get('/add', function(req, res, next) {
	var genreRef = fbRef.child('genres');

	genreRef.once('value', function(snapshot){
		var data = [];
		snapshot.forEach(function(childSnapshot){
			var key = childSnapshot.key();
			var childData = childSnapshot.val();
			data.push({
				id: key,
				name: childData.name
			});
		});
		res.render('albums/add',{genres: data});
	});

});

router.post('/add', upload.single('cover'),function(req, res, next) {
	// Check File Upload
	if(req.file){
	  	console.log('Uploading File...');
	  	var cover = req.file.filename;
	} else {
	  	console.log('No File Uploaded...');
	  	var cover = 'noimage.jpg';
	}

	// Build Album Object
	var album = {
		artist: req.body.artist,
		title: req.body.title,
		genre: req.body.genre,
		info: req.body.info,
		year: req.body.year,
		label: req.body.label,
		tracks: req.body.tracks,
		cover: cover,
		uid: fbRef.getAuth().uid
	}

	// Create Reference
	var albumRef = fbRef.child("albums");

	// Push Album
  	albumRef.push().set(album);

  	req.flash('success_msg', 'Album Saved');
  	res.redirect('/albums');
});


router.get('/details/:id', function(req, res){
	var id = req.params.id;

	var albumRef = new Firebase('https://albumz01.firebaseio.com/albums/'+id);

	albumRef.once('value', function(snapshot){
		var album = snapshot.val();
		res.render('albums/details', {album: album, id:id});
	});
});

router.get('/edit/:id', function(req, res, next) {
	var id = req.params.id;
	var albumRef = new Firebase('https://albumz01.firebaseio.com/albums/'+id);

	var genreRef = fbRef.child('genres');

	genreRef.once('value', function(snapshot){
		var genres = [];
		snapshot.forEach(function(childSnapshot){
			var key = childSnapshot.key();
			var childData = childSnapshot.val();
			genres.push({
				id: key,
				name: childData.name
			});
		});
		albumRef.once("value", function(snapshot) {
		var album = snapshot.val();
		res.render('albums/edit', {album: album, id: id, genres: genres});
	});
	});
});


router.post('/edit/:id', upload.single('cover'), function(req, res, next) {
	var id = req.params.id;
	var albumRef = new Firebase('https://albumz01.firebaseio.com/albums/'+id);

	// Check File Upload
	if(req.file){
		// get Cover Filename
		var cover = req.file.filename;

	  	// Update Album With Cover
		albumRef.update({
			artist: req.body.artist,
			title: req.body.title,
			genre: req.body.genre,
			info: req.body.info,
			year: req.body.year,
			label: req.body.label,
			tracks: req.body.tracks,
			cover: cover
		});
	} else {
	  	// Update Album Without Cover
		albumRef.update({
			artist: req.body.artist,
			title: req.body.title,
			genre: req.body.genre,
			info: req.body.info,
			year: req.body.year,
			label: req.body.label,
			tracks: req.body.tracks
		});
	}

	req.flash('success_msg', 'Album Updated');
	res.redirect('/albums/details/'+id);
});

router.delete('/delete/:id', function(req, res, next) {
	var id = req.params.id;
	var albumRef = new Firebase('https://albumz01.firebaseio.com/albums/'+id);

	albumRef.remove();

	req.flash('success_msg','Album Deleted');
	res.send(200);
});



module.exports = router;
