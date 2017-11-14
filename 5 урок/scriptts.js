window.onload = function () {
    var b = document.getElementById("button");
        b.setAttribute("aria-pressed", "false");
        b.onclick = function() {
    if ( this.innerHTML == "Старт" )
         this.innerHTML = "Стоп",
         this.setAttribute("aria-pressed", "true");
    else this.innerHTML = "Старт",
         this.setAttribute("aria-pressed", "false");
       }
  return false;
  }