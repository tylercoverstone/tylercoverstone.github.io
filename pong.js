var canvas;
var canvasContext;
var ballX = 400;
var ballY = 300;
var ballChangeX = 5;
var ballChangeY = 6;

var paddle1Y = 250;
var paddle2Y = 250;

var player1Score = 0;
var player2Score = 0;

var player1Win = false;
var player2Win = false;

var startScreen = true;

function calculateMousePos(evt)
{
	var rect = canvas.getBoundingClientRect();
	var root = document.documentElement;
	var mouseX = evt.clientX - rect.left - root.scrollLeft;
	var mouseY = evt.clientY - rect.top - root.scrollTop;
	return{
		x: mouseX,
		y: mouseY
	};
}

function handleMouseDown(evt)
{
	startScreen = false;

	if(player1Win == true || player2Win == true)
	{
		player1Score = 0;
		player2Score = 0;
		player1Win = false;
		player2Win = false;
	}
}

window.onload = function() 
{
	canvas = document.getElementById("pongCanvas");
	canvasContext = canvas.getContext("2d");

	var fps = 30;
	setInterval(moveAndDraw, 1000/fps);

	canvas.addEventListener('mousedown', handleMouseDown);

	canvas.addEventListener('mousemove', 
		function(evt){
			var mousePos = calculateMousePos(evt);
			if((mousePos.y > 50) && (mousePos.y < canvas.height - 50))
				paddle1Y = mousePos.y - 50;
		});

}

function reset()
{
	ballX = canvas.width / 2;
	ballY = canvas.height / 2;

	ballChangeX = -ballChangeX;

}

function moveAndDraw()
{
	moveElements();
	drawElements();
}

function computerPlayer()
{
	if(ballY - 35 > paddle2Y + 50)
		paddle2Y += 8;
	else if(ballY + 35 < paddle2Y + 50)
		paddle2Y -= 8;
}

function moveElements()
{
	if(startScreen)
		return;

	if(player1Win || player2Win)
		return;

	computerPlayer();

	ballX += ballChangeX;
	ballY += ballChangeY;

	if(ballX == 25)
	{
		if((ballY >= paddle1Y) && (ballY <= paddle1Y + 100))
		{
			ballChangeX = -ballChangeX;

			var dY = ballY - (paddle1Y + 50)
			ballChangeY = dY * 0.35;
		}
	}
	if(ballX <= -10)
	{
		player2Score++;

		if(player2Score >= 5)
			player2Win = true;

		reset();	
	}
	if(ballX == canvas.width - 15)
	{
		if((ballY >= paddle2Y) && (ballY <= paddle2Y + 100))
		{
			ballChangeX = -ballChangeX;

			var dY = ballY - (paddle2Y + 50)
			ballChangeY = dY * 0.35;
		}
	}
	if(ballX >= canvas.width + 10)
	{
		player1Score++;

		if(player1Score >= 5)
			player1Win = true;

		reset();
	}
	if(ballY <= 10)
	{
		ballChangeY = -ballChangeY;
	}
	if(ballY >= canvas.height - 10)
	{
		ballChangeY = -ballChangeY;
	}
	
}

function drawElements()
{
	canvasContext.fillStyle = "black";
	canvasContext.fillRect(0, 0, canvas.width, canvas.height);

	if(startScreen)
	{
		canvasContext.font = "150pt Impact"
		canvasContext.fillStyle = "white";
		canvasContext.fillText("PING", 200, 260);
		canvasContext.fillText("PONG", 180, 440);
		canvasContext.font = "20pt Impact"
		canvasContext.fillText("Click to play ", 10, canvas.height-10);

		return;
	}

	canvasContext.fillStyle = "white";
	canvasContext.fillRect(canvas.width/2 - 2, 0, 2, canvas.height);
	canvasContext.fillStyle = "white";
	canvasContext.font = "72pt Impact"
	canvasContext.fillText(player1Score, 175, 330);
	canvasContext.fillStyle = "white";
	canvasContext.fillText(player2Score, canvas.width - 225, canvas.height - 270);
	canvasContext.fillStyle = "white";
	canvasContext.fillRect(5, paddle1Y, 10, 100);
	canvasContext.fillStyle = "white";
	canvasContext.fillRect(canvas.width-15, paddle2Y, 10, 100);
	canvasContext.fillStyle = "white";
	canvasContext.beginPath();
	canvasContext.arc(ballX, ballY, 10, 0, Math.PI*2, true);
	canvasContext.fill();

	if(player1Win == true)
	{
		canvasContext.fillStyle = "green";
		canvasContext.fillText("PLAYER 1 WINS", 125, 100);
		canvasContext.font = "20pt Impact"
		canvasContext.fillText("Click to play again", 10, canvas.height-10);
	}
	if(player2Win == true)
	{
		canvasContext.fillStyle = "green";
		canvasContext.fillText("PLAYER 2 WINS", 125, 100);
		canvasContext.font = "20pt Impact"
		canvasContext.fillText("Click to play again", 10, canvas.height-10);
	}

}