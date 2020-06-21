var audioElement = ["kick.mp3", "snare.mp3", "hihat.mp3"];
var sounds = ["A.mp3", "C.mp3", "G.mp3", "F.mp3", "hihat.mp3", "kick.mp3", "snare.mp3", "laugh-1.mp3", "laugh-2.mp3"];
var record = false;
var index = 0;
var myinterval;
var rec = false;
// tslint:disable-next-line: typedef
function playSample(data) {
    if (rec == true) {
        audioElement.push(data);
        console.log(audioElement);
    }
    var audio = new Audio(data);
    audio.play();
    // tslint:disable-next-line: typedef
    function playbeat() {
        myinterval = setInterval(function () {
            var audio = new Audio(audioElement[index]);
            audio.play();
            index += 1;
            if (index > audioElement.length) {
                index = 0;
            }
        });
    }
    500;
    ;
}
function stopbeat() {
    clearInterval(myinterval);
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
    function recording() {
        if (rec) {
            rec = false;
        }
        else {
            rec = true;
        }
    }
    document.getElementById("kick").addEventListener("click", function () { playSample(5); });
    document.getElementById("snare").addEventListener("click", function () { playSample(6); });
    document.getElementById("hihat").addEventListener("click", function () { playSample(4); });
    document.getElementById("sounda").addEventListener("click", function () { playSample(0); });
    document.getElementById("soundc").addEventListener("click", function () { playSample(1); });
    document.getElementById("soundg").addEventListener("click", function () { playSample(2); });
    document.getElementById("soundf").addEventListener("click", function () { playSample(3); });
    document.getElementById("laugh1").addEventListener("click", function () { playSample(7); });
    document.getElementById("laugh2").addEventListener("click", function () { playSample(8); });
    document.querySelector("#rec").addEventListener("click", recording);
});
//# sourceMappingURL=script.js.map