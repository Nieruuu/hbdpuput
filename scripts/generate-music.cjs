// Original music-box instrumental, rendered locally without external assets.
const fs = require('node:fs');
const path = require('node:path');
const rate = 22050;
const beat = 60 / 88;
const duration = 32 * beat;
const samples = new Float64Array(Math.ceil(duration * rate));
function note(midi, start, length, volume) {
  const frequency = 440 * 2 ** ((midi - 69) / 12);
  for (let i = 0; i < length * rate; i++) {
    const t = i / rate;
    const envelope = Math.min(t / 0.012, 1) * Math.exp(-t * 3 / length) * Math.min((length - t) / 0.08, 1);
    const tone = Math.sin(2 * Math.PI * frequency * t) + 0.22 * Math.sin(2 * Math.PI * frequency * 2 * t) * Math.exp(-3 * t) + 0.06 * Math.sin(2 * Math.PI * frequency * 3 * t);
    samples[(Math.floor(start * rate) + i) % samples.length] += tone * envelope * volume;
  }
}
const chords = [[60,64,67],[57,60,64],[53,57,60],[55,59,62],[60,64,67],[57,60,64],[53,57,60],[55,59,62]];
const melody = [[76,79,81,79],[76,72,74,76],[77,76,74,72],[74,79,77,74],[76,79,84,83],[81,79,76,72],[74,77,76,74],[71,74,72,72]];
chords.forEach((chord, bar) => {
  note(chord[0] - 12, bar * 4 * beat, 4 * beat, 0.15);
  for (let step = 0; step < 8; step++) note(chord[step % 3], (bar * 4 + step / 2) * beat, beat * 1.6, 0.085);
  melody[bar].forEach((pitch, step) => note(pitch, (bar * 4 + step) * beat, beat * 1.8, 0.19));
});
const peak = samples.reduce((max, sample) => Math.max(max, Math.abs(sample)), 0);
const wav = Buffer.alloc(44 + samples.length * 2);
wav.write('RIFF'); wav.writeUInt32LE(wav.length - 8, 4); wav.write('WAVEfmt ', 8);
wav.writeUInt32LE(16, 16); wav.writeUInt16LE(1, 20); wav.writeUInt16LE(1, 22);
wav.writeUInt32LE(rate, 24); wav.writeUInt32LE(rate * 2, 28); wav.writeUInt16LE(2, 32); wav.writeUInt16LE(16, 34);
wav.write('data', 36); wav.writeUInt32LE(samples.length * 2, 40);
samples.forEach((sample, i) => wav.writeInt16LE(Math.round(sample / peak * 0.8 * 32767), 44 + i * 2));
const output = path.join(__dirname, '../public/music/birthday-music-box.wav');
fs.writeFileSync(output, wav);
console.log(`Generated ${output} (${duration.toFixed(1)} seconds)`);
