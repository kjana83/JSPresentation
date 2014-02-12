(function(){

              Reveal.initialize({
                history: true,
				keyboard: false,
              });
             
			  var url=document.URL.split('/');
				var host=url[0]+'//'+url[2];
              var socket = io.connect(host);

              socket.on('slidechanged', function (data) {
                Reveal.slide(data.indexh, data.indexv, data.indexf);
              });
              
            })();