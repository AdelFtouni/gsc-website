// Grap elements
const selectElement = selector => {
  const element = document.querySelector(selector);
  if(element) return element;
  throw new Error(`Something went, make sure that $(selector) exists or is typed correctly.`);
};


// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
  const mobileMenu = selectElement('#menu');
  mobileMenu.classList.toggle('activated');
  menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);






// Example starter JavaScript for disabling form submissions if there are invalid fields
 (function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
  })()
  // When the user clicks on div, open the popup
function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
  }

document.getElementById("continue").addEventListener("click", function(){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }
    return true;

})

let inputFirstName=document.getElementById('firstName');
let inputLastName=document.getElementById('lastName');
let inputPhoneNumber=document.getElementById('phoneNumber');
let inputDepartment=document.getElementById('department');
let inputCompanyName=document.getElementById('companyName');
let inputAddress=document.getElementById('address');
let inputCompanyType=document.getElementById('companyType');
let inputCity=document.getElementById('city');
let inputZipCode=document.getElementById('zipCode');
let inputCountryRegion=document.getElementById('countryRegion');
let inputVatNumber=document.getElementById('vatNumber');
let inputColleagueEmail=document.getElementById('colleagueEmail');
let submit=document.getElementById('continue');

//Empty Array To Store The Info
let arrayOfInfo=[];


//Check if theres Info In Local Storage
 //if(localStorage.getItem("info")){
 //arrayOfInfo=JSON.parse(localStorage.getItem("info"));
//}

//Trigger Get data From Local Storage Function
//getDataFromLocalStorage();

//Add Info
submit.addEventListener("click",myFunction)
function myFunction2(){
    if(input.value !==""){
    //Add Info To Array
    addInfoToArray(input.value);
    //Empty Input Field
    input.value="";
  }
}
 function addInfoToArray(){
  // Info Data
   const info={
     id: Date.now(),
     FirstName:inputFirstName.value,
     LastName:inputLastName.value,
     PhoneNumber:inputPhoneNumber.value,
     Department:inputDepartment.value,
     CompanyName:inputCompanyName.value,
     Address:inputAddress.value,
     CompanyType:inputCompanyType.value,
     City:inputCity.value,
     ZipCode:inputZipCode.value,
     CountryRegion:inputCountryRegion.value,
     VatNumber:inputVatNumber.value,
     ColleagueEmail:inputColleagueEmail.value,
 
};

  //push Info To Array Of Info
  arrayOfInfo.push(info);
   console.log(arrayOfInfo);
  //Add Info To Local Storage
  addInfoToLocalStorage(arrayOfInfo);
  //For Testing
  console.log(arrayOfInfo);
  // console.log(JSON.stringify(arrayOfInfo));

}

//  function addInfoToLocalStorage(arrayOfInfo){
//   window.localStorage.setItem("Info", JSON.stringify(arrayOfInfo));
//  }
//   function getDataFromLocalStorage(){
//    let data=window.localStorage.getItem("info");
//     if(data){
//      let info=JSON.parse(data);
//      console.log(info);
//    }
// }






   

// let input=document.querySelector(".input");
// let submit=document.querySelector(".add");

//Empty Array To Store The Info
// let arrayOfInfo=[];


//Check if theres Info In Local Storage
// if(localStorage.getItem("info")){
//   arrayOfInfo=JSON.parse(localStorage.getItem("info"));
// }

//Trigger Get data From Local Storage Function
// getDataFromLocalStorage();

//Add Info
// submit.onclick=function(){
//   if(input.value !==""){
    //Add Info To Array
    // addInfoToArray(input.value);
    //Empty Input Field
//     input.value="";

//   }
// }
// function addInfoToArray(infoText){
  // Info Data
  // const info={
  //   id: Date.now(),
  //   title: infoText,
  // };

  //push Info To Array Of Info
  // arrayOfInfo.push(info);
  // console.log(arrayOfInfo);
  //Add Info To Local Storage
  // addInfoToLocalStorage(arrayOfInfo);
  //For Testing
//   console.log(arrayOfInfo);
//   console.log(JSON.stringify(arrayOfInfo));

// }
// function addInfoToLocalStorage(arrayOfInfo){
//   window.localStorage.setItem("Info", JSON.stringify(arrayOfInfo));

// }
// function getDataFromLocalStorage(){
//   let data=window.localStorage.getItem("info");
//   if(data){
//     let info=JSON.parse(data);
//     console.log(info);
//   }
// // }
// let myFirstUser = {
//   firstName : "fatima",
//   lastName: "Mansour",
//   address : "Liban",

// };
// let myFirstCompany={
//   department : "documentation",
//   companyName: "puma",
//   companyType:"customs",
//   city:"Beirut",
//   zipCode: 123456,
//   colleagues: "CMA CGM",

// };
// let myFirstAccount={
//   email:"fatimamans77@gmail.com",
//   password: "fatima7",
// }
// document.getElementById('saveAndSignUp').addEventListener("click", function(){
//   localStorage.setItem('infoUser',JSON.stringify(myFirstUser));
//   localStorage.setItem('infoCompany',JSON.stringify(myFirstCompany));
//   localStorage.setItem('infoAccount',JSON.stringify(myFirstAccount));

// })
 

// function view(){
//  document.getElementById('login').innerHTML=localStorage.getItem('infoAccount');
//  document.getElementById('password').innerHTML=localStorage.getItem('infoAccount');
//  console.log(JSON.parse(localStorage.getItem('infoUser')));
// }
// document.getElementById('continue').addEventListener("click", function(){
//   const user=JSON.parse(localStorage.getItem('infoAccount'));
//   document.getElementById('login').textContent=user.email;
// })

// function del(){
// localStorage.removeItem('lName');
// }
