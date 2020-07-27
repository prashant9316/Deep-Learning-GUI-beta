let content_model;
let style_model_1;

// function to load the vgg19 model 
async function load_vgg(){
	vgg = await tf.loadLayersModel('vgg19/model.json');
	return vgg;
}

// function to create content and style models
function get_model(model, layer_name){
	return tf.model({inputs:model.inputs, outputs: model.getLayer(layer_name).output});
}

// Calculating content cost using mean squared error
function content_cost(content, generated){
	var c = content_model(content);
	var g = content_model(generated);
	return tf.reduce_mean(tf.square(C - G));
}

//calculating styling cost
function style_cost(style, generated){
	var J_style = 0;

	for(i=0;i<3;i++){
		var a_S = style_models[i](style);
		var a_G = style_models[i](generated);
		var GS = gram_matrix(a_S);
		var GG = gram_matrix(a_G);
		var current_cost = tf.reduce_mean(tf.square(GS-GG));
		J_style = J_style + current_cost * style_model_weights;
	return J_Style;
	}
}

// function to calculate the gram matrix of the style matrix
function gram_matrix(tensor){
	var temp = tensor;
	temp = tf.squeeze(temp);
	var fun = tf.reshape(temp, [temp.shape[2], temp.shape[0]*temp.shape[1]]);
	var result = tf.matmal(temp, temp, transpose_b = True);
	var gram = tf.expand_dims(result, axis = 0);

	return gram;
}


function train(content_img, style_img, iterations = 20, alpha = 10.0, beta = 20.0){

	const content_img = load_and_preprocess_image(content_image_path);
	const style_img = load_and_preprocess_image(style_image_path);

	const generated = tf.variable(content_img, dtype = tf.float32);

	const opt = tf.train.adam(7.0);
	var best_cost = 1e12 + 0.1;
	var best_img = [];

	console.log('All variables set up done!');

	for(i=0;i<iterations;i++) {
		J_content = content_cost(content_img, generated);
		J_style = content_cost(style_img, generated);
		const f = (J_content, J_style) => alpha*J_content + beta*J_style;
		const g = tf.grads(f);

	}

}


// carrying out the whole procedure
async function init() {
	console.log('loading VGG');
	vgg = await load_vgg();
	console.log('VGG model loaded');
	console.log('Now creating content model');
	content_model = get_model(vgg, 'block4_conv2');
	console.log('Content model created!');
	console.log('Now creating style models');
	var style_models = [];
	for(i = 0; i<3; i++){
		style_models.push(get_model, 'block'+String(i)+'conv1');
	}
	console.log('Style models created');
	console.log('Now you can choose your own style to transfer image from');
	console.log('setting style model weights to 0.33');
	const style_model_weights = 1.0 / 3;

}

init();
