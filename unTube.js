// // let recomendationsList = document.getElementById('items');
// // recomendationsList.outerHTML = "";
// // recomendationsList.outerHTML = "";
// setTimeout(function(){ console.log("hi");}, 3000);

var unTube = function() {
  var element = document.getElementById('related');
  element.parentElement.removeChild(element);
};

if (document.readyState == 'loading') {
  document.addEventListener('DOMContentLoaded', unTube);
} else {
  setTimeout(unTube, 500);
}

// var element = document.getElementById('secondary');
// element.parentElement.removeChild(element);