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
// function myFunction() {
//     var popup = document.getElementById("myPopup");
//     popup.classList.toggle("show");
//   }

let myCancel=document.getElementById('my_cancel');
myCancel.addEventListener("click", Cancel);
function Cancel(){
  document.getElementById("myForm").reset();

}
//       document.getElementById('exampleFormControlTextarea1').value="";
//       document.getElementById('flexRadioDefault1').value="";
//       document.getElementById('flexRadioDefault2').value="";
//       document.getElementById('flexRadioDefault3').value="";
//       document.getElementById('flexRadioDefault4').value="";
//       document.getElementById('flexRadioDefault5').value="";
//       document.getElementById('flexRadioDefault6').value="";
//       document.getElementById('flexRadioDefault7').value="";
//       document.getElementById('flexRadioDefault8').value="";
//       document.getElementById('flexRadioDefault9').value="";
//       document.getElementById('flexRadioDefault10').value="";
//       document.getElementById('flexRadioDefault11').value="";
//       document.getElementById('flexRadioDefault12').value="";
//       document.getElementById('flexRadioDefault13').value="";
//       document.getElementById('flexRadioDefault14').value="";
//       document.getElementById('flexRadioDefault15').value="";
//       document.getElementById('flexRadioDefault16').value="";
//       document.getElementById('collectionPoint').value="";
//       document.getElementById('portOfLoading').value="";
//       document.getElementById('portOfDischarge').value="";
//       document.getElementById('deliveryPoint').value="";
//       document.getElementById('companyType2').value="";
//       document.getElementById('flexRadioDefault17').value="";
//       document.getElementById('flexRadioDefault18').value="";
//       document.getElementById('shipmentVolume').value="";
//       document.getElementById('length').value="";
//       document.getElementById('weight').value="";
//       document.getElementById('quantity').value="";
//       document.getElementById('width').value="";
//       document.getElementById('teu').value="";
//       document.getElementById('height').value="";
//       document.getElementById('nbOfPieces').value="";
//       document.getElementById('quantity').innerHTML="";
    


// }
//Local Storage part

// let shippingDescription=document.getElementById('exampleFormControlTextarea1');
// let importRadio=document.getElementById('flexRadioDefault1');
// let exportRadio=document.getElementById('flexRadioDefault2');
// let containerType1=document.getElementById('flexRadioDefault3');
// let containerType2=document.getElementById('flexRadioDefault4');
// let containerType3=document.getElementById('flexRadioDefault5');
// let containerType4=document.getElementById('flexRadioDefault6');
// let containerType5=document.getElementById('flexRadioDefault7');
// let containerType6=document.getElementById('flexRadioDefault8');
// let AdditionalService1=document.getElementById('flexRadioDefault9');
// let containerType7=document.getElementById('flexRadioDefault10');
// let containerType8=document.getElementById('flexRadioDefault11');
// let containerType9=document.getElementById('flexRadioDefault12');
// let AdditionalService2=document.getElementById('flexRadioDefault13');
// let containerType10=document.getElementById('flexRadioDefault14');
// let containerType11=document.getElementById('flexRadioDefault15');
// let containerType12=document.getElementById('flexRadioDefault16');
// let collectionPoint=document.getElementById('collectionPoint');
// let portOfSchedule=document.getElementById('portOfLoading');
// let portOfDischarge=document.getElementById('portOfDischarge');
// let deliveryPoint=document.getElementById('deliveryPoint');
// let companyType=document.getElementById('companyType2');
// let hazardousNo=document.getElementById('flexRadioDefault17');
// let hazardousYes=document.getElementById('flexRadioDefault18');
// let shipmentVolume=document.getElementById('shipmentVolume');
// let length=document.getElementById('length');
// let weight=document.getElementById('weight');
// let quantity=document.getElementById('quantity');
// let width=document.getElementById('width');
// let teu=document.getElementById('teu');
// let height=document.getElementById('height');
// let numberOfPieces=document.getElementById('nbOfPieces');
// let submit=document.getElementById('my_submit');


//Empty Array To Store The Info
// let arrayOfData=[];

//Add Data
// submit.addEventListener("click",addDataToArray);
// function addDataToArray(){
//     let data={
//      id: Date.now(),
//      description:shippingDescription.value,
//      importRadio:importRadio.value,
//      exportRadio:exportRadio.value,
//      containerType1:containerType1.value,
//      containerType2:containerType2.value,
//      containerType3:containerType3.value,
//      containerType4:containerType4.value,
//      containerType5:containerType5.value,
//      containerType6:containerType6.value,
//      containerType7:containerType7.value,
//      containerType8:containerType8.value,
//      containerType9:containerType9.value,
//      containerType10:containerType10.value,
//      containerType11:containerType11.value,
//      containerType12:containerType12.value,
//      AdditionalService1:AdditionalService1.value,
//      AdditionalService2:AdditionalService2.value,
//      collectionPoint:collectionPoint.value,
//      portOfSchedule:portOfSchedule.value,
//      portOfDischarge:portOfDischarge.value,
//      deliveryPoint:deliveryPoint.value,
//      companyType:companyType.value,
//      shipmentVolume:shipmentVolume.value,
//      length:length.value,
//      weight:weight.value,
//      quantity:quantity.value,
//      width:width.value,
//      teu:teu.value,
//      height:height.value,
//      numberOfPieces:numberOfPieces.value,
//     };

  //push Info To Array Of Info
  // arrayOfData.push(data);
  //  console.log(arrayOfInfo);
  //Add Info To Local Storage
  // addDataToLocalStorage(arrayOfData);
 
// }

//  function addDataToLocalStorage(e){
//   window.localStorage.setItem("data", JSON.stringify(e));
//  }

// break

document.getElementById('my_submit').addEventListener('click', function_save);
// document.getElementById('getAll').addEventListener('click', function_getAll);

const data_array = [];

function function_save() {
let collectionPoint=document.getElementById('collectionPoint');
let portOfSchedule=document.getElementById('portOfLoading');
let portOfDischarge=document.getElementById('portOfDischarge');
let deliveryPoint=document.getElementById('deliveryPoint');
let companyType=document.getElementById('companyType2');
let shipmentVolume=document.getElementById('shipmentVolume');
let length=document.getElementById('length');
let weight=document.getElementById('weight');
let quantity=document.getElementById('quantity');
let width=document.getElementById('width');
let teu=document.getElementById('teu');
let height=document.getElementById('height');
let numberOfPieces=document.getElementById('nbOfPieces');
    if (collectionPoint.value && portOfSchedule.value && portOfDischarge.value && deliveryPoint.value && companyType.value
      && shipmentVolume.value && length.value && weight.value && quantity.value && width.value && teu.value && height.value && numberOfPieces.value) {
        // an object
        const data = {
          id: Date.now(),
          collectionPoint:collectionPoint.value,
          portOfSchedule:portOfSchedule.value,
          portOfDischarge:portOfDischarge.value,
          deliveryPoint:deliveryPoint.value,
          companyType:companyType.value,
          shipmentVolume:shipmentVolume.value,
          length:length.value,
          weight:weight.value,
          quantity:quantity.value,
          width:width.value,
          teu:teu.value,
          height:height.value,
          numberOfPieces:numberOfPieces.value, 
           
        };
        console.log(data_array);
        let founded = false;
        const error = `<div style='background-color:red; color: white; margin:auto; width:50%; border-radius: 5px; margin-top:50px; box-shadow:3px 3px 7px gray; font-size:18px; padding:10px;'>Already exist !!!</div>`;
        for (let i = 0; i < localStorage.length; i++)
            (JSON.stringify(data) == JSON.stringify(data_array[i])) && (founded = true);

        console.log(`the value of founded is: ${founded}`);
        // cl("the value " + founded + "abc");
        // cl(`the value ${founded} abc`); 

        // function set_person_in_local_storage() {
        const set_data_in_local_storage = () => {
            data_array.push(data);

            // localStorage.setItem(data_array.length,JSON.stringify(data_array[data_array.length-1]))
            let len = data_array.length;
            // convert object to JSON string using JSON.stringify()
            const jsonObj = JSON.stringify(data_array[len - 1]);
            // save to localStorage
            localStorage.setItem(len, jsonObj);
            // get the string from localStorage
            const str = localStorage.getItem(len);
            // convert string to valid object
            const parsedObj = JSON.parse(str);
            console.log(parsedObj);
            document.getElementById('error').innerHTML = "";
        }
        founded ? (document.getElementById('error').innerHTML = error) : set_data_in_local_storage();
    } else {
        alert("please enter a valid data");
    }

}

// function function_getAll() {
//     let det = document.getElementById('details');
//     det.innerHTML = "";
//     for (let i = 0; i < localStorage.length; i++) {
//         const str = localStorage.getItem(i + 1);
        // convert string to valid object
//         const parsedObj = JSON.parse(str);
//         det.innerHTML += `<tr><td>${parsedObj.firstName}</td><td>${parsedObj['lastName']}</td><td><button onclick=localStorage.removeItem(${i+1})>delete</button></td></tr>`;
//     }

// }








 
