
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
const messageList = selectElement(".message-list");

sendMessageBtn.addEventListener('click', sendMessage);

function sendMessage(event){
    event.preventDefault();
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message");
    const newMessage = document.createElement('li');
    newMessage.innerText= messageInput.value;
    newMessage.classList.add('message-item');
    messageDiv.appendChild(newMessage);
    messageList.appendChild(messageDiv);
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
        status: false
    },

    {
        code: "JTO904",
        origin: "Unites State",
        destination: "Germany",
        location: "France",
        starting: new Date("2021-7-3").toDateString(),
        arrival: new Date("2021-8-20").toDateString(),
        status: true
    }
];

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

const tBody = selectElement("#tBody");

// window.addEventListener('load', pushTableOfShipmentsFun);

let statusOfshipments = true;

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
    //  POP-UP RISK DETAILS
    riskProcessClick();

}
pushTableOfShipmentsFun();

const searchInput = selectElement("#search-input");

let statusOfSearch = "Origin";
function whatTypeOfSearch(id){
    if(id == "origin-search-btn"){
        statusOfSearch = "origin";
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
     riskProcessClick();
}


// const oldBtn = selectElement(".old-btn");
// const recentBtn = selectElement(".recent-btn");
// // let reverseData = dataOfShipments.reverse();
// oldBtn.addEventListener('click', () => {
//     dataOfShipments.sort((a, b) => a.starting - b.starting);
//     pushTableOfShipmentsFun();
// });

// recentBtn.addEventListener('click', () => {
//     reverseData.reverse();
//     pushTableOfShipmentsFun();
// })

const filterBtn = selectElement('.filter-btn');
const hiddenFilterForm = selectElement('.hiddenFilterForm');

filterBtn.addEventListener('click', () => {
    hiddenFilterForm.classList.add('activeFilter');
})


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
        riskProcessClick();
}