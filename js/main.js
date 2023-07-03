function showPass(ele) {
  var inp = document.querySelector(ele);
  if (inp.type === "password") {
    inp.type = "text";
  } else {
    inp.type = "password";
  }
}