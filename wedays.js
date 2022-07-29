function display() {
  view_bar = document.querySelector("#view_bar");
  if (view_bar.style.display == "none") {
    view_bar.style.display = "block";
  } else {
    view_bar.style.display = "none";
  }
}
