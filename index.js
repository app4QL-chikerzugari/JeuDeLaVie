
function damier() {

        var canvas = document.getElementById('can');
        var context = canvas.getContext('2d');
        var timer = document.getElementById("timer").value;
        var a = [];

        var timer = document.getElementById("timer").value;
            
	 setTimeout(anime, timer);

        
        function anime() {

			var nombre = document.getElementById("nbCase").value;
			var taille = document.getElementById("tailleCase").value;
			var timer = document.getElementById("timer").value;
            
            context.clearRect(0, 0, canvas.width, canvas.height);
	var color = document.getElementById('color1').value;
        
        var color2 = document.getElementById('color2').value;

            for (i=0; i<nombre; i++) {
                for (j=0; j<nombre; j++) {
                    if (Math.random() > 0.9) {
                        a[i*nombre+j] = 1;

                        context.fillStyle = color;
                    } else {
                        a[i*nombre+j] = 0;
                        context.fillStyle = color2;

                    }
                    context.fillRect(taille*i, taille*j, taille, taille);
                }
            }
            setTimeout(anime, timer);
        }
        
    }
    
 
    
    
    
