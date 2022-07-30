
//Get the button
var mybutton = document.getElementById("myBtn");
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};
function scrollFunction() {
  if (
    document.body.scrollTop > 15 ||
    document.documentElement.scrollTop > 15
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbzGfkG95hnfDCZFz0Oe4nLjIB4r8N58qaJHrEMfrniRXwzDPYGnqmu-NXo8XNdFLO_9dw/exec'
const form = document.forms['page']
  form.addEventListener('submit',e => {
  e.preventDefault()
fetch (scriptURL,{ method: 'POST' , body : new FormData(form)})
  .then(response => alert('SUBMITTED'))
  .catch(error => console.error('Error',error.message))
})

