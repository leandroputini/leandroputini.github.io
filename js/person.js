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

dbRef.onSnapshot(function(doc){
    var s1s = (doc.data().sensor1status);
    if (s1s == true) {
        document.getElementById('s1').checked = true;
        console.log("s1s: "+s1s);
    }else{
        document.getElementById('s1').checked = false;
        console.log("s1s: "+s1s);
    }

    var s2s = (doc.data().sensor2status);
    if (s2s == true) {
        document.getElementById('s2').checked = true;
        console.log("s2s: "+s2s);
    }else{
        document.getElementById('s2').checked = false;
        console.log("s2s: "+s2s);
    }

    var s3s = (doc.data().sensor3status);
    if (s3s == true) {
        document.getElementById('s3').checked = true;
        console.log("s3s: "+s3s);
    }else{
        document.getElementById('s3').checked = false;
        console.log("s3s: "+s3s);
    }

    var a1 = (doc.data().sensor1alert);
    if (a1 == true) {     
        window.anim1 = setInterval(function(){
          document.getElementById('a1').innerHTML = '<img src="src/alert.png" alt="a1" style="width: 100%">';
          setTimeout(function(){document.getElementById('a1').innerHTML = '';}, 500);
        }, 1000);
        
        
    }else{
    window.clearInterval(window.anim1);
    document.getElementById('a1').innerHTML = '';
    
    }
    var a2 = (doc.data().sensor2alert);
    if (a2 == true) {     
        window.anim2 = setInterval(function(){
          document.getElementById('a2').innerHTML = '<img src="src/alert.png" alt="a2" style="width: 100%">';
          setTimeout(function(){document.getElementById('a2').innerHTML = '';}, 500);
        }, 1000);
        
        
    }else{
    window.clearInterval(window.anim2);
    document.getElementById('a2').innerHTML = '';
    
    }
    var a3 = (doc.data().sensor3alert);
    if (a3 == true) {     
        window.anim3 = setInterval(function(){
          document.getElementById('a3').innerHTML = '<img src="src/alert.png" alt="a3" style="width: 100%">';
          setTimeout(function(){document.getElementById('a3').innerHTML = '';}, 500);
        }, 1000);
        
        
    }else{
    window.clearInterval(window.anim3);
    document.getElementById('a3').innerHTML = '';
    
    }
});

function ch1(){
    if (document.getElementById('s1').checked) {
        dbRef.update({
            sensor1status: true
        })
    }else{
        dbRef.get().then(function(doc){
            var r = doc.data().sensor1alert
            if (r==false) {
              dbRef.update({
                sensor1status: false
              })  
            }else{
              alert("Sensor 1 não pode ser desligado: em alerta");
              document.getElementById('s1').checked = true;
            }
        })
    }
}

function ch2(){
    if (document.getElementById('s2').checked) {
        dbRef.update({
            sensor2status: true
        })
    }else{
        dbRef.get().then(function(doc){
            var r = doc.data().sensor2alert
            if (r==false) {
              dbRef.update({
                sensor2status: false
              })  
            }else{
              alert("Sensor 2 não pode ser desligado: em alerta");
              document.getElementById('s2').checked = true;
              
            }
        })
    }
}

function ch3(){
    if (document.getElementById('s3').checked) {
        dbRef.update({
            sensor3status: true
        })
    }else{
        dbRef.get().then(function(doc){
            var r = doc.data().sensor3alert
            if (r==false) {
              dbRef.update({
                sensor3status: false
              })  
            }else{
              alert("Sensor 3 não pode ser desligado: em alerta");
              document.getElementById('s3').checked = true;
            }
        })
    }
}