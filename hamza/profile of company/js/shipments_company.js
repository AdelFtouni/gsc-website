
// Grap elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went, make sure that $(selector) exists or is typed correctly.`);
};


// POP-UP RISK DETAILS

const riskOpenBtn = selectElement('#risk-bubble-btn');
const riskCloseBtn = selectElement('#close-btn-risk');
const riskContainer = selectElement('#risk-management-container');

riskOpenBtn.addEventListener('click', () => riskContainer.classList.add('activated'));
riskCloseBtn.addEventListener('click', () => riskContainer.classList.remove('activated'));
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') riskContainer.classList.remove('activated');
} );


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
        "quote": "All that glitters is not gold.",
        "author": "William Shakespeare"
        },

        {
            "quote": "Ask not what your country can do for you; ask what you can do for your country.",
            "author": "John Kennedy	"
            },

            {
                "quote": "For those to whom much is given, much is required.",
                "author": "the Bible"
                },
];

const randomBtn = selectElement('.random-quote-btn');
const quoteText = selectElement('.quote-text');
const authorText = selectElement('.author');

randomBtn.addEventListener('click', randomFun);

function randomFun(){
    let randomIndex = parseInt(Math.random()*3) ;
    quoteText.innerHTML = groupOfQuotes[randomIndex]["quote"];
    authorText.innerHTML = groupOfQuotes[randomIndex]["author"];
}