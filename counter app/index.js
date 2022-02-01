let x=0
document.getElementById("num").innerHTML="<h1>"+x+"</h1>";

function increase(){
    x+=1;
    document.getElementById("num").innerHTML= "<h1>"+x+"</h1>";
    
}


function decrease(){
    if(x>0){
        x-=1;
        document.getElementById("num").innerHTML= "<h1>"+x+"</h1>";
    }   
}

