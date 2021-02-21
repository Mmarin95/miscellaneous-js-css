const progressBar = document.querySelector("[data-progress-bar]");

const interval = setInterval(tick, 5);

function tick() {
  const computedStyle = getComputedStyle(progressBar);
  // console.log(computedStyle.getPropertyValue("--progress-bar-width"));

  const progressBarWidth =
    parseFloat(computedStyle.getPropertyValue("--progress-bar-width")) || 0;

  progressBar.style.setProperty("--progress-bar-width", progressBarWidth + 0.1);

  if (progressBarWidth === 100) {
    clearInterval(interval);
  }
}
