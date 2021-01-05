const sounds = [
  {
    name: "wow",
    audio: "./sounds/anime-wow-sound-effect.mp3",
  },
  {
    name: "bruh",
    audio: "./sounds/bruh.mp3",
  },
  {
    name: "discord-notification",
    audio: "./sounds/discord-notification.mp3",
  },
  {
    name: "quack",
    audio: "./sounds/quack.mp3",
  },
  {
    name: "to-be-continued",
    audio: "./sounds/tobecontinued.mp3",
  },
  {
    name: "tuturu",
    audio: "./sounds/tuturu_1.mp3",
  },
];

sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");

  const audioTag = document.createElement("audio");
  audioTag.setAttribute("src", sound.audio);
  audioTag.setAttribute("id", sound.name);

  btn.innerText = sound.name;

  btn.addEventListener("click", () => {
    stopSongs();
    console.log(sound.name);
    document.getElementById(sound.name).play();
  });
  document.getElementById("audios").appendChild(audioTag);
  document.getElementById("buttons").appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound.name);
    song.pause();
    song.currentTime = 0;
  });
}
