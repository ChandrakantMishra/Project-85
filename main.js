canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
var Car1_width=120;
var Car1_height=70;
Car1_image="car1.png"
Car1_x=10;
Car1_y=10;
var Car2_width=120;
var Car2_height=70;
Car2_image="car2.png"
Car2_x=10;
Car2_y=100;
background_image="racing.jpg";



function add(){
    background_imgTag = new Image();
    background_imgTag.onload = uploadBackground;
    background_imgTag.src = background_image;

    Car1_imgTag = new Image();
    Car1_imgTag.onload = uploadCar1;
    Car1_imgTag.src = Car1_image;

    Car2_imgTag = new Image();
    Car2_imgTag.onload = uploadCar2;
    Car2_imgTag.src = Car2_image;
}

function uploadBackground(){
    ctx.drawImage(background_imgTag,0,0,canvas.width,canvas.height);
}
function uploadCar1(){
    ctx.drawImage(Car1_imgTag,Car1_x,Car1_y,Car1_width,Car1_height);
}
function uploadCar2(){
    ctx.drawImage(Car2_imgTag,Car2_x,Car2_y,Car2_width,Car2_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if(keyPressed=='38')
    {
        up();
        console.log("up");
    }
    if(keyPressed=='40')
    {
        down();
        console.log("down");
    }
    if(keyPressed=='37')
    {
        left();
        console.log("left");
    }
    if(keyPressed=='39')
    {
        right();
        console.log("right");
    }


    if(keyPressed=='87')
    {
        Car2_up();
        console.log("W");
    }
    if(keyPressed=='83')
    {
        Car2_down();
        console.log("S");
    }
    if(keyPressed=='65')
    {
        Car2_left();
        console.log("A");
    }
    if(keyPressed=='68')
    {
        Car2_right();
        console.log("D");
    }
    if(Car1_x>700){
        console.log("Car1");
        document.getElementById("game_status").innerHTML="Car 1 Won!!";
    }
    else if(Car2_x>700){
        console.log("Car2");
        document.getElementById("game_status").innerHTML="Car 2 Won!!";
    }
}


function up(){
    if(Car1_y >= 0)
    {
        Car1_y=Car1_y-10;
        console.log("when up arrow is pressed,  x= "+Car1_x+ "- y= "+Car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function down(){
    if(Car1_y <= 500)
    {
        Car1_y=Car1_y+10;
        console.log("when down arrow is pressed,  x= "+Car1_x+ "- y= "+Car1_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function left(){
    if(Car1_x >= 0)
    {
        Car1_x=Car1_x-10;
        console.log("When left arrow is pressed,  x= "+Car1_x+"- y="+Car1_y)
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function right(){
    if(Car1_x <= 700)
    {
         Car1_x=Car1_x+10;
         console.log("When right arrow is pressed,  x= "+Car1_x+"- y="+Car1_y)
         uploadBackground();
         uploadCar1();
         uploadCar2();
    }
}



function Car2_up(){
    if(Car2_y >= 0)
    {
        Car2_y=Car2_y-10;
        console.log("when up arrow is pressed,  x= "+Car2_x+ "- y= "+Car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car2_down(){
    if(Car2_y <= 500)
    {
        Car2_y=Car2_y+10;
        console.log("when down arrow is pressed,  x= "+Car_x+ "- y= "+Car2_y);
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car2_left(){
    if(Car2_x >= 0)
    {
        Car2_x=Car2_x-10;
        console.log("When left arrow is pressed,  x= "+Car2_x+"- y="+Car2_y)
        uploadBackground();
        uploadCar1();
        uploadCar2();
    }
}

function Car2_right(){
    if(Car2_x <= 700)
    {
         Car2_x=Car2_x+10;
         console.log("When right arrow is pressed,  x= "+Car2_x+"- y="+Car2_y)
         uploadBackground();
         uploadCar1();
         uploadCar2();
    }
}




