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
   
let userLogin=document.getElementById('user_login');
let userRegister=document.getElementById('user_register');
let userEmail=document.getElementById('user-email');
let userPassword=document.getElementById('user_password');
userRegister.addEventListener("click", Register);
function Register(){
  if(userEmail.value!="" && userPassword.value!=""){
    document.location.href = './gsc-website/fatima/Registration Request/Registration.html';

  }

}
  