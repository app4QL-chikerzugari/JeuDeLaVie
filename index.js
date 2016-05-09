window.onload = function(nombre, taille) {


        var canvas = document.getElementById('can');
        var context = canvas.getContext('2d');
        var a = [];
        var color = document.getElementById('color1');
	
	var color2 = document.getElementById('color2');
	setInterval(anime, 1000);
        
        function anime() {
            context.fillStyle = "green";
            context.clearRect(0, 0, canvas.width, canvas.height);
	var color = document.getElementById('color1');
        
        var color2 = document.getElementById('color2');

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
        }
    }
    
    
    
