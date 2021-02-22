const progressBar = document.querySelector("[data-progress-bar]");

const interval = setInterval(tick, 5);

function tick() {
  const computedStyle = getComputedStyle(progressBar);
  const progressBarValue = computedStyle.getPropertyValue(
    "--progress-bar-width"
  );

  const progressBarWidth = parseFloat(progressBarValue) || 0;

  progressBar.style.setProperty("--progress-bar-width", progressBarWidth + 0.1);
  
  if (progressBarWidth === 100) {
    progressBar.classList.add("active");
    progressBar.dataset.label = "Completed!"
    clearInterval(interval);
  }
}
