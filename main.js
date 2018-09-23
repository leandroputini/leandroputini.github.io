
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
  console.log(res);
  if (res == true) {
    document.getElementById('sensor1status').innerText = "Status: Ligado";
    console.log("Status1: Ligado");
  }else{
    document.getElementById('sensor1status').innerText = "Status: Desligado";
    console.log("Status1: Desligado");
  }
});
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor1alert);
  console.log(res);
  if (res == true) {
    document.getElementById('sensor1alert').innerHTML = '<img src="sources/sensor1Alert.png" alt="sensor1Alert" class="planta" >';
    document.getElementById('sensor1status').innerText = "Status: ALERTA!";
    console.log("Alert1: Ligado");
  }else{
    document.getElementById('sensor1alert').innerHTML = '';
    console.log("Alert1: Desligado");
  }
});
function ligarSensor1(){
  dbRef.update({
    sensor1status: true
  })
}
function desligarSensor1(){
  dbRef.update({
    sensor1status: false
  })
}
function ligarAlert1(){
  dbRef.update({
    sensor1alert: true
  })
}
function desligarAlert1(){
  dbRef.update({
    sensor1alert: false
  })
}


//***** SENSOR 2 *****//
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor2status);
  console.log(res);
  if (res == true) {
    document.getElementById('sensor2status').innerText = "Status: Ligado";
    console.log("Status2: Ligado");
  }else{
    document.getElementById('sensor2status').innerText = "Status: Desligado";
    console.log("Status2: Desligado");
  }
});
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor2alert);
  console.log(res);
  if (res == true) {
    document.getElementById('sensor2alert').innerHTML = '<img src="sources/sensor2Alert.png" alt="sensor2Alert" class="planta" >';
    document.getElementById('sensor2status').innerText = "Status: ALERTA!";
    console.log("Alert2: Ligado");
  }else{
    document.getElementById('sensor2alert').innerHTML = '';
    console.log("Alert2: Desligado");
  }
});
function ligarSensor2(){
  dbRef.update({
    sensor2status: true
  })
}
function desligarSensor2(){
  dbRef.update({
    sensor2status: false
  })
}
function ligarAlert2(){
  dbRef.update({
    sensor2alert: true
  })
}
function desligarAlert2(){
  dbRef.update({
    sensor2alert: false
  })
}


//***** SENSOR 3 *****//
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor3status);
  console.log(res);
  if (res == true) {
    document.getElementById('sensor3status').innerText = "Status: Ligado";
    console.log("Status3: Ligado");
  }else{
    document.getElementById('sensor3status').innerText = "Status: Desligado";
    console.log("Status3: Desligado");
  }
});
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor3alert);
  console.log(res);
  if (res == true) {
    document.getElementById('sensor3alert').innerHTML = '<img src="sources/sensor3Alert.png" alt="sensor3Alert" class="planta" >';
    document.getElementById('sensor3status').innerText = "Status: ALERTA!";
    console.log("Alert3: Ligado");
  }else{
    document.getElementById('sensor3alert').innerHTML = '';
    console.log("Alert3: Desligado");
  }
});
function ligarSensor3(){
  dbRef.update({
    sensor3status: true
  })
}
function desligarSensor3(){
  dbRef.update({
    sensor3status: false
  })
}
function ligarAlert3(){
  dbRef.update({
    sensor3alert: true
  })
}
function desligarAlert3(){
  dbRef.update({
    sensor3alert: false
  })
}

//***** ALARME *****//
dbRef.onSnapshot(function(doc){
  var res = (doc.data().alarmeStatus);
  console.log(res);
  if (res == true) {
    document.getElementById('alarmeStatus').innerText = "Status: Ligado";
    console.log("StatusA: Ligado");
  }else{
    document.getElementById('alarmeStatus').innerText = "Status: Desligado";
    console.log("StatusA: Desligado");
  }
});
dbRef.onSnapshot(function(doc){
  var res = (doc.data().alarmeAlert);
  console.log(res);
  if (res == true) {
    document.getElementById('alarmeStatus').innerText = "Status: ALERTA!";
    console.log("StatusA: Ligado");
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


