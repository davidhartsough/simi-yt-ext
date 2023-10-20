let state = false;
function toggleMute() {
  document.querySelector("button.ytp-mute-button").click();
  state = !state;
}
function getQuery() {
  return `#container>#movie_player.html5-video-player${
    state
      ? ":not(.ad-showing.ad-interrupting)"
      : ".ad-created.ad-showing.ad-interrupting"
  }>.html5-video-container>video.video-stream.html5-main-video`;
}
function simiYT() {
  const vid = document.querySelector(getQuery());
  if (vid && ((state && vid.muted) || (!state && !vid.muted))) {
    toggleMute();
  }
}
setInterval(simiYT, 333);
