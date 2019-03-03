// tunr off all lights function
function turnOffLights() {
    $(".bulb").css("background-color","black");
    }
// turn on stop function
function turnOnStopLight() {
    turnOffLights();
    $("#stopLight").css("background-color","red");

}

// turn on slow function
function turnOnSlowLight() {
    turnOffLights();
    $("#slowLight").css("background-color","yellow");
}

// turn on go function
function turnOnGoLight() {
    turnOffLights();
    $("#goLight").css("background-color","green");
}

$("#stopButton").on("click",turnOnStopLight);
$("#slowButton").on("click",turnOnSlowLight);
$("#goButton").on("click",turnOnGoLight);
