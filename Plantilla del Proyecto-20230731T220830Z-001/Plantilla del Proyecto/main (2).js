
// Crea la variable del lienzo
var canvas = new fabri.Canvas('myCanbas')
//Establece las posiciones iniciales para las imágenes de la pelota y el hoyo.
bal_y = 0;
ball_x = 0;
hole_y = 400;
hole_x = 800
block_image_width = 5;
block_image_height = 5;

function load_img(){
	fabric.Image.formURL("golf-h1.png", function(Img)) {
	new_image();
	hole_obj =Img;
	hole_obj.scaleToWidht(50);
	hole_obj.scaleToHeigt(50);
	hole_obj.set({
	top:hole_y,left:hole_x
});
canvas.add(hole_obj);
	});
function new_image()
{
	fabric.Image.formURL("ball.png", function(Img)) {
		ball_obj =Img;
		ball_obj.scaleToWidht(50);
		ball_obj.scaleToHeigt(50);
		ball_obj.set({
		top:ball_y,left:ball_x
});
canvas.add(ball_obj);
	});
window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Revisa las coordenadas de las imágenes de la pelota y el hoyo para finalizar el juego. 
	Y las coordenadas del id coordinates coinciden, entonces elimina la pelota.  
	muestra "¡FIN DEL JUEGO!" 
	y haz el borde del lienzo "rojo".*/
	document.getElementById("hd3").innerHTML="!METISTE LA PELOTA!";
	document.getElementById("myCanvas").stile.brodeColor = "red";
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("arriba");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("abajo");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("izquierda");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("derecha");
		}
		if((ball_x==hole_x)&&(ball==hole_y)){
			canvas.remove(ball_obj);
		}
	}
	
	function up()
	{
		// Escribe código para mover la pelota hacia arriba
	}

	function down()

	if(ball_y <=450)
	{
       ball_y = ball_y +block_image_height;
	   console.log("altura de lsa imagen - "+block_image_height);
	   console.log("cuando se presiona la flecha hacia abajo, x = "+ ball_x +", y = " + ball_y);
       canvas.remove(ball_obj);
	   new_image(;)
	}

	function left()
	{
		if(ball_x >5)
		{
			// Escribe código para mover la pelota a la izquierda.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Escribe código para mover la pelota a la derecha.
		}
	}
	
}

