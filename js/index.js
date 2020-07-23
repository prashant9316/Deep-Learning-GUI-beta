let model;
const webcam = new Webcam(document.getElementById('wc'));
let isPredicting = false;

async function loadModel(){
    model = await tf.loadLayersModel("Model/js_model/model.json");
    return (model);
    
}

async function predict(){
    while(isPredicting){
        const output = tf.tidy(() => {
            const img = webcam.capture();
            const prediction =  model.predict(img);
            return prediction.as1D().argMax();
        });
        classId = (await output.data())[0];
        console.log(classId);
        if(classId == 0){
            predictionText = "0 degrees";
        }
        else if(classId == 1){
            predictionText = "45 degrees left";
        }
        else if(classId==2){
            predictionText = "45 degrees right";
        }
        else if(classId==3){
            predictionText = "90 degrees left";
        }
        else {
            predictionText = "90 degrees right";
        }
        document.getElementById("prediction").innerText = predictionText;
        
        output.dispose();
        await tf.nextFrame();
    }
}

async function getPrediction(img){
    const output = tf.tidy(() => {
        const prediction = model.predict(img);
        return prediction.as1D().argMax();
    })
    const classId = (await output.data())[0];
    console.log(classId);
        if(classId == 0){
            predictionText = "class 1";
        }
        else if(classId == 1){
            predictionText = "class 2";
        }
        else if(classId==2){
            predictionText = "class 3";
        }
        else if(classId==3){
            predictionText = "class 4";
        }
        else {
            predictionText = "class 5";
        }
    document.getElementById("pred").innerText = predictionText;
    output.dispose();
}

function showModel(){
    tfvis.show.modelSummary({name:'Model Architecture'}, model);
}

function startPredicting(){
    isPredicting = true;
    predict();
}

function stopPredicting(){
    isPredicting = false;
    predictionText = "Prediction will appear here!";
    document.getElementById("prediction").innerHTML = predictionText;
    predict();
}

function saveModel(){
    model.save("downloads://palm_recognition");
}


    
async function init(){
    console.log("Loading the classifier model");
    model = loadModel();
    console.log('The model is loaded!');
    console.log("setting up the webcam");
    await webcam.setup();
    console.log("webcam setup done!")
    
}

init();
