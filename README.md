# harmonic-series
Harmonic series project

Source for https://harmonic-series.ed27.repl.co

Thanks to https://github.com/escottalexander/simpleTones.js for the sound library. I modified it slightly to alter the volume.

The wave(s) at the top shows the harmonics. The fundamental note is shown in black, and the individual harmonics are shown in colour.
The top slider is used to alter the pitch of the fundamental note. The input box and adjacent "set frequency" button can be used to type in a frequency to be played. The buttons to the right of that change the pitch of the note to various intervals.

**Add waves** - when ticked, this adds together the sine waves of the fundamental, and all the harmonics. When unticked (if Show Harmonics is ticked), the fundamental and the harmonics are shown individually.
**Show harmonics** - when ticked, this will show the fundamental and the harmonics individually, when "Add waves" is unticked.
**Square wave** - this changes the wave type from sine to square, altering both the sound of the wave and the appearance on the graph.

The slider below controls the relative volume of the sound. BE CAREFUL, this can get quite loud. I would recommend not going above 0.5, unless the sound in your system is quite quiet.
The next slider controls the number of seconds the sound plays for. I am aware that a continuous sound would be more useful, but, as far as I know, this is not possible with the library I am currently using. I may find a way to implement this in the future, but for now, sounds play for this set time.

All the following sliders control the relative volumes of individual harmonics. If you are not familiar with the harmonic series in music, I would recommend watching this video: https://www.youtube.com/watch?v=OATjHiOuc70
At the moment, there are only 8 harmonics (despite there being infinite harmonics in reality). I may add more in the future, feel free to do it yourself, but I do not think it is necessary.

