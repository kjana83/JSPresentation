(function(){

              Reveal.initialize({
                history: true
              });
              Reveal.addEventListener('slidechanged',function(event){event.preventDefault();});
			  var url=document.URL.split('/');
				var host=url[0]+'//'+url[2];
              var socket = io.connect(host);

              socket.on('slidechanged', function (data) {
                Reveal.slide(data.indexh, data.indexv, data.indexf);
              });
              
            })();