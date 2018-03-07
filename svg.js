//Team Pusheen
//Tiffany Moi and Michael Ruvinshteyn
//SoftDev2 pd7
//K09 -- Ask Circles [Change || Die]
//2018-03-07

var pic = document.getElementById("vimage");
var clear_btn = document.getElementById("clear");



var drawDot = function(e, x = -1, y = -1){
    
    if (x == -1 || y == -1){
        x = e.offsetX;
        y = e.offsetY;
    }
    var c = document.createElementNS(
    "http://www.w3.org/2000/svg", "circle");
    c.setAttribute("cx", x);
    c.setAttribute("cy", y);
    c.setAttribute("r", 25);
    c.setAttribute("fill", "red");
    c.setAttribute("stroke", "black");
    
    c.addEventListener("click", proceed, true)
    c.addEventListener("click", stopProp)
    
    pic.appendChild(c);
 };

var stopProp = function(ev){
    ev.stopPropagation();
};

var proceed = function(e){
    if (this.getAttribute("fill") == "green"){
        var x = Math.random() * 500;
        var y = Math.random() * 500;
        drawDot(e, x, y);
        this.remove();
    }
    else{
        this.setAttribute("fill", "green");
    }
};



var clear = function(){
    while (pic.firstChild) {
        pic.removeChild(pic.firstChild);
    }
    start = true;
};


clear_btn.addEventListener("click", clear);
pic.addEventListener("click", drawDot);

