const form = document.querySelector('#form')       
const regex = new RegExp('.*@.*[.].*')  
const inputs = document.querySelectorAll('input')
const labels = document.querySelectorAll('label')
const password = document.querySelector('#password')
form.addEventListener('submit', event => {
  event.preventDefault();
  const mail = document.querySelector('#email')
  inputs.forEach(input => {
    const label = input.nextElementSibling
    if (input.value === ''){        
      label.classList.add('empty-visible')
      // input.nextElementSibling.add('visible')         
      input.classList.add('error')
    }
    else {
      if (input.id ==='email' && !regex.test(mail.value)){
        label.innerHTML = 'Looks like this is not an email <img src="images/icon-error.svg" alt="">'
        input.classList.add('error', 'bolded')
        label.classList.add('empty-visible')
      }
      else {
        input.classList.remove('error')
        label.classList.remove('empty-visible')
      }
    }
  })          

})    
password.addEventListener('keyup', event => {
 console.log(event.key)    
 const val = password.value
 const temp = []     
 for(var i in val){
   temp.push('*')
 }
 password.value = temp.join('')


})
