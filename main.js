function startClassification()
navigator.mediaDevices.getSupportedConstraints({audio : true});
classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Wi-8y4N9Y/.json', modelReady)
function modelReady(){
    classifier.classifiy(gotResults);
}