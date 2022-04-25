
// Grap elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`Something went, make sure that $(selector) exists or is typed correctly.`);
};

const riskOpenBtn = selectElement('#risk-bubble-btn');
const riskCloseBtn = selectElement('#close-btn-risk');
const riskContainer = selectElement('#risk-management-container');

riskOpenBtn.addEventListener('click', () => riskContainer.classList.add('activated'));
riskCloseBtn.addEventListener('click', () => riskContainer.classList.remove('activated'));
window.addEventListener('keyup', (event) => {
    if(event.key === 'Escape') riskContainer.classList.remove('activated');
} );

const shipmentBtn = selectElement("#shipment-btn");
const messageBtn = selectElement("#message-btn");
const shipmentPart = selectElement(".shipment-part");
const messagePart = selectElement(".message-part");

messageBtn.addEventListener("click", () => {
    shipmentBtn.classList.remove("active-btn-aside");
    messageBtn.classList.add("active-btn-aside");
    messageBtn.style.transition = "all .5s ease-in-out ";
    shipmentPart.style.display = "none";
    messagePart.style.display = "block";
});

shipmentBtn.addEventListener("click", () => {
    shipmentBtn.classList.add("active-btn-aside");
    messageBtn.classList.remove("active-btn-aside");
    shipmentBtn.style.transition = "all .5s ease-in-out ";
    shipmentPart.style.display = "block";
    messagePart.style.display = "none";
});



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
