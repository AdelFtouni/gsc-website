

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

const trackingCodeSubmit = selectElement("#tracking-code-submit");


let codesTracking = ['ABC123' , 'ABD135'];

trackingCodeSubmit.addEventListener('click' ,() => {
    const trackingCodeInput = selectElement('#tracking-code-input');

    for(i=0; i<=codesTracking.length; i++){

        if(codesTracking.indexOf(trackingCodeInput.value) !== -1){
            trackingCodeInput.style.border = "1px solid green";
            document.location.href = '/hamza/Shipment tracking user/html/shipment_tracking_user.html';
         } else{
             trackingCodeInput.style.border = "1px solid red";
         }
    }


});

const trackingCodeTabTracking = selectElement("#tracking-code-tab-tracking");
const trackingCodeTabSchedule = selectElement("#tracking-code-tab-schedule");
const hScheduleStyle = selectElement("#h1-schedule-style");
    const hTrackingStyle = selectElement("#h1-tracking-style");

trackingCodeTabSchedule.addEventListener('click', () => {
    const schedule = selectElement("#schedule");
    const tracking = selectElement("#tracking");
    tracking.style.display = "none";
    schedule.style.display = "flex";
    hScheduleStyle.classList.add("active-tab");
    hTrackingStyle.classList.remove("active-tab");
    hScheduleStyle.style.transition = "all .30s ease-in-out";
    schedule.style.transition = "all .30s ease-in-out";
});

trackingCodeTabTracking.addEventListener('click', () => {
    const schedule = selectElement("#schedule");
    const tracking = selectElement("#tracking");
    tracking.style.display = "flex";
    schedule.style.display = "none";
    hScheduleStyle.classList.remove("active-tab");
    hTrackingStyle.classList.add("active-tab");
    hTrackingStyle.style.transition = "all .30s ease-in-out";
    tracking.style.transition = "all .30s ease-in-out";
});

const inputOriginSchedule = selectElement('#input-origin-schedule');
const inputDestinationSchedule = selectElement('#input-destination-schedule');
const searchScheduleBtn = selectElement('#search-schedule-btn');

searchScheduleBtn.addEventListener('click', scheduleFun);

function scheduleFun(){
    if(inputDestinationSchedule.value == '' || inputOriginSchedule.value == ''){
        inputDestinationSchedule.style.border = "1px solid red";
        inputOriginSchedule.style.border = "1px solid red";
    }else{
        inputDestinationSchedule.style.border = "1px solid green";
        inputOriginSchedule.style.border = "1px solid green";
        document.location.href = '/Kawthar/schedule.html';
    }
}


