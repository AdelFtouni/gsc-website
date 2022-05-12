let cl = console.log;

document.getElementById('save').addEventListener('click', function_savePayment);

// document.getElementById('cancelHref').addEventListener('click', function_cancel);


const payment_array = [];

function function_savePayment(event) {
    event.preventDefault();
    let cardNumber = document.getElementById('cardNumber');
    let cardName = document.getElementById('cardName');
    let cvvNb = document.getElementById('cvvId');
    let paymentDate = document.getElementById('paymentDate');

    if ((cardNumber.value && cardName.value) && cvvNb.value) {
       
        const payment_fee = {   // an object
            cardNumber: cardNumber.value,
            cardName: cardName.value,
            cvvNb: cvvNb.value,
        };

        console.log(payment_array);
        let founded = false;
        const error = `<div style='background-color:red; color: white; margin:auto; width:50%; border-radius: 5px; margin-top:50px; box-shadow:3px 3px 7px gray; font-size:18px; padding:10px;'>Already exist !!!</div>`;

        for (let i = 0; i < localStorage.length; i++)
            (JSON.stringify(payment_fee) == JSON.stringify(payment_array[i])) && (founded = true);

        console.log(`the value of founded is: ${founded}`);
        // cl("the value " + founded + "abc");
        // cl(`the value ${founded} abc`); 

        function set_payment_fee_in_local_storage() {

            payment_array.push(payment_fee);
            let len = payment_array.length;

            // convert object to JSON string using JSON.stringify()
            const jsonObj = JSON.stringify(payment_array[len - 1]);

            // save to localStorage
            localStorage.setItem(len, jsonObj);

            // get the string from localStorage
            const str = localStorage.getItem(len);

            // convert string to valid object
            const parsedObj = JSON.parse(str);

            console.log(parsedObj);

            document.getElementById('error').innerHTML = "";
        }

        founded ? (document.getElementById('error').innerHTML = error + "<br>") : set_payment_fee_in_local_storage();
   
    } else {

        alert("please enter a valid data");

    }

}

// function function_cancel() {
//     let det = document.getElementById('details');
//     det.innerHTML = "";
//     for (let i = 0; i < localStorage.length; i++) {
//         const str = localStorage.getItem(i + 1);
//         // convert string to valid object
//         const parsedObj = JSON.parse(str);
//         det.innerHTML += `<tr><td>${parsedObj.cardNumber}</td><td>${parsedObj['cardName']}</td></tr>`;
//     }

// }
