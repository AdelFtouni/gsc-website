let locations  = [
    
    "shanghai", "maldives","mombai","oman","saudi arabia","egypt","palestine","beirut"

] ;

function print(object){
console.log(object);
document.getElementById('locloc').innerHTML=object;
}
function track(array,printing,delay){
    document.getElementById('locloc').innerHTML=locations[0];
for(let i=0;i<locations.length;i++){
setTimeout(function(){
printing(array[i]);
},delay*i);

}
}
track(locations,print,2000);

