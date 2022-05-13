// class Account{
//     constructor(email,password,firstName,lastName,phoneNumber){
//         this.email = email;
//         //this.email.type = "email";
//         this.password = password;
//         this.firstName = firstName;
//         this.lastName =  lastName;
//         this.PhoneNumber = phoneNumber;
//     }
// }
let text1 = "";
let account = {};
let accounts = [];
let s = 1;
function viewAll(){
   
    for(i=1;i<5;i++){
    //text1 = JSON.parse(localStorage.getItem(s));
   // document.getElementById("myPara").innerHTML = Object.values(text1);
    console.log("hello");
    console.log(accounts);
    }
}
function signUp(){
    let _email = document.getElementById('email').value;
 let _password = document.getElementById('password').value;
 let _firstName = document.getElementById('fName').value;
 let _lastName = document.getElementById('lName').value;
 let _phoneNumber = document.getElementById('phoneNumber').value;

// let account = new Account() ;
 account = {_email,_password,_firstName,_lastName,_phoneNumber};

// account = new Account(_email,_password,_firstName,_lastName,_phoneNumber);
accounts.push(account);
console.log(accounts);
localStorage.setItem(s,JSON.stringify(accounts));
localStorage.setItem("key",JSON.stringify(accounts));
s++;
//viewAll();
}

function logIn(){
    text1 = JSON.parse(localStorage.getItem("key"));
    console.log(text1);
   // let accounts1 = JSON.parse(localStorage.getItem("key"))
    for(let i=0 ; i < accounts.length; i++){
    if(document.getElementById('e').value == text1.email &&  
    document.getElementById('p').value == text1.password){
        // document.getElementById("signIn").addEventListener("click", console.log("success"));
        window.location = "home.html"
       console.log("success");
         }
         else{
            console.log('Error');     
         }
         
    }
   
}
