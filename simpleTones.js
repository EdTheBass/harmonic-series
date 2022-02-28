//Create Audio Context
var AudioContext = window.AudioContext || window.webkitAudioContext;
var context = new AudioContext();
var o = null;
var g = null;

var soundObj = {
	bump:["triangle",100,0.8,333,0.2,100,0.4,80,0.7],
	buzzer:["sawtooth",40,0.8, 100,0.3 ,110, 0.5],
	zip:["sawtooth",75,0.8,85,0.2,95,0.4,110,0.6,120,0.7,100,0.8],
	powerdown:["sine", 300, 1.2, 150, 0.5,1,0.9],
	powerup:["sine", 30, 1, 150, 0.4,350,0.9],
	bounce:["square", 75, 0.5, 150, 0.4],
	siren:["sawtooth",900,2.5, 400,0.5 ,900, 1, 400,1.4, 900, 2, 400, 2.5],
	loop:["sine", 340, 2.5, 550, 0.8, 440, 1.4],
	falling:["sine", 750, 5.2, 700, 1, 600, 2, 500, 3, 400, 4, 300, 4.5, 200, 5]
}


// const VOLUME_CURVE = [1.0, 0.61, 0.37, 0.22, 0.14, 0.08, 0.05, 0.0];
const VOLUME_CURVE = [1, 1, 1, 1, 1, 1, 1, 1];

function playSound(volume,waveType,startFreq,endTime) {
    _volume_curve = [...VOLUME_CURVE];

    for (var x = 0; x < VOLUME_CURVE.length; x++) {
        _volume_curve[x] = VOLUME_CURVE[x] * volume;
    }

    // _volume_curve.reverse();

	if (soundObj[arguments[0]] && arguments.length === 1) {
		console.log("SIUUUU");
	}  else {
	var oscillatorNode = context.createOscillator();
	var gainNode = context.createGain();
	
	oscillatorNode.type = waveType;
	oscillatorNode.frequency.setValueAtTime(startFreq, context.currentTime);
	
for (var i = 4; i < arguments.length; i += 2) {
	oscillatorNode.frequency.exponentialRampToValueAtTime(arguments[i], context.currentTime + arguments[i+1]);
}
	gainNode.gain.setValueAtTime(0.3, context.currentTime);
	gainNode.gain.setValueCurveAtTime(_volume_curve, context.currentTime, 2.0);
  
	oscillatorNode.connect(gainNode);
	gainNode.connect(context.destination);
  
	oscillatorNode.start();
	oscillatorNode.stop(context.currentTime + endTime);
  }
}
