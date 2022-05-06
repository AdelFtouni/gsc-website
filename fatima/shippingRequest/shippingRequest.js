   
   
   
   
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
function Cancel(cancel){
 
  if(cancel=='cancel'){
      document.getElementById('exampleFormControlTextarea1').value='';
      document.getElementById('flexRadioDefault1').value='';
      document.getElementById('flexRadioDefault2').value='';
      document.getElementById('flexRadioDefault3').value='';
      document.getElementById('flexRadioDefault4').value='';
      document.getElementById('flexRadioDefault5').value='';
      document.getElementById('flexRadioDefault6').value='';
      document.getElementById('flexRadioDefault7').value='';
      document.getElementById('flexRadioDefault8').value='';
      document.getElementById('flexRadioDefault9').value='';
      document.getElementById('flexRadioDefault10').value='';
      document.getElementById('flexRadioDefault11').value='';
      document.getElementById('flexRadioDefault12').value='';
      document.getElementById('flexRadioDefault13').value='';
      document.getElementById('flexRadioDefault14').value='';
      document.getElementById('flexRadioDefault15').value='';
      document.getElementById('flexRadioDefault16').value='';
      document.getElementById('collectionPoint').value='';
      document.getElementById('portOfLoading').value='';
      document.getElementById('portOfDischarge').value='';
      document.getElementById('deliveryPoint').value='';
      document.getElementById('companyType2').value='';
      document.getElementById('flexRadioDefault3').value='';
      document.getElementById('flexRadioDefault4').value='';
      document.getElementById('shipmentVolume').value='';
      document.getElementById('length').value='';
      document.getElementById('weight').value='';
      document.getElementById('quantity').value='';
      document.getElementById('width').value='';
      document.getElementById('teu').value='';
      document.getElementById('height').value='';
      document.getElementById('nbOfPieces').value='';
      document.getElementById('quantity').value='';
      document.getElementById('quantity').value='';
  }

}