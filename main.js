canvas=document.getElementById("myCanvas");
cdx=canvas.getContext("2d");
NASA_ARRAY=["NASA_IMG_1.jfif", "NASA_IMG_2.jfif", "NASA_IMG_3.jfif", "NASA_IMG_4.jpg"]
random_number=Math.floor(Math.random()*4);
rover_width=100; 
rover_height=90;
background_image=NASA_ARRAY[random_number];
rover_image="rover.png";
rover_x=10;
rover_y=10;
function add(){
    background_imgtag=new Image();
    background_imgtag.onload=uploadBackground;
    background_imgtag.src=background_image;

    rover_imgtag=new Image();
    rover_imgtag.onload=uploadRover;
    rover_imgtag.src=rover_image;
    
}
function uploadBackground(){
    cdx.drawImage(background_imgtag, 0, 0, canvas.width, canvas.height);
}
function uploadRover(){
    cdx.drawImage(rover_imgtag, rover_x, rover_y, rover_width, rover_height);
}
window.addEventListener("keydown", mykeydown);
function mykeydown(e){
    keypressed=e.keyCode; 
    if(keypressed=="38"){
        up();
        console.log("up");
    }
    if(keypressed=="40"){
        down();
        console.log("down");
    }
    if(keypressed=="37"){
        left();
        console.log("left");}

    if(keypressed=="39"){
            right();
            console.log("right");
        }
}
function up(){
    if (rover_y >=0){
        rover_y=rover_y-10;
        console.log("when up arrow pressed x="+ rover_x + " | y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function down(){
    if (rover_y <=500){
        rover_y=rover_y+10;
        console.log("when down arrow pressed x="+ rover_x + " | y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function left(){
    if (rover_x >=0){
        rover_x=rover_x-10;
        console.log("when left arrow pressed x="+ rover_x + " | y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}
function right(){
    if (rover_x <=700){
        rover_x=rover_x+10;
        console.log("when right arrow pressed x="+ rover_x + " | y=" + rover_y);
        uploadBackground();
        uploadRover();
    }
}