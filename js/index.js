let model;
const compare = tf.tensor1d([0.5], dtype = 'float32')
const webcam = new Webcam(document.getElementById('wc'));
let isPredicting = false;

async function loadModel(){
    model = await tf.loadLayersModel("Model/js_model/model.json");
    console.log('Var: '+compare)
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
        if(classId ==1){
            predictionText = "I see a Dog";
        }
        else if(classId == 0){
            predictionText = "I see a Cat";
        }
        else if(classId == 2){
            predictionText = "No Cat or Dog";
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
        if(classId == 1){
            predictionText = "I see a Dog";
        }
        else if(classId == 0){
            predictionText = "I see a Cat";
        }
        else if(classId==2){
            predictionText = "No Cat or Dog";
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
    predict();
}

function saveModel(){
    model.save("downloads://cat_dog_classifier");
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
