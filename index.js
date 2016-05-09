function damier() {
        var canvas = document.getElementById('can');
        var context = canvas.getContext('2d');
        var timer = document.getElementById("timer").value;
        var a = [];
		setTimeout(anime, timer);
        
        function anime() {

			var nombre = document.getElementById("nbCase").value;
			var taille = document.getElementById("tailleCase").value;
			var timer = document.getElementById("timer").value;
            context.fillStyle = "white";
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (i=0; i<nombre; i++) {
                for (j=0; j<nombre; j++) {
                    if (Math.random() > 0.9) {
                        a[i*nombre+j] = 1;
                        context.fillStyle = "white";
                    } else {
                        a[i*nombre+j] = 0;
                        context.fillStyle = "black";
                    }
                    context.fillRect(taille*i, taille*j, taille, taille);
                }
            }
            setTimeout(anime, timer);
        }
    }
    
 window.onload = damier;
    
    
    
