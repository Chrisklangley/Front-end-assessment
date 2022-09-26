const colorBtn = document.querySelector('#color')
const PlaceBtn = document.querySelector('#place')
const ritualBtn = document.querySelector('#ritual')

const myFavColor = () => alert('Red!!!!!!')

const myFavPlace = () => alert('my favorite place is Seattle Washington')

const myFAvRitual = () => alert ('my favorite daily ritual is playing music')





colorBtn.addEventListener('click',  myFavColor)
PlaceBtn.addEventListener('click', myFavPlace)
ritualBtn.addEventListener('click', myFAvRitual)