let html5QrcodeScanner ;
let id=16010121110
function onScanSuccess(decodedText, decodedResult) {
    // handle the scanned code as you like, for example:
    console.log(`Code matched = ${decodedText}`, decodedResult);
    window.alert(decodedText);
    var qrcode = new QRCode("qrcode",  {text:decodedText+""+id,width:512,height:512,correctLevel :QRCode.CorrectLevel.H});	
 
    //stop scanning
    html5QrCode.stop()
    document.getElementById('qr').display="none";

  }
  
  function onScanFailure(error) {
    // handle scan failure, usually better to ignore and keep scanning.
    // for example:
    console.warn(`Code scan error = ${error}`);
  }
  
  document.getElementById("scanButton").addEventListener("click", function () {
    //document.getElementById('qr').display="block";
    // Ensure that html5QrcodeScanner is initialized before calling render
    if (html5QrcodeScanner) {
      html5QrcodeScanner.render(onScanSuccess, onScanFailure);
    }
    else{
        console.log("Error htmlqrcodeScanner is not initialized");
    }
  });
  


  window.onload = function() { //default running
    
     html5QrcodeScanner = new Html5QrcodeScanner(
        "reader",
        { fps: 10, qrbox: {width: 500, height: 500} , facingmode:"environment"},
        /* verbose= */ false
      );
    
  }

