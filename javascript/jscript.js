var item = document.getElementById('payment-nav').children;
var detail = document.getElementById('payment-detail').children;
function current(active,nav) {
  
  for(var i=0; i<item.length; i++ )
  {
   item[i].className = "no-active";
   detail[i].style.display = "none";
   }
   active.className = "active";
   document.getElementById(nav).style.display = "block";
}


