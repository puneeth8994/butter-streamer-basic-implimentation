var express = require('express');
var app = express();
var fs = require('fs');
//var youtubeStreamer = require('YoutubeStreamer');
var youtubeStreamer = require('./streamers/youtube');
var indexStream = require('./index');



app.get('/video', function(req, res) {
	// var head = {
 //      'Content-Length': fileSize,
 //      'Content-Type': 'video/mp4',
 //    }
	let x = indexStream.getStreamer('https://www.youtube.com/watch?v=G1pffiIaMwk', 'youtube');
 // const path = x
 //  const stat = fs.statSync(path)
 //  const fileSize = stat.size
	// console.log("!!!!!!!!!!!!!!!!!");
	//console.log(x());
	const stream = x();

	//const path = './video.mp4'
	//const stat = fs.statSync(path)
	const fileSize = 16384
	const range = req.headers.range
	const head = {
	  'Content-Length': fileSize,
	  'Content-Type': 'video/mp4',
	}
	//res.writeHead(200, head)
	//fs.createReadStream(x).pipe(res)
	// console.log(stat);
	stream.pipe(res);
	//res.pipe(x);
})

app.listen(3016, function () {
  console.log('Example app listening on port 3016!');
});