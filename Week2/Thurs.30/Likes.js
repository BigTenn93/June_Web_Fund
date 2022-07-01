var clicksA = 0;

function topButton() {
    clicksA += 1;
    document.getElementById("likesTop").innerHTML = clicksA;
};

var clicksB = 0;

function midButton() {
    clicksB += 1;
    document.getElementById("likesMid").innerHTML = clicksB;
};

var clicksC = 0;

function btmButton() {
    clicksC += 1;
    document.getElementById("likesBtm").innerHTML = clicksC;
};
