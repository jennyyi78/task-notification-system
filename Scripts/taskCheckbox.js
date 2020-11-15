function ShowTasks() {
    playSound('sounds/selection.wav');
    var checkBox = document.getElementById("myCheck");
    var displaytodo = document.getElementById("ToDo");
  
    if (checkBox.checked == true) {
      displaytodo.style.display = "block";      
    } else {
      displaytodo.style.display = "none";
    }
  }