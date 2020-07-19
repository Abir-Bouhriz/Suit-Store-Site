//$('.search-button').click(function(){
  //  $(this).parent().toggleClass('open');
  //});

//function getConfirmation() {
//var result = confirm("Do you really want to precede your order ?");
//if (result == true) {
  //  alert("Thanks for your confident ");
//}
//else {
  //  alert("check out our new arrival collection ");
//}
//}


const iconMenu = document.querySelector('.menu-toggler');
const menu = document.querySelector('.menu');

iconMenu.addEventListener('click', function(){
    this.classList.toggle('active');
    menu.classList.toggle('active');
})