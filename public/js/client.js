(function(){

              Reveal.initialize({
                history: true
              });
              window.addEventListener( 'keyup', function(event){
			    event.preventDefault();
			  });
			  
			  window.addEventListener('mouseup',function(event){
			   event.preventDefault();
			  });
			  var url=document.URL.split('/');
				var host=url[0]+'//'+url[2];
              var socket = io.connect(host);

              socket.on('slidechanged', function (data) {
                Reveal.slide(data.indexh, data.indexv, data.indexf);
              });
              
            })();