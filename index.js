function bgColor(color) {
  return function () {
    document.body.style.backgroundColor = `${color}`;
  };
}

let colors = ["green", "orange", "pink", "blue", "red", "black", "purple"];

colors.map((c) => {
  document.getElementById(c).onclick = bgColor(c);
});
