var sounds = ["A.mp3", "C.mp3", "G.mp3", "F.mp3", "hihat.mp3", "kick.mp3", "snare.mp3", "laugh-1.mp3", "laugh-2.mp3"];
var audioElement = ["kick.mp3", "snare.mp3", "hihat.mp3"];
// tslint:disable-next-line: typedef
var recording = false;
var beat = [5, 4, 6];
function playSample(data) {
    if (recording == true) {
        audioElement.push(data);
    }
    var audio = new Audio(data);
    audio.play();
}
// tslint:disable-next-line: typedef
var index = 0;
var myinterval;
function playbeat() {
    myinterval = setInterval(function () {
        playSample(audioElement[index]);
        index += 1;
        if (index > audioElement.length) {
            index = 0;
        }
    }, 500);
}
function stopbeat() {
    clearInterval(myinterval);
}
function record() {
    if (recording == false) {
        recording = true;
    }
    else {
        recording = false;
    }
}
function deletefkt() {
    audioElement = [];
}
window.addEventListener("load", function () {
    document.querySelector("#play").addEventListener("click", function () {
        var playButton = document.querySelector("#play");
        if (playButton.classList.contains("fa-play")) {
            playButton.classList.remove("fa-play");
            playButton.classList.add("fa-stop");
            playbeat();
        }
        else {
            playButton.classList.remove("fa-stop");
            playButton.classList.add("fa-play");
            stopbeat();
        }
    });
    document.getElementById("kick").addEventListener("click", function () { playSample("kick.mp3"); });
    document.getElementById("snare").addEventListener("click", function () { playSample("snare.mp3"); });
    document.getElementById("hihat").addEventListener("click", function () { playSample("hihat.mp3"); });
    document.getElementById("sounda").addEventListener("click", function () { playSample("A.mp3"); });
    document.getElementById("soundc").addEventListener("click", function () { playSample("C.mp3"); });
    document.getElementById("soundg").addEventListener("click", function () { playSample("G.mp3"); });
    document.getElementById("soundf").addEventListener("click", function () { playSample("F.mp3"); });
    document.getElementById("laugh1").addEventListener("click", function () { playSample("laugh-1.mp3"); });
    document.getElementById("laugh2").addEventListener("click", function () { playSample("laugh-2.mp3"); });
    document.getElementById("rec").addEventListener("click", record);
    document.querySelector("#delete").addEventListener("click", deletefkt);
});
//# sourceMappingURL=script.js.map