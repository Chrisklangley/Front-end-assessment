const subBtn = document.querySelector('#subbutton') 


  const infoAlert = (evt) =>{

	evt.preventDefault();

	alert("wow you did that so fast! i bet you type over 70 words a minute")
	
}
subBtn.addEventListener('click', infoAlert)

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

