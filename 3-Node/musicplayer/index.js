import * as Tone from "tone";

// 音符映射（简谱 -> 音名）
const noteMap = {
  1: "C4", 2: "D4", 3: "E4", 4: "F4", 5: "G4", 6: "A4", 7: "B4",
};

const notes = [3, 5, 6, 3, 5, 6]; // 示例简谱

const synth = new Tone.Synth().toDestination();

Tone.start(); // 用户触发后启动音频上下文

let i = 0;
const play = () => {
  if (i >= notes.length) return;
  synth.triggerAttackRelease(noteMap[notes[i]], "8n");
  i++;
  setTimeout(play, 500);
};

play();
