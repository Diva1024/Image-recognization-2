Webcam.set({
    width:300,
    height:300,
    image_format:'png',
    png_quality:90,
});
camera=document.getElementById("camera");
Webcam.attach("#camera");

function takeSnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'>";
    })
}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/XSzMQ8_ft/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
