function remove(){
    document.getElementById("solution").value=""; 
}
function del(){
    document.getElementById("solution").value=document.getElementById("solution").value.slice(0,-1);
}
function display(value){
    document.getElementById("solution").value+=value;
}
function calculate(){
    var p=document.getElementById("solution").value;
    var q=eval(p);
    document.getElementById("solution").value=q;
}