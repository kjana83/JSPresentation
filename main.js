(function(){
	var socket=io.connect('http://localhost:1100');
	Reveal.initialize({
		history:true
	});
	
	notifyServer=function(emit){
	data={
		indexv:Reveal.getIndices().v,
		indexh:Reveal.getIndices().h,
		indexf:Reveal.getIndices().f || 0
		}
		
	socket.emit('slidechanged',data);
	
	}
	
	Reveal.addEventListener('slidechanged',notifyServer);
	Reveal.addEventListener('fragmentshown',notifyServer);
	Reveal.addEventListener('fragmenthidden',notifyServer);
	
	socket.on('slidechanged',function(data){
		Reveal.slide(data.indexv,data.indexh,data.indexf);
	});
})();