
// Initialize Firebase
var config = {
    apiKey: "AIzaSyBHWDqK49yEyfslsY5Q08bEC_P637lOmqQ",
    authDomain: "ss-iot-2c18a.firebaseapp.com",
    databaseURL: "https://ss-iot-2c18a.firebaseio.com",
    projectId: "ss-iot-2c18a",
    storageBucket: "ss-iot-2c18a.appspot.com",
    messagingSenderId: "626067097243"
  };
  
  firebase.initializeApp(config);

const db = firebase.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true};
db.settings(settings);


const dbRef = db.doc('sensores/sensoresStatus');


//console.log(db.dbRef.get());
/*var sensor1status = dbRef.onSnapshot(doc.data().sensor1status);
console.log(sensor1status);*/




//***** SENSOR 1 *****//
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor1status);
  
  if (res == true) {
    document.getElementById('sensor1status').innerText = "Status: Ligado";
  
  }else{
    document.getElementById('sensor1status').innerText = "Status: Desligado";
  }
});
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor1alert);
  if (res == true) {     
    window.anim1 = setInterval(function(){
      document.getElementById('sensor1alert').innerHTML = '<svg height="100" width="100">'+
      '<polyline points="50,1 1,99 99,99 50,1" style="fill:none;stroke:brown;stroke-width:3"></polyline>'+
      '<circle cx="50" cy="80" r="5" fill="none" stroke="brown" stroke-width="3"></circle>'+
      '<polyline points="50,70 40,40 45,30 55,30 60,40 50,70" style="fill:none;stroke:brown;stroke-width:3"></polyline>'+
      '</svg>';
      setTimeout(function(){document.getElementById('sensor1alert').innerHTML = '';}, 500);
      //console.log("Teste interval")
    }, 1000);
    
    document.getElementById('sensor1status').innerText = "Status: ALERTA!";
    
  }else{
    window.clearInterval(window.anim1);
    document.getElementById('sensor1alert').innerHTML = '';
    
  }
});

function ligarSensor1(){
  dbRef.update({
    sensor1status: true
  })
}
function desligarSensor1(){
  dbRef.get().then(function(doc){
    var r = doc.data().sensor1alert
    if (r==false) {
      dbRef.update({
        sensor1status: false
      })  
    }else{
      console.log("sensor1 não pode ser desligado - em alerta");
    }
  })
}
function desligarAlert1(){
  dbRef.update({
    sensor1alert: false
  })
}
function ligarAlert1(){
  dbRef.get().then(function(doc){
    var r = doc.data().sensor1status;
    if (r==true) {
      dbRef.update({
        sensor1alert: true
      })
      pane();
      console.log("Alerta do sensor1 ativado");  
    }else{
      console.log("Não foi possível alertar sensor1 - desligado.");
    }
  });
  
}



//***** SENSOR 2 *****//
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor2status);
  if (res == true) {
    document.getElementById('sensor2status').innerText = "Status: Ligado";
  }else{
    document.getElementById('sensor2status').innerText = "Status: Desligado";
  }
});
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor2alert);
  if (res == true) {     
    window.anim2 = setInterval(function(){
      document.getElementById('sensor2alert').innerHTML = '<svg height="100" width="100">'+
      '<polyline points="50,1 1,99 99,99 50,1" style="fill:none;stroke:brown;stroke-width:3"></polyline>'+
      '<circle cx="50" cy="80" r="5" fill="none" stroke="brown" stroke-width="3"></circle>'+
      '<polyline points="50,70 40,40 45,30 55,30 60,40 50,70" style="fill:none;stroke:brown;stroke-width:3"></polyline>'+
      '</svg>';
      setTimeout(function(){document.getElementById('sensor2alert').innerHTML = '';}, 500);
      //console.log("Teste interval")
    }, 1000);
    
    document.getElementById('sensor2status').innerText = "Status: ALERTA!";
    
  }else{
    window.clearInterval(window.anim2);
    document.getElementById('sensor2alert').innerHTML = '';
    
  }
});
function ligarSensor2(){
  dbRef.update({
    sensor2status: true
  })
}
function desligarSensor2(){
  dbRef.get().then(function(doc){
    var r = doc.data().sensor2alert
    if (r==false) {
      dbRef.update({
        sensor2status: false
      })  
    }else{
      console.log("sensor2 não pode ser desligado - em alerta");
    }
  })
}
function ligarAlert2(){
  dbRef.get().then(function(doc){
    var r = doc.data().sensor2status;
    if (r==true) {
      dbRef.update({
        sensor2alert: true
      })
      console.log("Alerta do sensor2 ativado"); 
      pane(); 
    }else{
      console.log("Não foi possível alertar sensor2 - desligado.");
    }
  });
}
function desligarAlert2(){
  dbRef.update({
    sensor2alert: false
  })
}


//***** SENSOR 3 *****//
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor3status);
  if (res == true) {
    document.getElementById('sensor3status').innerText = "Status: Ligado";
  }else{
    document.getElementById('sensor3status').innerText = "Status: Desligado";
  }
});
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor3alert);
  if (res == true) {     
    window.anim3 = setInterval(function(){
      document.getElementById('sensor3alert').innerHTML = '<svg height="100" width="100">'+
      '<polyline points="50,1 1,99 99,99 50,1" style="fill:none;stroke:brown;stroke-width:3"></polyline>'+
      '<circle cx="50" cy="80" r="5" fill="none" stroke="brown" stroke-width="3"></circle>'+
      '<polyline points="50,70 40,40 45,30 55,30 60,40 50,70" style="fill:none;stroke:brown;stroke-width:3"></polyline>'+
      '</svg>';
      setTimeout(function(){document.getElementById('sensor3alert').innerHTML = '';}, 500);
      //console.log("Teste interval")
    }, 1000);
    
    document.getElementById('sensor3status').innerText = "Status: ALERTA!";
    
  }else{
    window.clearInterval(window.anim3);
    document.getElementById('sensor3alert').innerHTML = '';
    
  }
});
function ligarSensor3(){
  dbRef.update({
    sensor3status: true
  })
}
function desligarSensor3(){
  dbRef.get().then(function(doc){
    var r = doc.data().sensor3alert
    if (r==false) {
      dbRef.update({
        sensor3status: false
      })  
    }else{
      console.log("sensor3 não pode ser desligado - em alerta");
    }
  })
}
function ligarAlert3(){
  dbRef.get().then(function(doc){
    var r = doc.data().sensor3status;
    if (r==true) {
      dbRef.update({
        sensor3alert: true
      })
      pane();
      console.log("Alerta do sensor3 ativado");  
    }else{
      console.log("Não foi possível alertar sensor3 - desligado.");
    }
  });
}
function desligarAlert3(){
  dbRef.update({
    sensor3alert: false
  })
}

//***** ALARME *****//

dbRef.onSnapshot(function(doc){
  var res = (doc.data().alarmeStatus);
  if (res == true) {
    document.getElementById('alarmeStatus').innerText = "Status: Ligado";
  }
});
dbRef.onSnapshot(function(doc){
  var res = (doc.data().alarmeAlert);
  if (res == true) {
    document.getElementById('alarmeStatus').innerText = "Status: ALERTA!";
  }
});
function ligarAlarme(){
  dbRef.update({
    alarmeStatus: true
  })
}
function desligarAlarme(){
  dbRef.update({
    alarmeStatus: false
  })
}
function pane(){
  dbRef.update({
    alarmeAlert: true
  })
}
function despane(){
  dbRef.update({
    alarmeAlert: false
  })
}





/*
//Consultando o sensor1status
dbRef.onSnapshot(function(doc) {
    if (doc.exists) {
        //console.log('sensor1status: '+doc.data().sensor1status);  
        res = ('sensor1status: '+doc.data().sensor1status);
        //console.log("teste log: "+res);
        
    } else {
        // doc.data() will be undefined in this case
        console.log("Documento não existe!");
    } 
  });
*/


