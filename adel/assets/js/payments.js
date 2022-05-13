function btt(){
    console.log("test");
}



let modal = document.getElementById("myModal");

// Get the button that opens the modal
let btn = document.getElementById("btView");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    document.getElementById('input_route_code').value = '';
    document.getElementById('input_trip_code').value = '';
  modal.style.display = "none";
  document.getElementById('details').style.display='none';

  document.getElementById('email').style.display='none';

}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// document.getElementById('input_trip_code').style.onclick = style.background = 'red';

function onClickHandler(elem) {
    elem.style.background = '#317efb';
    elem.style.color = 'white';
    // elem.style.placeholder = 'darkblue';
    
    }
    document.getElementById('email').style.display='none';
document.getElementById('send').style.display='none';
document.getElementById('details').style.display='none';
document.getElementById('wrong1').style.display='none';
document.getElementById('wrong2').style.display='none';
function setBill(){
if(document.getElementById('input_trip_code').value == JSON.parse(window.localStorage.getItem(0)).tId){
document.getElementById('details').style.display = 'block';
document.getElementById('wrong1').style.display='none';
document.getElementById('total').style.display='none';
document.getElementById('ttt').style.display = 'block';
}
else{
    document.getElementById('wrong1').style.display='block';
}

}

function getTotal(){
    if(document.getElementById('input_route_code').value == 'afm432'){
        document.getElementById('total').style.display='block';
    document.getElementById('total').innerText = '60 000 $  (including internal transports)';
    document.getElementById('wrong2').style.display='none';
    document.getElementById('send').style.display='block';
}
else{
    document.getElementById('wrong2').style.display='block';
}
}
function send(){
    document.getElementById('email').style.display='block';
    document.getElementById('ttt').style.display = 'none';
}
let counter = 6234;
function first(){
    document.getElementById('audi').innerText = JSON.parse(window.localStorage.getItem(1)).tCargoCompanies;
    document.getElementById('audi1').innerText = JSON.parse(window.localStorage.getItem(1)).tCargoCompanies;
    document.getElementById('trip-code').innerText = JSON.parse(window.localStorage.getItem(0)).tId;
    document.getElementById('bill-code').innerText = counter;
}