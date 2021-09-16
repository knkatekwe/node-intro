var tutor=require('./tutorial.js');
module.exports = { nodeTutorial, pTutor };


function nodeTutorial(){
    console.log("Node Tutorial");
}

function pTutor(){
    var pTutor=tutor;
    pTutor.tutorial();
}

