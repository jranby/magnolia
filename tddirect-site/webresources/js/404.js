	var canvas = document.getElementById("myCanvas");

	// we're creating the content variable to store the 2D rendering context 
	var content = canvas.getContext("2d");

	// initial x and y co-ordinate of the ball
	var ballPosx = canvas.width/2;
	var ballPosy = canvas.height-30;

	// to be used to determined where the new x and y co-ordinates will be each loop
	var ballPosDx = 2;
	var ballPosDy = -2;	

	//To make the calculations easier let's define a variable called 
	//ballRadius that will hold the radius of the drawn circle and be 
	//used for calculations.
	var ballRadius = 10;

	//Here we're defining the height and width of the paddle,
	//and its starting point on the x axis, for use in calculations 
	//further on down the code. 
	var paddleHeight = 8;
	var paddleWidth = 135;
	var paddleX = (canvas.width-paddleWidth)/2;

	//The default value for both is false because at the 
	//beginning the control buttons are not pressed.
	var rightDirection = false
	var leftDirection = false

	//Brick variables
	var brickRowCount = 6;
	var brickColumnCount = 25;
	var brickWidth = 48;
	var brickHeight = 24;
	var brickPadding = 0;
	var brickOffsetTop = 0;
	var brickOffsetLeft = 0;

	//score
	var score =0;

	// player lives
	var lives = 5;

	//Creating the brick array
	var bricks = [];
	for(c=0; c<brickColumnCount; c++) {
	    bricks[c] = [];
	    for(r=0; r<brickRowCount; r++) {
	        bricks[c][r] = { ballPosx: 0, ballPosy: 0, status: 1};
	    }
	}

	//drawing the circle
	function drawBall(){
		content.beginPath();
		content.arc(ballPosx, ballPosy, ballRadius, 0, Math.PI*2);
		content.fillStyle ="#004127";
		content.fill();
		content.closePath();
	}

	//drawing the paddle
	function drawPaddle(){
		content.beginPath();
	    content.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
	    content.fillStyle = "#004127";
	    content.fill();
	    content.closePath();
	}

	//we're looping through the rows and columns to set the x and y 
	//position of each brick, and we're also painting a brick on the 
	//Canvas — size brickWidth x brickHeight — with each loop iteration.	
	function drawBricks() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
        	if(bricks[c][r].status == 1) {
	            var brickX = (c*(brickWidth+brickPadding))+brickOffsetLeft;
	            var brickY = (r*(brickHeight+brickPadding))+brickOffsetTop;
	            bricks[c][r].ballPosx = brickX;
	            bricks[c][r].ballPosy = brickY;
	            content.beginPath();
	            content.rect(brickX, brickY, brickWidth, brickHeight);
	            content.fillStyle = "#ebebeb";
	            content.fill();
	            content.closePath();
	        	}
	        }
	    }
	}

			//a collision detection function that will loop through all the 
			//bricks and compare every single brick's position with the ball's 
			//coordinates as each frame is drawn. For better readability of the 
			//code we will define the b variable for storing the brick object in 
			//every loop of the collision detection:
	function collisionDetection() {
    for(c=0; c<brickColumnCount; c++) {
        for(r=0; r<brickRowCount; r++) {
            var b = bricks[c][r];
	            if(b.status ==1){
	            //IF The x position of the ball is greater than the x position of the brick.
	            //& The x position of the ball is less than the x position of the brick plus its width.
	            //& The y position of the ball is greater than the y position of the brick.
	            //& The y position of the ball is less than the y position of the brick plus its height.
	            if(ballPosx > b.ballPosx && ballPosx < b.ballPosx+brickWidth && ballPosy > b.ballPosy && ballPosy < b.ballPosy+brickHeight) {
	                ballPosDy = -ballPosDy;
	                b.status = 0;
	                // Adds to the score as bricks are hit
	                score++;	                
	                	//The document.location.reload() function reloads 
	                	//the page and starts the game again once the alert button is clicked.
		                if(score == brickRowCount*brickColumnCount) {
	                        alert("YOU WIN, CONGRATULATIONS!");
	                        document.location.reload();
	                    }
		            }
		        }
	        }
	    }
	}

	function drawScore() {
	    content.font = "20px Montserrat bold";
	    content.fillStyle = "#004127";
	    content.fillText("Score: "+score, 20, 180);
	}

	function drawLives() {
	    content.font = "20px Montserrat bold";
	    content.fillStyle = "#004127";
	    content.fillText("Lives: "+lives, canvas.width-75, 180);
	}

	function draw() {	
		//to clear the canvas content each loop		
		content.clearRect(0, 0, canvas.width, canvas.height);

		//updates the ball position each loop
		drawBall();

		//draws the paddle
		drawPaddle();

		//draws the score
		drawScore();

		//draws the player lives
		drawLives();

		collisionDetection();

		//draws the bricks
		drawBricks();

		// IF x position is higher than the canvas width (with the ballRadius 
		// subtracted) 
		// OR if the x position is lower than ballRadius
		// THEN change the direction of the ball by setting it to equal itself but
		// reversed.		
		if(ballPosx + ballPosDx > canvas.width-ballRadius || ballPosx + ballPosDx < ballRadius) 
			{
			    ballPosDx = -ballPosDx; 
			}

		// Instead of allowing the ball to bounce off all four walls, 
		// let's only allow three now — left, top and right. Hitting the 
		// bottom wall will end the game. We'll edit the second if block 
		// so it's an if else block that will trigger our "game over" state 
		// upon the ball colliding with the bottom edge of the canvas
		if (ballPosy + ballPosDy < ballRadius)
			{
				ballPosDy = -ballPosDy;
			}

		else if(ballPosy + ballPosDy > canvas.height-ballRadius) 
			{
			   if(ballPosx > paddleX && ballPosx < paddleX + paddleWidth)
			   		{
			   			ballPosDy = -ballPosDy -0.1; //(number increases speed when ball hits paddle)
			   		}

			   	else{
		            lives--;
		            if(!lives) {
		                alert("GAME OVER");
		                document.location.reload();			   		 
			   		}
			   		else{
		                ballPosx = canvas.width/2;
		                ballPosy = canvas.height-30;
		                ballPosDx = 3;
		                ballPosDy = -3;
		                paddleX = (canvas.width-paddleWidth)/2;
					}
				}
			}

		// If the left cursor is pressed, the paddle will 
		// move 7 pixels to the left, and if the right cursor 
		// is pressed, the paddle will move 7 pixels to the right. 
		if(rightDirection && paddleX < canvas.width-paddleWidth) 
			{		
				//paddle speed
			    paddleX += 5;
			}
		else if(leftDirection && paddleX > 0) 
			{		
				//paddle speed
			    paddleX -= 5;
			}

		ballPosx += ballPosDx;
		ballPosy += ballPosDy;

		requestAnimationFrame(draw);
	}

	document.addEventListener("keydown", keyDownHandler, false);
	document.addEventListener("keyup", keyUpHandler, false);
	//When the keydown event is fired on any of the keys on your 
	//keyboard (when they are pressed), the keyDownHandler() 
	//function will be executed. The same pattern is true for 
	//the second listener: keyup events will fire the keyUpHandler() 
	//function (when the keys stop being pressed).
	//
	//Both functions take an event as a parameter, represented by the 
	//e variable. From that you can get useful information: the keyCode holds 
	//the information about the key that was pressed. For example key code 37 
	//is the left cursor key and 39 is the right cursor. If the left cursor is 
	//pressed, then the leftPressed variable is set to true, and when it is released 
	//the leftPressed variable is set to false. The same pattern follows 
	//with the right cursor and the rightPressed variable.
	function keyDownHandler(e) 
	{
	    if(e.keyCode == 39) 
		    {
		        rightDirection = true;
		    }
	    else if(e.keyCode == 37) 
		    {
		        leftDirection = true;
		    }
	}

	function keyUpHandler(e) 
	{
	    if(e.keyCode == 39) 
		    {
		        rightDirection = false;
		    }
	    else if(e.keyCode == 37) 
		    {
		        leftDirection = false;
		    }
	}

	// Mouse movement
	document.addEventListener("mousemove", mouseMoveHandler, false);
	// In this function we first work out a relativeX value, which is equal to the
	// horizontal mouse position in the viewport (e.clientX) minus the distance between 
	// the left edge of the canvas and left edge of the 
	// viewport (canvas.offsetLeft) — effectively this is equal to the distance 
	// between the canvas left edge and the mouse pointer. If the relative X pointer 
	// position is greater than zero and lower than the Canvas width, the pointer is 
	// within the Canvas boundaries, and the paddleX position (anchored on the left 
	// edge of the paddle) is set to the relativeX value minus half the width of the 
	// paddle, so that the movement will actually be relative to the middle of the paddle.
	function mouseMoveHandler(e) {
	    var relativeX = e.clientX - canvas.offsetLeft;
	    if(relativeX > 0 && relativeX < canvas.width) {
	        paddleX = relativeX - paddleWidth/2;
	    }
	}


	draw();