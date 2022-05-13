// window.addEventListener("onload", validationFunction);

// buttons
const searchptp = document.getElementById("searchptp");
const searchport = document.getElementById("searchportS");
const searchshippingL = document.getElementById("searchshippingL");
const calculatedays = document.getElementById("calculatedays");

//first result div def (point to point)
const tableptp = document.getElementById("tb1");

//second result div def (port calls)
const tableportcalls = document.getElementById("tb2");

//third result div def (shipping lines)
const shippingLinesDetails = document.getElementById("shippinglinesdetails");

//third result elements def (shipping lines)
const tableshippingL1= document.getElementById("tb3");
const tableshippingL2 = document.getElementById("tb4");
const tableshippingL3 = document.getElementById("tb5");
const mapDiv = document.getElementById("map-img-cont");
const calculatorDiv = document.getElementById("calc-cont");


//nb of days label resualt
const nbdayslabel = document.getElementById("nbdayslabel");

// ptp view result 

function openPtpResult(event) {

    event.preventDefault();
    tableptp.style.display = "block";

    tableportcalls.style.display = "none";
    shippingLinesDetails.style.display = "none";

}



//port calls view result

function openportcallsResult(event) {
    
    event.preventDefault();

    tableportcalls.style.display = "block";

    tableptp.style.display = "none";
    shippingLinesDetails.style.display = "none";

    tableportcalls.style.setProperty('margin-top', '-70px', 'important');


}



//shippinglines view result

function openShippingLResult(event) {

    event.preventDefault();
    shippingLinesDetails.style.display = "block";

    tableshippingL1.style.display = "block";
    tableshippingL2.style.display = "block";
    tableshippingL3.style.display = "block";

    mapDiv.style.setProperty('display', 'block', 'important');

    calculatorDiv.style.setProperty('display', 'block', 'important');

    tableptp.style.display = "none";
    tableportcalls.style.display = "none";

    shippingLinesDetails.style.setProperty('margin-top', '-100px', 'important');


}



//on click btn nav tab the right div and inputs should be reseted 

//TAB BTNS
const tabPTP = document.getElementById("tabPTP");
const tabPC = document.getElementById("tabPC");
const tabSL = document.getElementById("tabSL");

tabPTP.addEventListener("click", ptpReset);

function ptpReset(event) {
    
    event.preventDefault();

    tableportcalls.style.display = "none";
    tableptp.style.display = "none";
    shippingLinesDetails.style.display = "none";

    formptp.reset();
    portcallsform.reset();
    shippinglinesform.reset();

}

tabPC.addEventListener("click", pcReset);

function pcReset(event) {
    
    event.preventDefault();

    tableportcalls.style.display = "none";
    tableptp.style.display = "none";
    shippingLinesDetails.style.display = "none";

    formptp.reset();
    portcallsform.reset();
    shippinglinesform.reset();

}

tabSL.addEventListener("click", slReset);

function slReset(event) {
    
    event.preventDefault();

    tableportcalls.style.display = "none";
    tableptp.style.display = "none";
    shippingLinesDetails.style.display = "none";

    formptp.reset();
    portcallsform.reset();
    shippinglinesform.reset();

}



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
         
            searchptp.addEventListener("click", openPtpResult);
            searchport.addEventListener("click", openportcallsResult);
            searchshippingL.addEventListener("click", openShippingLResult);


          }

          form.classList.add('was-validated')
        }, false)
      })
  })()





//validation and pattern and autocomplete for inputs here and in payment

//review table design and table caption style

//inside shipping lines show calcalation result label use switch
// calculatedays.addEventListener("click", openlabeldays);


//scrolldaown animation
AOS.init();

AOS.init({
    startEvent: 'click'
  });


//Grap elements nav and footer -  by Hamza
const selectElement = selector => {
    const element = document.querySelector(selector);
    if (element) return element;
    throw new Error(`Something went, make sure that $(selector) exists or is typed correctly.`);
};


// Open menu & search pop-up nav and footer -  by Hamza
const menuToggleIcon = selectElement('#menu-toggle-icon');

const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
}

menuToggleIcon.addEventListener('click', toggleMenu);