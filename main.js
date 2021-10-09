canvas = document.getElementById("myCanvas");
var last_position_of_x,last_position_of_y;
ctx= canvas.getContext("2d");
width_of_line=1;
color = "red"; 
var width = screen.width;
new_width=screen.width-70;
new_height=screen.height-300;

if(width < 992)
	{
	document.getElementById("myCanvas").width = new_width;
    document.getElementById("myCanvas").height = new_height;
    document.body.style.overflow = "hidden";
    
	}
	canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e)
{
    console.log("touchstart");
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("width_of_line").value;
    last_position_of_x=e.touches[0].clientX-canvas.offsetLeft;
    last_position_of_y=e.touches[0].clientY-canvas.offsetTop;

}


canvas.addEventListener("touchMove",my_touchmove);
function my_touchmove(e)
{
console.log("touch Move Start");
current_position_of_touchX=e.touches[0].clientX-canvas.offsetLeft;
current_position_of_touchY=e.touches[0].clientY-canvas.offsetTop;

ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width_of_line;


console.log("last x&y coordinates =");
console.log("X = "+last_position_of_x+",Y = "+last_position_of_y);
ctx.moveTo(last_position_of_x,last_position_of_y);


console.log("current x&y coordinates =");
console.log("X = "+current_position_of_touchX+",Y = "+current_position_of_touchY);
ctx.lineTo(current_position_of_touchX,current_position_of_touchY);
ctx.stroke();


last_position_of_x=current_position_of_touchX;
last_position_of_y=current_position_of_touchY;
}


function clearArea()
{
ctx.clearRect(0,0,canvas.width,canvas.height);
}