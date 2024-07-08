export default function toggleFullscreen() {
  const fullscreenButton = document.querySelector("#fullscreen-button");
  fullscreenButton.addEventListener("click", () => {
    fullscreen();
    fullscreenButton.classList.toggle("fullscreen");
  });
}

function fullscreen() {
  if (!document.fullscreenElement) {
    const container = document.querySelector("body");
    container.requestFullscreen().catch((err) => {
      alert(
        `Error attempting to enable fullscreen mode: ${err.message} (${err.name})`
      );
    });
  } else {
    document.exitFullscreen();
  }
}
