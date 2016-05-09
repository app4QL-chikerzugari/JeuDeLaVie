window.onload = function(nombre, taille) {
        var canvas = document.getElementById('can');
        var context = canvas.getContext('2d');
        var a = [];
        setInterval(anime, 1000);
        
        function anime() {
            context.fillStyle = "green";
            context.clearRect(0, 0, canvas.width, canvas.height);
            for (i=0; i<nombre; i++) {
                for (j=0; j<nombre; j++) {
                    if (Math.random() > 0.9) {
                        a[i*nombre+j] = 1;
                        context.fillStyle = "green";
                    } else {
                        a[i*nombre+j] = 0;
                        context.fillStyle = "red";
                    }
                    context.fillRect(taille*i, taille*j, taille, taille);
                }
            }
        }
    }
    
    
    
