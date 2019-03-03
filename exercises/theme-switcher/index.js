

let backgroundColor = $("body");

function switchGray() {
    backgroundColor.css({ "background-color": "gray", "color": "white" });
}

function switchWhite() {
  backgroundColor.css({ "background-color": "white", "color": "black" });
}

$("#whiteButton").on("click",switchWhite);
$("#grayButton").on("click",switchGray);
