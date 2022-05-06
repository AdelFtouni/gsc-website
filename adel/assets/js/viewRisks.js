

function createTable(){
    let table = document.createElement('table');
    document.getElementById('body').appendChild(table);

let thead = document.createElement('thead');
table.appendChild(thead);


    let row_0 = table.insertRow(0);

    let cell_0 = row_0.insertCell(0);
    let cell_1 = row_0.insertCell(1);

    cell_0.innerHTML = "Subjects";
    cell_1.innerHTML = "Grades";
    let number = document.getElementById('nb').value;
    console.log(number);
   
    for(i=0 ; i < number ; i++){
    
        let row_1 = table.insertRow(1);
        
        let cell_01 = row_1.insertCell(0);
        var input1 = document.createElement("input");
        input1.type = "text";
        input1.placeholder="Enter the subject";
        input1.className = "";
        cell_01.appendChild(input1);

        let cell_02 = row_1.insertCell(1);
        var input2 = document.createElement("input");
        input2.type = "text";
        input2.placeholder="Enter the grade";
        input2.className = "numericInput";
        cell_02.appendChild(input2);
        
     }

}
let res="";
let name = document.getElementById('name');
let sum = 0;
let text ="hello";
let average =0;
let  inputs = document.getElementsByClassName("numericInput");
function getSum(){
   
    let number = document.getElementById('nb').value;
    for(i=0 ; i < number ; i++){
     
       sum = sum + parseInt( inputs[i].value);
 // sum += inputs[i].value;

}
document.getElementById('total').innerHTML = sum;
document.getElementById('fname').innerHTML = document.getElementById('name').value;


check();
average = sum/number;
document.getElementById('avg').innerHTML = average;
document.getElementById('result').innerHTML = res;
console.log(average);



//     if(0<= average < 50) { 
//         text = "Unfortunately you failed!";
//     console.log("Unfortunately you failed!");
// }
     
//     else if(50 <= average <= 60){
//         text = "Congratulations, you passed but you have to work better";
//         console.log("congratulations, you passed but you have to work better");
//     }
//    else if(60 < average <= 80){
//     text = "Congratulations, you succeeded";
//     console.log("congratulations, you succeded");
//    }
//    else {
//     text = "Congratulations, you've achieved an excellent score!";
//         console.log("Congratulations, you've achieved an excellent score!");
//    }

//  score = 70;

// switch(average){
//     case average < 50:
//         text="Unfortunately you failed!";
//         console.log("Unfortunately you failed!");
//         break;
//      case 50 <= average < 60:
//             text="Congratulations, you passed but you have to work better";
//             console.log("Congratulations, you passed but you have to work better");
//             break;    
//      case 60 <= average < 80:
//             text="congratulations, you succeded";
//             console.log("congratulations, you succeded");
//             break;
            
//     case 80 <= average <= 100:
//             text="Congratulations, you've achieved an excellent score!";
//             console.log("Congratulations, you've achieved an excellent score!");
//             break;
// }



}


function check(){
    if(80 < average ){
        text = "Congratulations, you've achieved an excellent score!";
             console.log("Congratulations, you've achieved an excellent score!");
             res="Congratulations, you've achieved an excellent score!";
        }
        else if ( 60 < average ){
            text = "Congratulations, you succeeded";
            console.log("congratulations, you succeded");
            res="Congratulations, you've achieved an excellent score!";
            }
          else if(50 < average ){
                text = "Congratulations, you passed but you have to work better";
              console.log("congratulations, you passed but you have to work better");
              res="Congratulations, you've achieved an excellent score!";
          }
    else if(average > 50){
        text = "Unfortunately you failed!";
console.log("Unfortunately you failed!");
res="Congratulations, you've achieved an excellent score!";
}
else{
    console.log("wrong input");
}
}
// else{
//     text = "Congratulations, you passed but you have to work better";
//     console.log("congratulations, you passed but you have to work better");
// }




// document.getElementById('la').innerHTML = JSON.parse(localStorage.getItem('risk'));

document.getElementById('la').innerHTML = localStorage.getItem('risk');
document.getElementById('msg').innerHTML = localStorage.getItem('msg');
console.log(JSON.parse(localStorage.getItem('risk')));