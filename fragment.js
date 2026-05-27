(function () {
  function initBanner() {
    const btn = document.getElementById("bannerButton");
    if (btn) {
      btn.addEventListener("click", function () {
        alert("Hello from your Jira Script Fragment! 🎉");
      });
      console.log("Custom Jira banner script loaded successfully!");
    } else {
      // Retry if fragment HTML hasn't loaded yet
      setTimeout(initBanner, 500);
    }
  }
  initBanner();
})();
