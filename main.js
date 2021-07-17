var mouseEvent = "empty";
var lpx, lpy;

canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red"
width=200;

canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(){
    mouseEvent="mouseleave";
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(){
    mouseEvent="mouseup";
}
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    mouseX=e.clientX-canvas.offsetLeft;
    mouseY=e.clientY-canvas.offsetTop;
    circle(mouseX, mouseY);
}
function circle(mouseX, mouseY){
    ctx.beginPath();
    ctx.strokeStyle=color;
    ctx.lineWidth=width;
    ctx.arc(mouseX,mouseY,50,0,2*Math.PI);
    ctx.stroke();
}

canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    cpx=e.clientX-canvas.offsetLeft;
    cpy=e.clientY-canvas.offsetTop;
    if (mouseEvent=="mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.arc(200,200,50,0,2*Math.PI); 
        ctx.moveTo(lpx,lpy);
        ctx.lineTo(cpx,cpy);
        ctx.stroke();
    }
    lpx=cpx;
    lpy=cpy;
}