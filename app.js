var express=require('express'),
	http=require('http'),
	path=require('path'),
	ioServer=require('socket.io'),
	app=express(),
	port=process.env.PORT || 1100;
	
app.configure(function(){
	app.use(express.static(path.join(__dirname,'public')));
});

app.get('/',function(req,res){
console.log(__dirname);
	res.sendfile(__dirname + '/public/views/index.html');
});

app.get('/client',function(req,res){
	res.sendfile(__dirname + '/public/views/client.html');
});

var server=http.createServer(app).listen(port,function(){
	console.log('Express server listening port ' + port);
});

var io=ioServer.listen(server);
io.sockets.on('connection',function(socket){
	socket.emit('message','Welcome to Reveal');
	socket.on('slidechanged',function(data){
		socket.broadcast.emit('slidechanged',data);
	});
});

	