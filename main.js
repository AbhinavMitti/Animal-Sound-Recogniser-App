//https://teachablemachine.withgoogle.com/models/3--50wBAp/

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3--50wBAp/model.json", modelready)


}

function modelready() {
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1
        random_number_g = Math.floor(Math.random() * 255) + 1
        random_number_b = Math.floor(Math.random() * 255) + 1

        document.getElementById("result_label").innerHTML = 'I can hear ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy ' + (results[0].confidence * 100).toFixed(2) + ' %'
        document.getElementById("result_label").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"
        document.getElementById("result_confidence").style.color = "rgb(" + random_number_r + "," + random_number_g + "," + random_number_b + ")"

        img1 = document.getElementById("animal_image");

        if (results[0].label == "Barking") {
            img1.src = "dog_image.gif";
        }
        else if (results[0].label == "meowing") {
            img1.src = "cat_image1.gif";
        }
        else if (results[0].label == "roaring") {
            img1.src = "lion_image.gif";
        }
        else if (results[0].label == "mooing") {
            img1.src = "cow_image.gif";
        }
        else if (results[0].label == "Background Noise") {
            img1.src = "Background_noise.jpg";
        }

    }
}