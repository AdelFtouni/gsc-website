class Account{
    constructor(email,password,firstName,lastName,phoneNumber){
        this.email = email;
        //this.email.type = "email";
        this.password = password;
        this.firstName = firstName;
        this.lastName =  lastName;
        this.PhoneNumber = phoneNumber;
    }
}
let accounts = [];
let text = document.createElement('p');
document.body.appendChild(text);
let i=0;
function add(){
    let _email = document.getElementById('email').value;
let _password = document.getElementById('password').value;
let _firstName = document.getElementById('fName').value;
let _lastName = document.getElementById('lName').value;
let _phoneNumber = document.getElementById('phoneNumber').value;
 let account = {_email,_password,_firstName,_lastName,_phoneNumber};
 accounts.push(account);
 //accounts[i] = (JSON.parse(window.localStorage.getItem('account')));
    window.localStorage.setItem(localStorage.length, JSON.stringify(account));
    // accounts.push( JSON.parse(window.localStorage.getItem('account')));
   
//i++;
}
function read(){
console.log(accounts);
    JSON.parse(window.localStorage.getItem('account'))
  console.log( JSON.parse(window.localStorage.getItem('account'))) ;
}
function readFirst(){
    console.log( JSON.parse(window.localStorage.getItem(i))._email) ;
    text.innerText = JSON.parse(window.localStorage.getItem(i))._email + 
    JSON.parse(window.localStorage.getItem(i)).password +
    JSON.parse(window.localStorage.getItem(i))._firstName + 
    JSON.parse(window.localStorage.getItem(i))._lastName + 
    JSON.parse(window.localStorage.getItem(i))._phoneNumber;

//     let table = document.createElement('table');
//     table.className = "mmmm";
// document.body.appendChild(table);
// console.log(table.className);
//     let tr = table.insertRow(0);


//     let td0 = tr.insertCell(0);
//     tr.appendChild(td0);
//     td0.innerHTML =  JSON.parse(window.localStorage.getItem('account'))._email;

//     let td1 = tr.insertCell(1);
//     tr.appendChild(td1);
//     td0.innerHTML =  JSON.parse(window.localStorage.getItem('account'))._password;

//     let td2 = tr.insertCell(2);
//     tr.appendChild(td2);
//     td0.innerHTML =  JSON.parse(window.localStorage.getItem('account')).firstName;

//     let td3 = tr.insertCell(3);
//     tr.appendChild(td3);
//     td0.innerHTML =  JSON.parse(window.localStorage.getItem('account')).lastName;
    
//     let td4 = tr.insertCell(4);
//     tr.appendChild(td4);
//     td0.innerHTML =  JSON.parse(window.localStorage.getItem('account')).phoneNumber;
//     table.appendChild(tr);
let get = JSON.parse(window.localStorage.getItem(i));
let det = document.getElementById('table');
    det.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        // const str = localStorage.getItem(i +1);
        // convert string to valid object
       // const parsedObj = JSON.parse(str);
       if(localStorage.length == 0 ){
           console.log('no data to show');
       }
       else{
        det.innerHTML += `<tr><td>${JSON.parse(window.localStorage.getItem(i))._email}</td>
        <td>${JSON.parse(window.localStorage.getItem(i))._password}</td>
        <td>${JSON.parse(window.localStorage.getItem(i))._firstName}</td>
        <td>${JSON.parse(window.localStorage.getItem(i))._lastName}</td>
        <td>${JSON.parse(window.localStorage.getItem(i))._phoneNumber}</td>
        <td><button onclick=localStorage.removeItem(${i})>delete</button></td></tr>`;
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
function check(){
    if(document.getElementById('e').value == JSON.parse(window.localStorage.getItem(0))._email &&  
    document.getElementById('p').value == JSON.parse(window.localStorage.getItem(0))._password){
        console.log("true informations");
        window.location.href='home.html';
    }
    else{
        console.log("wrong email or password");
    }
}