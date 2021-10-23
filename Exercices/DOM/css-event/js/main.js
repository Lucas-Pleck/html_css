document.getElementById("btn").addEventListener("click", my_function);

var is_activated=true;

function my_function(){
    if (is_activated){
        is_activated=false
        document.getElementById("box").style.display="none";
    }
    else{
        is_activated=true;
        document.getElementById("box").style.display="block";
    }
}