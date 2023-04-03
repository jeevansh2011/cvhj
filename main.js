
speak();

  
  	
function speak(){
  var synth = window.speechSynthesis;
  speak_data = document.getElementById("textbox").value;
  var utterThis = new SpeechSynthesisUtterance(speak_data);
  synth.speak(utterThis);
  Webcam.attach(camera);
}

Webcam.set({
  width:360,
  height:250,
  image_format:'jpeg',
  jpeg_quality:90
});
camera=document.getElementById("camera");