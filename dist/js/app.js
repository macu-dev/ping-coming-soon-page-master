function main (){
  const form = document.querySelector('#form');
  form.addEventListener('submit', valideEmail);
  
}

function valideEmail(e){
  const messageError = document.querySelector('#error-message');
  const regExpr = new RegExp(/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  e.preventDefault();
  let email = document.querySelector('#email').value;
  let inputEmail = document.querySelector('#email');
  
  if(regExpr.test(email)){
    console.log('todo bien');
  }else{
    messageError.innerHTML = 'Please provide a valid email address';
    messageError.classList.add('message-error');
    inputEmail.classList.add('error');
    if(window.innerWidth <= 992){
      messageError.style.display = 'block';
      messageError.style.width = '100%';
      messageError.style.textAlign = 'center';
      messageError.style.marginTop = '6px';
      messageError.style.paddingLeft = '0';
    }

    inputEmail.addEventListener('keyup', (e) =>{
      inputEmail.classList.remove('error');
      messageError.innerHTML = '';
    })
  }  
}




window.onload = main;
