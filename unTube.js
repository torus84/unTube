// // let recomendationsList = document.getElementById('items');
// // recomendationsList.outerHTML = "";
// // recomendationsList.outerHTML = "";
// setTimeout(function(){ console.log("hi");}, 3000);

let launchRetries = 10;

let unTube = function() {
  let element = document.getElementById('related');
  if (document.getElementById('playlist').getElementsByClassName('playlist-items').children === undefined) {
    element = document.getElementById('secondary');
  }
  if (null !== element) {
    launchRetries = 0;
    element.parentElement.removeChild(element);
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', unTube);
} else {
  setTimeout(unTube, 500);
}

let launcher = function() {
  if (launchRetries > 0) {
    unTube();
    setTimeout(launcher, 1000);
  }
}

// let element = document.getElementById('secondary');
// element.parentElement.removeChild(element);