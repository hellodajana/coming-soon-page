var button = document.querySelector("button");

button.addEventListener("click", () => {
  var x = document.getElementById("myEmail").pattern;
  var y = document.getElementById("myEmail").value;
  var z = document.getElementById("show");
  var click = document.getElementById("click");

  if (y.lenght > 0) {
    if (y !== x) {
      z.style.display = "block";
      click.classList.add("show2");
    }
  }
});
