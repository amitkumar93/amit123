function writeBelow(form) {
  var input = document.forms.write.input_to_write.value;
  document.getElementById("write_here").innerHTML = "Your input was:" + input;
  return false;
}
