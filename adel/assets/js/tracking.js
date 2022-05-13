let locations  = [
    
    "shanghai", "maldives","mombai","oman","saudi arabia","egypt","palestine","beirut"

] ;
let colors = ["rgb(7, 26, 99)","rgb(7, 26, 99)","rgb(7, 26, 99)","rgb(7, 26, 99)","rgb(7, 26, 99)","rgb(7, 26, 99)","rgb(7, 26, 99)","green"];
function print(object){
console.log(object);
document.getElementById('locloc').innerHTML=object;


}

function track(array,printing,delay){
    document.getElementById('hide').style.display = 'none';
    document.getElementById('locloc').innerHTML=locations[0];
    document.getElementById('hidden').style.display = 'none';
    document.getElementById('az').style.display = 'none';
for(let i=0;i<locations.length;i++){
    document.getElementById('locloc').style.color = 'white';
    //  document.getElementById('locloc1').style.background =colors1[i];
setTimeout(function(){
    document.getElementById('locloc1').style.color = colors[i];
    // document.getElementById('locloc').style.background ='rgb(223, 147, 33)';
    if(i == 4){
        document.getElementById('hide0').style.display = 'none';
       
        document.getElementById('hide').style.display = 'block';
    }
    if(i==locations.length-1){
        // document.getElementById('locloc1').style.color = colors[i];
        document.getElementById('locloc1').style.background ='rgb(52, 213, 68)';
        document.getElementById('locloc').style.color = 'white';
         document.getElementById('spinner').style.display = 'none';
         document.getElementById('hidden').style.display = 'block';
       
         document.getElementById('az').style.display = 'block';
    }
printing(array[i]);
},delay*i);

}
}
track(locations,print,1000);

let colors1 = ["black","rgb(7, 26, 99)","rgb(7, 26, 99)","rgb(7, 26, 99)","rgb(7, 26, 99)","rgb(7, 26, 99)",
"rgb(7, 26, 99)","green"];
