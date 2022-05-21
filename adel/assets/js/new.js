class Trip{
    constructor(tIds,tCargoCompaniess,tOrigins,tDestinations,tDepartures,tArrivals,tVesselss,tRoutes){
        this.tIds=tIds,
   this.tCargoCompaniess=tCargoCompaniess,
   this.tOrigins=tOrigins,
   this.tDestinations=tDestinations,
   this.tDepartures=tDepartures,
   this.tDestinations=tDestinations,
   this.tArrivals=tArrivals,
   this.tVesselss=tVesselss,
   this.tRoutes=tRoutes
    }
}

let trips = [];
let text = document.createElement('p');
document.body.appendChild(text);
let i=0;


function add(){
    let tId  =  document.getElementById('trip').value;
    let tCargoCompanies  =  document.getElementById('cargoCompanies').value;
    let tOrgin  =  document.getElementById('origin').value;
    let tDestination  =  document.getElementById('destination').value;
    let  tDepartue =  document.getElementById('departure').value;
    let tArrival  =  document.getElementById('arrival').value;
    let tVessels = document.getElementById('vessels').value;
    let tRoute  =  document.getElementById('route').value;
 let trip = {tId,tCargoCompanies,tOrgin,tDestination,tDepartue,tArrival,tVessels,tRoute};
 trips.push(trip);
 //accounts[i] = (JSON.parse(window.localStorage.getItem('account')));
    window.localStorage.setItem(localStorage.length, JSON.stringify(trip));
    // accounts.push( JSON.parse(window.localStorage.getItem('account')));
   
//i++;
readFirst();
}
function read(){
console.log(trips);
    //JSON.parse(window.localStorage.getItem('trip'))
  //console.log( JSON.parse(window.localStorage.getItem('trip'))) ;
}
function readFirst(){
    console.log( JSON.parse(window.localStorage.getItem(i))) ;
    // text.innerText = JSON.parse(window.localStorage.getItem(i)).tId + 
    //  JSON.parse(window.localStorage.getItem(i)).tCargoCompanies + 
    // JSON.parse(window.localStorage.getItem(i)).tOrgin +
    // JSON.parse(window.localStorage.getItem(i)).tDestination + 
    // JSON.parse(window.localStorage.getItem(i)).tDepartue + 
    // JSON.parse(window.localStorage.getItem(i)).tArrival   + 
  
    // JSON.parse(window.localStorage.getItem(i)).tVessels + 
    // JSON.parse(window.localStorage.getItem(i)).tRoute;


// let get = JSON.parse(window.localStorage.getItem(localStorage));
let det = document.getElementById('tablefa');
    det.innerHTML = ` <th id="#asdf">Trip</th>
    <th id="#asdf">Cargo companies</th>
    <th id="#asdf">origin</th>
    <th id="#asdf">Destination</th>
    <th id="#asdf">Departure</th>
    <th id="#asdf">Arrival</th>
    <th id="#asdf">Vessels</th>
    <th id="#asdf">Route</th>`;
    for (let i = 1; i < localStorage.length; i++) {
        // const str = localStorage.getItem(i +1);
        // convert string to valid object
       // const parsedObj = JSON.parse(str);
       if(localStorage.length == 0 ){
           console.log('no data to show');
       }
       else{
      
        det.innerHTML += `   
       
        <tr><td>${JSON.parse(window.localStorage.getItem(i)).tId}</td>
        <td>${JSON.parse(window.localStorage.getItem(i)).tCargoCompanies}</td>
        <td>${JSON.parse(window.localStorage.getItem(i)).tOrgin}</td>
        <td>${JSON.parse(window.localStorage.getItem(i)).tDestination}</td>
        <td>${JSON.parse(window.localStorage.getItem(i)).tDepartue}</td>
        <td>${JSON.parse(window.localStorage.getItem(i)).tArrival}</td>
        <td>${JSON.parse(window.localStorage.getItem(i)).tVessels}</td>
        <td>${JSON.parse(window.localStorage.getItem(i)).tRoute}</td>
        </tr>`;
        
       }
  }
}
function delete1(){
    window.localStorage.clear();
}



function logIn(){
    //text1 = JSON.parse(localStorage.getItem("key"));
    //console.log(text1);
   // let accounts1 = JSON.parse(localStorage.getItem("key"))
    for(let j=0 ; j < accounts.length; j++){
    if(document.getElementById('e').value === JSON.parse(window.localStorage.getItem(4))._email &&  
    document.getElementById('p').value === JSON.parse(window.localStorage.getItem(4))._password){
        // document.getElementById("signIn").addEventListener("click", console.log("success"));
       // window.location = "home.html"
       console.log("success");
    document.location.href='home.html';
       console.log("success");
         }
         else{
            console.log('Error');     
         }
         
    }
   
}