
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


const dbRef = db.collection('sensores').doc('sensoresStatus');
const teste = document.getElementById('teste');
 


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
    document.getElementById('sensor1status').innerText = "Status: Desigado";
    console.log("Status1: Desigado");
  }
});
function ligarSensor1(){
  
}


//***** SENSOR 2 *****//
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor2status);
  console.log(res);
  if (res == true) {
    document.getElementById('sensor2status').innerText = "Status: Ligado";
    console.log("Status2: Ligado");
  }else{
    document.getElementById('sensor2status').innerText = "Status: Desigado";
    console.log("Status2: Desigado");
  }
});

//***** SENSOR 3 *****//
dbRef.onSnapshot(function(doc){
  var res = (doc.data().sensor3status);
  console.log(res);
  if (res == true) {
    document.getElementById('sensor3status').innerText = "Status: Ligado";
    console.log("Status3: Ligado");
  }else{
    document.getElementById('sensor3status').innerText = "Status: Desigado";
    console.log("Status3: Desigado");
  }
});



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


//Consultando o sensor2status
dbRef.onSnapshot(function(doc) {
  if (doc.exists) {
      var sensor2status = doc.data().sensor2status;
      console.log('sensor2status: '+doc.data().sensor2status);
  } else {
      // doc.data() will be undefined in this case
      console.log("Documento não existe!");
  }
});

//Consultando o sensor3status
dbRef.onSnapshot(function(doc) {
  if (doc.exists) {
      var sensor3status = doc.data().sensor3status;
      console.log('sensor3status: '+doc.data().sensor3status);
  } else {
      // doc.data() will be undefined in this case
      console.log("Documento não existe!");
  }
});
*/


