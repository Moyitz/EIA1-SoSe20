var namer = 6035.6;
var samer = 1261.5;
var afr = 1235.5;
var asia = 16274.1;
var aus = 2100.5;
var eur = 4209.3;
var eur08 = 4965.7;
var gesamt = eur + afr + samer + namer + asia + aus;
var proz1 = gesamt * 0.01;
var eurorel = eur / proz1;
var eurov = eur08 * 0.01;
var eurov2 = eur08 - eur;
var eurov3 = eurov2 / eurov;
var afr08 = 1028;
var samer08 = 1132.6;
var asia08 = 12954.7;
var namer08 = 6600.4;
var aus08 = 1993;
var afrrel = afr / proz1;
var asiarel = asia / proz1;
var ausrel = aus / proz1;
var samerrel = samer / proz1;
var namerrel = namer / proz1;
var namerv = namer08 * 0.01;
var namerv2 = namer08 - namer;
var namerv3 = namerv2 / namerv;
var asiav = asia08 * 0.01;
var asiav2 = asia08 - asia;
var asiav3 = asiav2 / asiav;
var samerv = samer08 * 0.01;
var samerv2 = samer08 - samer;
var samerv3 = samerv2 / samerv;
var ausv = aus08 * 0.01;
var ausv2 = aus08 - aus;
var ausv3 = ausv2 / ausv;
var afrv = afr08 * 0.01;
var afrv2 = afr08 - afr;
var afrv3 = afrv2 / afrv;
function opa1() {
    document.getElementsByClassName(".europe").style.opacity = '0.1';
}
function namerfunction() {
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#p1").innerHTML = "Emission absolute of North America in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in North America";
    document.querySelector("#h2e").innerHTML = namer.toFixed(2);
    document.querySelector("#h3e").innerHTML = namerrel.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = namerv3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = namerv2.toFixed(2) + "Kg";
    document.querySelector("div.chart")?.setAttribute("style", "height: 19%");
    document.querySelector("div.prz").innerHTML = "19%";
}
function samerfunction() {
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in South America";
    document.querySelector("#p1").innerHTML = "Emission absolute of South America in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = samer.toFixed(2);
    document.querySelector("#h3e").innerHTML = samerrel.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = samerv3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = samerv2.toFixed(2) + "Kg";
    document.querySelector("div.chart")?.setAttribute("style", "height: 4%");
    document.querySelector("div.prz").innerHTML = "4%";
    console.log("Die Emission von Südamerika ist : " + samer + "kg C02");
    console.log("Relativ zur Gesamtemission der Welt verursacht Südamerika damit :  " + samerrel + "%");
    console.log("Für Südamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + samerv3 + "% verändert ");
    console.log("2018 im Vergleich zu 2008 sind das" + samerv2 + "kg C02");
    console.log("______________________________________________________");
}
function afrfunction() {
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Africa";
    document.querySelector("#p1").innerHTML = "Emission absolute of Africa in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = afr.toFixed(2);
    document.querySelector("#h3e").innerHTML = afrrel.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = afrv3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = afrv2.toFixed(2) + "Kg";
    document.querySelector("div.chart")?.setAttribute("style", "height: 4%");
    document.querySelector("div.prz").innerHTML = "4%";
    console.log("Die Emission von Afrika ist : " + afr + "kg C02");
    console.log("Relativ zur Gesamtemission der Welt verursacht Afrika damit :  " + afrrel + "%");
    console.log("Für Afrika hat sich 2018 im Vergleich zu 2008 die Emission um " + afrv3 + "% verändert ");
    console.log("2018 im Vergleich zu 2008 sind das" + afrv2 + "kg C02");
    console.log("______________________________________________________");
}
function asiafunction() {
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Asia";
    document.querySelector("#p1").innerHTML = "Emission absolute of Asia in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = asia.toFixed(2);
    document.querySelector("#h3e").innerHTML = asiarel.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = asiav3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = asiav2.toFixed(2) + "Kg";
    document.querySelector("div.chart")?.setAttribute("style", "height: 52%");
    document.querySelector("div.prz").innerHTML = "52%";
}
function ausfunction() {
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Australia";
    document.querySelector("#p1").innerHTML = "Emission absolute of Australia in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#h2e").innerHTML = aus.toFixed(2);
    document.querySelector("#h3e").innerHTML = ausrel.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = ausv3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = ausv2.toFixed(2) + "Kg";
    document.querySelector("div.chart")?.setAttribute("style", "height: 7%");
    document.querySelector("div.prz").innerHTML = "7%";
}
function eurofunction() {
    document.querySelector("#h1e").innerHTML = "Carbon Dioxide Emissions in Europe";
    document.querySelector("#p1").innerHTML = "Emission absolute of Europe in 2018";
    document.querySelector("#p2").innerHTML = "Relative to total world's emission";
    document.querySelector("#p3").innerHTML = "Growth rate between 2008 and 2018 (in %)";
    document.querySelector("#p4").innerHTML = "Growth rate between 2008 and 2018 (absolute)";
    document.querySelector("#h2e").innerHTML = eur.toFixed(2);
    document.querySelector("#h3e").innerHTML = eurorel.toFixed(2) + "%";
    document.querySelector("#h4e").innerHTML = eurov3.toFixed(2) + "%";
    document.querySelector("#h5e").innerHTML = eurov2.toFixed(2) + "Kg";
    document.querySelector("div.chart")?.setAttribute("style", "height: 14%");
    document.querySelector("div.prz").innerHTML = "14%";
    console.log("Die Emission von Europa ist : " + eu.toFixed(2), r + "kg");
    console.log("Relativ zur Gesamtemission der Welt verursacht Europa damit :  " + eurorel.toFixed(2) + "%");
    console.log("Für Europa hat sich 2018 im Vergleich zu 2008 die Emission um " + eurov3.toFixed(2) + "% verändert ");
    console.log("2018 im Vergleich zu 2008 sind das" + eurov2.toFixed(2) + "kg C02");
    console.log("______________________________________________________");
}
window.addEventListener("load", function () {
    document.querySelector(".europe").addEventListener("click", eurofunction);
    document.querySelector(".northamerica").addEventListener("click", namerfunction);
    document.querySelector(".southamerica").addEventListener("click", samerfunction);
    document.querySelector(".africa").addEventListener("click", afrfunction);
    document.querySelector(".asia").addEventListener("click", asiafunction);
    document.querySelector(".australia").addEventListener("click", ausfunction);
}, console.log("Die Emission von Nordmerika ist : " + namer + "kg C02"));
console.log("Relativ zur Gesamtemission der Welt verursacht Nordamerika damit :  " + namerrel + "%");
console.log("Für Nordamerika hat sich 2018 im Vergleich zu 2008 die Emission um " + namerv3 + "% verändert ");
console.log("2018 im Vergleich zu 2008 sind das" + namerv2 + "kg C02");
console.log("______________________________________________________");
console.log("Die Emission von Asien ist : " + asia + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Asien damit :  " + asiarel + "%");
console.log("Für Asien hat sich 2018 im Vergleich zu 2008 die Emission um " + asiav3 + "% verändert ");
console.log("2018 im Vergleich zu 2008 sind das" + asiav2 + "kg C02");
console.log("______________________________________________________");
console.log("Die Emission von Australien ist : " + aus + "kg C02");
console.log("Relativ zur Gesamtemission der Welt verursacht Australien damit :  " + ausrel + "%");
console.log("Für Australien hat sich 2018 im Vergleich zu 2008 die Emission um " + ausv3 + "% verändert ");
console.log("2018 im Vergleich zu 2008 sind das" + ausv2 + "kg C02");
//# sourceMappingURL=script.js.map