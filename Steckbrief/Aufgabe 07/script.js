var audioElement = ["kick.mp3", "snare.mp3", "hihat.mp3"];
function playSample(data) {
    var audio = new Audio(data);
    audio.play();
    console.log(data);
}
function playbeat(index) {
    var index = 0;
    setInterval(function () {
        var audio2 = new Audio(audioElement[index]);
        audio2.play();
        index += 1;
    }, 500);
    ;
}
window.addEventListener("load", function () {
    document.querySelector(".play").addEventListener("click", function () { playbeat(); });
    document.getElementById("kick").addEventListener("click", function () { playSample("kick.mp3"); });
    document.getElementById("snare").addEventListener("click", function () { playSample("snare.mp3"); });
    document.getElementById("hihat").addEventListener("click", function () { playSample("hihat.mp3"); });
    document.getElementById("sounda").addEventListener("click", function () { playSample("A.mp3"); });
    document.getElementById("soundc").addEventListener("click", function () { playSample("C.mp3"); });
    document.getElementById("soundg").addEventListener("click", function () { playSample("G.mp3"); });
    document.getElementById("soundf").addEventListener("click", function () { playSample("F.mp3"); });
    document.getElementById("laugh1").addEventListener("click", function () { playSample("laugh-1.mp3"); });
    document.getElementById("laugh2").addEventListener("click", function () { playSample("laugh-2.mp3"); });
});
//# sourceMappingURL=script.js.map