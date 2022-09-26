const subBtn = document.querySelector('#subbutton') 


  const infoAlert = (evt) =>{

	evt.preventDefault();

	alert("Submition was a success! we appreciate you joining the fight!")
	
}
subBtn.addEventListener('click', infoAlert)

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

