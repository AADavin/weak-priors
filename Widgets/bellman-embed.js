window.addEventListener("message", function (e) {
  if (!e || !e.data || e.data.type !== "bellman-h") return;
  var f = document.getElementById("bellman-frame");
  if (f) f.style.height = e.data.h + "px";
});
