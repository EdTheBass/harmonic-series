// harmonic series
var series1Slider = document.getElementById("series1");
var series1Out = document.getElementById("out1");
series1Out.innerHTML = series1Slider.value/100;
var series2Slider = document.getElementById("series2");
var series2Out = document.getElementById("out2");
series2Out.innerHTML = series2Slider.value/100;
var series3Slider = document.getElementById("series3");
var series3Out = document.getElementById("out3");
series3Out.innerHTML = series3Slider.value/100;
var series4Slider = document.getElementById("series4");
var series4Out = document.getElementById("out4");
series4Out.innerHTML = series4Slider.value/100;
var series5Slider = document.getElementById("series5");
var series5Out = document.getElementById("out5");
series5Out.innerHTML = series5Slider.value/100;
var series6Slider = document.getElementById("series6");
var series6Out = document.getElementById("out6");
series6Out.innerHTML = series6Slider.value/100;
var series7Slider = document.getElementById("series7");
var series7Out = document.getElementById("out7");
series7Out.innerHTML = series7Slider.value/100;
var series8Slider = document.getElementById("series8");
var series8Out = document.getElementById("out8");
series8Out.innerHTML = series8Slider.value/100;


series1Slider.oninput = function() {
    series1Out.innerHTML = this.value/100;
}

series2Slider.oninput = function() {
    series2Out.innerHTML = this.value/100;
}

series3Slider.oninput = function() {
    series3Out.innerHTML = this.value/100;
}

series4Slider.oninput = function() {
    series4Out.innerHTML = this.value/100;
}

series5Slider.oninput = function() {
    series5Out.innerHTML = this.value/100;
}

series6Slider.oninput = function() {
    series6Out.innerHTML = this.value/100;
}

series7Slider.oninput = function() {
    series7Out.innerHTML = this.value/100;
}

series8Slider.oninput = function() {
    series8Out.innerHTML = this.value/100;
}


// volume
var volSlider = document.getElementById("vol");
var volOut = document.getElementById("volOut");
volOut.innerHTML = volSlider.value/100;

volSlider.oninput = function() {
    volOut.innerHTML = this.value/100;
}

// length
var lenSlider = document.getElementById("length");
var lenOutput = document.getElementById("lenOut");
lenOutput.innerHTML = lenSlider.value + "s"; 

lenSlider.oninput = function() {
  lenOutput.innerHTML = this.value + "s";
} 

// note
var noteSlider = document.getElementById("note");
var noteOutput = document.getElementById("noteOut");
noteOutput.innerHTML = noteSlider.value + " Hz"; 

noteSlider.oninput = function() {
  var noteType = document.getElementById("squareWave").checked ? "square" : "sine"

  noteOutput.innerHTML = this.value + " Hz";
  
  playSound(volSlider.value/100, noteType, this.value, parseFloat(lenSlider.value), this.value, 0);

  playSound(series1Slider.value/200, noteType, this.value*2, parseFloat(lenSlider.value), this.value*2, 0);
  playSound(series2Slider.value/200, noteType, this.value*3, parseFloat(lenSlider.value), this.value*3, 0);
  playSound(series3Slider.value/200, noteType, this.value*4, parseFloat(lenSlider.value), this.value*4, 0);
  playSound(series4Slider.value/200, noteType, this.value*5, parseFloat(lenSlider.value), this.value*5, 0);
  playSound(series5Slider.value/200, noteType, this.value*6, parseFloat(lenSlider.value), this.value*6, 0);
  playSound(series6Slider.value/200, noteType, this.value*7, parseFloat(lenSlider.value), this.value*7, 0);
  playSound(series7Slider.value/200, noteType, this.value*8, parseFloat(lenSlider.value), this.value*8, 0);
  playSound(series8Slider.value/200, noteType, this.value*9, parseFloat(lenSlider.value), this.value*9, 0);

} 


function setHz() {
    noteSlider.value = document.getElementById("frequencyInp").value;
    noteOutput.innerHTML = noteSlider.value + " Hz";

    noteSlider.oninput();
}

// octaver

function octaveUp() {
    noteSlider.value *= 2;
    noteOutput.innerHTML = noteSlider.value + " Hz";

    noteSlider.oninput();
}

function fifthUp() {
    noteSlider.value *= 1.5;
    noteOutput.innerHTML = noteSlider.value + " Hz";

    noteSlider.oninput();
}

function fourthUp() {
    noteSlider.value *= 1.33;
    noteOutput.innerHTML = noteSlider.value + " Hz";

    noteSlider.oninput();
}

function thirdUp() {
    noteSlider.value *= 1.25;
    noteOutput.innerHTML = noteSlider.value + " Hz";

    noteSlider.oninput();
}

function minorThirdUp() {
    noteSlider.value *= 1.2;
    noteOutput.innerHTML = noteSlider.value + " Hz";

    noteSlider.oninput();
}