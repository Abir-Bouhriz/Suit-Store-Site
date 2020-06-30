$('.search-button').click(function(){
    $(this).parent().toggleClass('open');
  });

function getConfirmation() {
var result = confirm("Do you really want to precede your order ?");
if (result == true) {
    alert("Thanks for your confident ");
}
else {
    alert("check out our new arrival collection ");
}
}

