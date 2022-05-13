function send(){
    let message = document.getElementById('msg').value;
    // console.log(message);
    localStorage.setItem('msg',JSON.stringify(message));
    let para = document.createElement("p");
    para.innerText = message;
    document.getElementById('msg').value = ''
     para.setAttribute('class','mypara');
    
    // Append to body:
    document.getElementById('form123').appendChild(para);
    



// console.log(para.innerHTML);

   

//document.getElementById('msg').innerHTML = message ;
}

