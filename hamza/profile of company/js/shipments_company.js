
// Grap elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went, make sure that $(selector) exists or is typed correctly.`);
};


// POP-UP RISK DETAILS

// const riskOpenBtn = selectElement('#risk-bubble-btn');
// const riskCloseBtn = selectElement('#close-btn-risk');
// const riskContainer = selectElement('#risk-management-container');

// riskOpenBtn.addEventListener('click', () => riskContainer.classList.add('activated'));
// riskCloseBtn.addEventListener('click', () => riskContainer.classList.remove('activated'));
// window.addEventListener('keyup', (event) => {
//     if(event.key === 'Escape') riskContainer.classList.remove('activated');
// } );


//  TOGGLE SIDE NAV

const shipmentBtn = selectElement("#shipment-btn");
const messageBtn = selectElement("#message-btn");
const editBtn = selectElement("#edit-btn");
const shipmentPart = selectElement(".shipment-part");
const messagePart = selectElement(".message-part");
const editPart = selectElement(".edit-part");

messageBtn.addEventListener("click", () => {
    shipmentBtn.classList.remove("active-btn-aside");
    editBtn.classList.remove("active-btn-aside");
    messageBtn.classList.add("active-btn-aside");
    messageBtn.style.transition = "all .5s ease-in-out ";
    shipmentPart.style.display = "none";
    messagePart.style.display = "block";
    editPart.style.display= "none";
});

shipmentBtn.addEventListener("click", () => {
    shipmentBtn.classList.add("active-btn-aside");
    messageBtn.classList.remove("active-btn-aside");
    editBtn.classList.remove("active-btn-aside");
    shipmentBtn.style.transition = "all .5s ease-in-out ";
    shipmentPart.style.display = "block";
    messagePart.style.display = "none";
    editPart.style.display= "none";
});

editBtn.addEventListener("click", () => {
    shipmentBtn.classList.remove("active-btn-aside");
    messageBtn.classList.remove("active-btn-aside");
    editBtn.classList.add("active-btn-aside");
    editBtn.style.transition = "all .5s ease-in-out ";
    shipmentPart.style.display = "none";
    messagePart.style.display = "none";
    editPart.style.display= "block";
});




// MESSAGE PART

const sendMessageBtn = selectElement(".send-message-btn");
const messageInput = selectElement(".message-input-field");
const messagesContainer = selectElement(".messages-container");

sendMessageBtn.addEventListener('click', sendMessage);

function sendMessage(event){
        event.preventDefault();
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    const newMessage = document.createElement('span');
    const dateOfMessage = document.createElement('span');
    dateOfMessage.className = 'date_of_message';
    let dateNow = new Date();
    dateOfMessage.innerText = dateNow.getHours() + ":" + dateNow.getMinutes();
    newMessage.innerText= messageInput.value;
    newMessage.classList.add('message-item');
    messageDiv.appendChild(newMessage);
    messageDiv.appendChild(dateOfMessage);
    messagesContainer.appendChild(messageDiv);
    messageInput.value = '';
    setTimeout(respondMessageFun,1500);
}


const doneBriefBtn = selectElement(".brief-text-done");
const helloBriefBtn = selectElement(".brief-text-hello");
const regardsBriefBtn = selectElement(".brief-text-regards");
const riskBriefBtn = selectElement(".brief-text-risk");

doneBriefBtn.addEventListener("click", function(event){
    messageInput.value = "Done!";
    sendMessage(event);
})

regardsBriefBtn.addEventListener("click", function(event){
    event.preventDefault();
    messageInput.value = "Regards.";
})

helloBriefBtn.addEventListener("click", function(event){
    event.preventDefault();
    messageInput.value = "Hello, How are you?";
})

riskBriefBtn.addEventListener("click", function(event){
    event.preventDefault();
    messageInput.value = "what type of risk my shipment has?";
    sendMessage(event);
})


// edit profile part

let groupOfQuotes = [
    {
    "quote": "Get to know the right, then you would know the people of right. Right Is not measured by its men, but men are measured by their right.",
    "author": "Imam Ali"
    },

    {
        "quote": "You have got to start with the customer experience and work back toward the technology , not the other way around.",
        "author": "Steve Jobs"
        },

        {
            "quote": "Ask not what your country can do for you; ask what you can do for your country.",
            "author": "John Kennedy	"
            },

            {
                "quote": "Any product that needs a manual to work is broken.",
                "author": "Alan Musk"
                },

                {
                    "quote": "Quality in a product or service is not what the supplier puts in. it is what the customer gets out and is willing to pay for. A product is not quality because it is hard to make and costs a lot of money, as manufacturers typically believe.",
                    "author": "Peter Drucker"
                    },

                    {
                        "quote": "A product is something made in a factory; a brand is something that is bought by the customer. A product can be copied by a competitor; a brand is unique. A product can be quickly outdated; a successful brand is timeless.",
                        "author": "Stephen King"
                        },

                        {
                            "quote": "When the product is right, you dont have to be a great Marketer.",
                            "author": "Lee Iacocca"
                            },
    
];

const randomBtn = selectElement('.random-quote-btn');
const quoteText = selectElement('.quote-text');
const authorText = selectElement('.author');

randomBtn.addEventListener('click', randomFun);
let lengthOfArrayQuote = groupOfQuotes.length;
function randomFun(){
    let randomIndex = parseInt(Math.random() * lengthOfArrayQuote) ;
    quoteText.innerHTML = groupOfQuotes[randomIndex]["quote"];
    authorText.innerHTML = groupOfQuotes[randomIndex]["author"];
}


// shipment tracking part 

let dataOfShipments = [
    {
        code: "ABC123",
        origin: "Chicago",
        destination: "Hong Kong",
        location: "koria",
        starting: new Date("4-4-2021").toDateString(),
        arrival: new Date("6-5-2021").toDateString(),
        status: true
    },

    {
        code: "AGE534",
        origin: "Lebanon",
        destination: "France",
        location: "Bulgaria",
        starting: new Date("2021-5-7").toDateString(),
        arrival: new Date("2021-7-5").toDateString(),
        status: false
    },

    {
        code: "JSG573",
        origin: "Italy",
        destination: "China",
        location: "Maldiv",
        starting: new Date("2020-2-5").toDateString(),
        arrival: new Date("2020-2-25").toDateString(),
        status: true
    },

    {
        code: "KSN340",
        origin: "Barsil",
        destination: "Lebanon",
        location: "Syria",
        starting: new Date("2010-10-2").toDateString(),
        arrival: new Date("2010-11-20").toDateString(),
        status: true
    },

    {
        code: "JTO904",
        origin: "Unites State",
        destination: "Germany",
        location: "France",
        starting: new Date("2021-7-3").toDateString(),
        arrival: new Date("2021-8-20").toDateString(),
        status: true
    },

    {
        code: "USV378",
        origin: "Vitnam",
        destination: "Philipin",
        location: "korea",
        starting: new Date("2021-1-4").toDateString(),
        arrival: new Date("2021-4-13").toDateString(),
        status: true
    },

    {
        code: "NDU640",
        origin: "Barasil",
        destination: "Maxico",
        location: "san",
        starting: new Date("2021-2-3").toDateString(),
        arrival: new Date("2021-3-9").toDateString(),
        status: true
    },

    {
        code: "HDV745",
        origin: "Dubai",
        destination: "Lebanon",
        location: "Egypt",
        starting: new Date("2021-7-3").toDateString(),
        arrival: new Date("2021-9-20").toDateString(),
        status: true
    },

    {
        code: "KAE583",
        origin: "Egypt",
        destination: "Lebanon",
        location: "Syria",
        starting: new Date("2021-6-4").toDateString(),
        arrival: new Date("2021-9-12").toDateString(),
        status: true
    },

    {
        code: "CAE104",
        origin: "Jordan",
        destination: "Imarat",
        location: "United Arabia",
        starting: new Date("2021-5-2").toDateString(),
        arrival: new Date("2021-7-20").toDateString(),
        status: true
    },

    {
        code: "JRT810",
        origin: "Bulgaria",
        destination: "France",
        location: "Germany",
        starting: new Date("2021-7-4").toDateString(),
        arrival: new Date("2021-8-2").toDateString(),
        status: true
    },

    {
        code: "BAD739",
        origin: "Canada",
        destination: "France",
        location: "Bulgaria",
        starting: new Date("2021-2-5").toDateString(),
        arrival: new Date("2021-5-9").toDateString(),
        status: true
    },

    {
        code: "NXE494",
        origin: "Negiria",
        destination: "Syria",
        location: "Lebanon",
        starting: new Date("2021-7-3").toDateString(),
        arrival: new Date("2021-8-20").toDateString(),
        status: true
    },

    {
        code: "CYD849",
        origin: "Iran",
        destination: "Lebanon",
        location: "Egypt",
        starting: new Date("2021-3-1").toDateString(),
        arrival: new Date("2021-5-9").toDateString(),
        status: true
    }
];


const tBody = selectElement("#tBody");

// let statusOfshipments = true;

function pushTableOfShipmentsFun(){
    let table = '';
    for(let i=0; i < dataOfShipments.length; i++){

        if(dataOfShipments[i].status == true){
            dataOfShipments[i].status = `<div id="online-bubble">
            <div class="bubble" id="bubble-btn">
              <span class="bubble-outer-dot">
              <span class="bubble-inner-dot"></span>
              </span>
            </div>
          </div>`;
        }else{
            dataOfShipments[i].status = `<div id="online-bubble">
            <div class="risk-bubble" id="risk-bubble-btn">
              <span class="risk-bubble-outer-dot">
              <span class="risk-bubble-inner-dot"></span>
              </span>
            </div>
          </div>`;
        }

        table += `<tr>
                                
        <td>${dataOfShipments[i].code}</td>
        <td>${dataOfShipments[i].origin}</td>
        <td>${dataOfShipments[i].destination}</td>
        <td>${dataOfShipments[i].location}</td>
        <td>${dataOfShipments[i].starting}</td>
        <td>${dataOfShipments[i].arrival}</td>
        <td>
            ${dataOfShipments[i].status}
        </td>

      </tr>`;
    }
     tBody.innerHTML = table;
}

pushTableOfShipmentsFun();



const searchInput = selectElement("#search-input");

let statusOfSearch = "Origin";
function whatTypeOfSearch(id){
    if(id == "origin-search-btn"){
        statusOfSearch = "Origin";
        searchInput.placeholder = "Search by Origin";
    }else{
        statusOfSearch = "Destination";
        searchInput.placeholder = "Search by Destination";
    }
    searchInput.focus();
}

function searchInTable(value){
    let table = '';
    if(statusOfSearch == "Origin"){
        for(let i=0; i < dataOfShipments.length; i++){
            if(dataOfShipments[i].origin.toLowerCase().includes(value.toLowerCase())){
                table += `<tr>
                                
                <td>${dataOfShipments[i].code}</td>
                <td>${dataOfShipments[i].origin}</td>
                <td>${dataOfShipments[i].destination}</td>
                <td>${dataOfShipments[i].location}</td>
                <td>${dataOfShipments[i].starting}</td>
                <td>${dataOfShipments[i].arrival}</td>
                <td>
                ${dataOfShipments[i].status}
                </td>
        
              </tr>`;
            }
        }
    }else {
        for(let i=0; i < dataOfShipments.length; i++){
            if(dataOfShipments[i].destination.toLowerCase().includes(value.toLowerCase())){
               table += `<tr>
                                
                <td>${dataOfShipments[i].code}</td>
                <td>${dataOfShipments[i].origin}</td>
                <td>${dataOfShipments[i].destination}</td>
                <td>${dataOfShipments[i].location}</td>
                <td>${dataOfShipments[i].starting}</td>
                <td>${dataOfShipments[i].arrival}</td>
               <td>${dataOfShipments[i].status}</td>
               </tr>`;
            }
        }
    }

    tBody.innerHTML = table;
     //  POP-UP RISK DETAILS
}


const filterBtn = selectElement('.filter-btn');
const hiddenFilterForm = selectElement('.hiddenFilterForm');

filterBtn.addEventListener('click', () => {
    hiddenFilterForm.classList.add('activeFilter');
});


const searchByCode = selectElement("#searchByCode");

function searchCode(value){
    let table = '';
        for(let i=0; i < dataOfShipments.length; i++){
            if(dataOfShipments[i].code.includes(value)){
                table += `<tr>
                                
                <td>${dataOfShipments[i].code}</td>
                <td>${dataOfShipments[i].origin}</td>
                <td>${dataOfShipments[i].destination}</td>
                <td>${dataOfShipments[i].location}</td>
                <td>${dataOfShipments[i].starting}</td>
                <td>${dataOfShipments[i].arrival}</td>
                <td>
                ${dataOfShipments[i].status}
                </td>
        
              </tr>`;
            }
        }
        tBody.innerHTML = table;
        
}

riskProcessClick();

function riskProcessClick(){
const riskOpenBtn = selectElement('#risk-bubble-btn');
const riskCloseBtn = selectElement('#close-btn-risk');
const riskContainer = selectElement('#risk-management-container');

riskOpenBtn.addEventListener('click', () => riskContainer.classList.add('activated'));
riskCloseBtn.addEventListener('click', () => riskContainer.classList.remove('activated'));
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') riskContainer.classList.remove('activated');
} );
}


// message part

const respondMessageFun = function respondMessage(){
    const respondMessageDiv = document.createElement("div");
    respondMessageDiv.classList.add("respond_message");
    const respondNewMessage = document.createElement('span');
    const respondDateOfMessage = document.createElement('span');
    respondDateOfMessage.className = 'date_of_message';
    let respondDateNow = new Date();
    respondDateOfMessage.innerText = respondDateNow.getHours() + ":" + respondDateNow.getMinutes();
    respondNewMessage.innerText= "Hello Mr.Foulen, thanks for your message. We will contact you as soon as possible.";
    respondNewMessage.classList.add('message-item');
    respondMessageDiv.appendChild(respondNewMessage);
    respondMessageDiv.appendChild(respondDateOfMessage);
    messagesContainer.appendChild(respondMessageDiv);
}

function notificationMessage(){
    var toastLiveExample = document.getElementById('liveToast');
   if(respondMessageFun){
    var toast = new bootstrap.Toast(toastLiveExample);
    toast.show();
   }
}

window.addEventListener('load', notificationMessage);


const form = document.querySelector('#form_upload');
const uploadBtn = form.querySelector('#upload-file-btn');
const sendFile = document.getElementById('#send-file');
uploadBtn.onchange = ({target}) => {
    let file = target.files[0];
    if(file){
        let fileName = file.name;
        uploadFile(fileName);
    }
}

let spinner= ``;
function uploadFile(name){
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/upload.php');
    xhr.upload.addEventListener('progress', ({loaded, total}) => {
        let fileLoaded = Math.floor((loaded / total) * 100);
        let fileTotal = Math.floor(total / 1000);
        console.log(fileLoaded, fileTotal);
        spinner = `<div class="upload-message">
        <span class="icon-file-upload"><i class="ri-folder-shared-fill"></i></span>
        <span class="name-file-upload">${name}</span>
        <p>${fileTotal}KB</p>
        <div class="progress-bar">
        <div class="progress" style="width: ${fileLoaded}%"></div>
        </div>
        </div>`;
    });

    let formData = new FormData(form);
    xhr.send(formData);
    
        uploadBtn.addEventListener('click', () => {
            const messageDiv = document.createElement("div");
            messageDiv.classList.add("message");
            const newMessage = document.createElement('span');
            const dateOfMessage = document.createElement('span');
            dateOfMessage.className = 'date_of_message';
            let dateNow = new Date();
            dateOfMessage.innerText = dateNow.getHours() + ":" + dateNow.getMinutes();
            newMessage.innerHTML = spinner;
            newMessage.classList.add('message-item');
            messageDiv.appendChild(newMessage);
            messageDiv.appendChild(dateOfMessage);
            messagesContainer.appendChild(messageDiv);
            spinner =``;
        } );
    
}

