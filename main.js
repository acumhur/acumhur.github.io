/*
variables
*/
var model;

/*
load the model
*/
async function start(cur_mode) {
   
    //load the model 
    model = await tf.loadModel('model/model.json')
    
    //warm up 
    s = model.predict(tf.zeros([1, 28, 28, 1]))
    console.log(5+6);
}

