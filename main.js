/*
variables
*/
var model;

/*
load the model
*/
async function start(cur_mode) {
    //arabic or english
    mode = cur_mode
    
    //load the model 
    model = await tf.loadModel('model2/model.json')
    
    //warm up 
    model.predict(tf.zeros([1, 28, 28, 1]))
    
    //allow drawing on the canvas 
    allowDrawing()
    
    //load the class names
    await loadDict()
}

