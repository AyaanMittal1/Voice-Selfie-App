var speech_rec=window.webkitSpeechRecognition;
var speech=new speech_rec();
function act_mic(){
    document.getElementById("text_display").innerHTML="";
    speech.start();
}
speech.onresult=function(e){
    console.log(e);
    content=e.results[0][0].transcript;
    document.getElementById("text_display").innerHTML=content;
    if (content=="take my selfie"){
        speak();
        Webcam.attach(cam);
    }
}
function speak(){
    text_to_speech_api=window.speechSynthesis;
    // text=document.getElementById("text_display").innerHTML;
    text="Taking your selfie in five seconds";
    utterThis=new SpeechSynthesisUtterance(text);
    text_to_speech_api.speak(utterThis);
    setTimeout(take_snapshot, 5000);
}
Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 cam=document.getElementById("cam");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("picture").innerHTML="<img id='selfie' src="+data_uri+">";
    });
    download_selfie();
}
function download_selfie(){
    link=document.getElementById("link");
    img=document.getElementById("selfie").src;
    link.href=img;
     link.click();
}