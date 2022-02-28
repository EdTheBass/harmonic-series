var canvas = document.getElementById("wave");
var ctx = canvas.getContext("2d");

var numHarmonics = 9;

var debug = 0;

var lastFreq = 0;
var lastVol = 0;
var lastSeries = [document.getElementById("series1").value,
                  document.getElementById("series2").value,
                  document.getElementById("series3").value,
                  document.getElementById("series4").value,
                  document.getElementById("series5").value,
                  document.getElementById("series6").value,
                  document.getElementById("series7").value,
                  document.getElementById("series8").value];

function drawWave() {
    let freq = document.getElementById("note").value;
    let vol = document.getElementById("vol").value;

    let width = canvas.width;
    let height = canvas.height-1;

    let series = [document.getElementById("series1").value,
                  document.getElementById("series2").value,
                  document.getElementById("series3").value,
                  document.getElementById("series4").value,
                  document.getElementById("series5").value,
                  document.getElementById("series6").value,
                  document.getElementById("series7").value,
                  document.getElementById("series8").value];

    if (freq != lastFreq || vol != lastVol || series != lastSeries) {
        lastFreq = freq;
        lastVol = vol;
        lastSeries = series;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    
    let addWaves = document.getElementById("addWaves").checked;
    let showHarmonics = document.getElementById("showHarmonics").checked;
    let squareWave = document.getElementById("squareWave").checked;

    if (addWaves) {
        for (var i=0;i<canvas.width;i++) {
            let pi = Math.PI;
            let wavHeight = Math.sin((i * (pi/180))*freq/50)*(vol/50);
            let nextWavHeight = Math.sin(((i+1) * (pi/180))*freq/50)*(vol/50);

            let harmonicWaves = [];

            for (var a=1;a<numHarmonics;a++) {
                let newFreq = freq * (a+1);
                let newVol = document.getElementById("series".concat(a.toString())).value;
                let newHeight = Math.sin((i * (pi/180))*newFreq/50)*(newVol/50);
                let newNextHeight = Math.sin(((i+1) * (pi/180))*newFreq/50)*(newVol/50);

                harmonicWaves.push([newHeight, newNextHeight]);
            }

            for (var b=0;b<harmonicWaves.length;b++) {
                wavHeight += harmonicWaves[b][0]
                nextWavHeight += harmonicWaves[b][1]
            }

            ctx.strokeStyle = "#000000";

            ctx.beginPath(); 
            ctx.moveTo(i, (wavHeight*height/15)+height/2);    
            ctx.lineTo(i+1, (nextWavHeight*height/15)+height/2);
            ctx.stroke();
        }
    } else {
        for (var a=0;a<numHarmonics - (showHarmonics ? 0 : (numHarmonics)-1);a++) {
            if (a>0) {
                freq = document.getElementById("note").value;
                if (a == 1) {
                    freq *= 2;
                } else if (a == 2) {
                    freq *= 1.5;
                } else if (a == 3) {
                    freq *= 1.33;
                } else if (a == 4) {
                    freq *= 1.25;
                } else if (a == 5) {
                    freq *= 1.2;
                } else if (a == 6) {
                    freq *= 1.17;
                } else if (a == 7) {
                    freq *= 1.14;
                } else if (a == 8) {
                    freq *= 1.13;
                }
                vol = document.getElementById("series".concat((a).toString())).value; 
            }

            let pi = Math.PI;

            for (var i=0;i<canvas.width;i++) {
                if (!squareWave) {
                    var wavHeight = Math.sin((i * (pi/180))*freq/50)*(vol/50);
                    var nextWavHeight = Math.sin(((i+1) * (pi/180))*freq/50)*(vol/50);
                } else {
                    var wavHeight = Math.sign(Math.sin((i * (pi/180))*(freq/50)*pi))*(vol/50);
                    var nextWavHeight = Math.sign(Math.sin(((i+1) * (pi/180))*(freq/50)*pi))*(vol/50);
                }
                ctx.strokeStyle = (a==0) ? "#000000" : "#".concat(parseInt((16777216/numHarmonics)*a).toString(16));
 
                if (vol > 0) {
                    ctx.beginPath(); 
                    ctx.moveTo(i, (wavHeight*height/15)+height/2);    
                    ctx.lineTo(i+1, (nextWavHeight*height/15)+height/2);
                    ctx.stroke();   
                } 
            }
        }
    }
}

function loop() {
    drawWave();

    requestAnimationFrame(loop);
}

loop()