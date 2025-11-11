// Wait until the Jira page is ready
document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("bannerButton");
  if (btn) {
    btn.addEventListener("click", function () {
      alert("Hello from your Jira Script Fragment! ");
    });
  }
  console.log("Custom Jira banner script loaded successfully!");
});
