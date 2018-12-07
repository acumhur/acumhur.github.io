/*
variables
*/
var model;

/*
load the model
*/
async function start(cur_mode) {
   
    //load the model 
    model = await tf.loadModel('model2/model.json')
    
    //warm up 
    model.predict(tf.zeros([1, 28, 28, 1]))
}

