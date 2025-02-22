﻿


function InicializarServiceWorkerNotif(){
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () =>
   navigator.serviceWorker.register('./sw.js')
    .then(registration => console.log('Service Worker registered'))
    .catch(err => 'SW registration failed'));
  };

 
  requestPermission();
}

if ('Notification' in window) {};

function requestPermission() {
  if (!('Notification' in window)) {
    //alert('Notification API not supported!');
    return;
  }
  
  Notification.requestPermission(function (result) {
    //$status.innerText = result;
  });
}


InicializarServiceWorkerNotif();


Navegar.inicio();

// Navegar.login();
// Navegar.laboratorista();
// Navegar.registroPacientes();
// Navegar.jornada();

// Navegar.dashboard();




/* F.loadScript('./views/dashboard.js.js','root')
.then(()=>{
  initView();
}) */
// F.loadScript('./views/inicio.js','root')
// .then(()=>{
//   initView();
// })


