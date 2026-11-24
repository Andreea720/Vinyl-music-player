document.addEventListener("DOMContentLoaded", () => {
    Promise.all([
      fetch("./vinylnoac.svg").then(res => res.text()),
      fetch("./vinylac.svg").then(res => res.text())
    ])
    .then(([vinylnoacSvg, vinylacSvg]) => {
      const spinningContainer = document.getElementById("vinylnoac");
      const staticContainer = document.getElementById("vinylac");
  
      spinningContainer.innerHTML = vinylnoacSvg;
      staticContainer.innerHTML = vinylacSvg;
  
      setTimeout(() => {
        const vinylnoacSvgEl = spinningContainer.querySelector("svg");
        const playButton = document.getElementById("play-button");
        const toggleBtn = document.getElementById("toggle");
        const backwardBtn = document.getElementById("backward");
        const forwardBtn = document.getElementById("forward");
        const progressBar = document.getElementById("progress");
        const audio = document.getElementById("love-song");
  
        let isPlaying = false;
  
        const play = () => {
          vinylnoacSvgEl.classList.add("spinning");
          spinningContainer.classList.add("move-left"); // 👈 Move left
          audio.play();
          isPlaying = true;
          playButton.textContent = "Pause";
          toggleBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
        };
  
        const pause = () => {
          vinylnoacSvgEl.classList.remove("spinning");
          spinningContainer.classList.remove("move-left"); // 👈 Reset position
          audio.pause();
          isPlaying = false;
          playButton.textContent = "Play";
          toggleBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        };
  
        const togglePlayPause = () => {
          isPlaying ? pause() : play();
        };
  
        playButton.addEventListener("click", togglePlayPause);
        toggleBtn.addEventListener("click", togglePlayPause);
  
        backwardBtn.addEventListener("click", () => {
          audio.currentTime = 0;
        });
  
        forwardBtn.addEventListener("click", () => {
          audio.currentTime = Math.min(audio.duration, audio.currentTime + 10);
        });
  
        audio.addEventListener("timeupdate", () => {
          const progress = (audio.currentTime / audio.duration) * 100;
          progressBar.value = progress;
        });
  
        progressBar.addEventListener("input", () => {
          const newTime = (progressBar.value / 100) * audio.duration;
          audio.currentTime = newTime;
        });
      }, 300);
    })
    .catch(err => console.error("Error loading SVGs:", err));
  });
  