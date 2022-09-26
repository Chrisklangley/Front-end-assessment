







// this was solely just for fun I hope you don't mind

const strongTag = document.querySelector('strong')
const imgTAg = document.querySelector('img')


imgTAg.setAttribute('src','https://live.staticflickr.com/789/26156490327_06d588bce3_b.jpg')

imgTAg.style.borderRadius = "50%"
strongTag.style.color = "red"

 const photoAlert = ()=> {

    alert("We're amazing and we deserve Better")
 }

 imgTAg.addEventListener('mouseover', photoAlert)