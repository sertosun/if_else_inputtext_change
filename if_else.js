


// document.getElementById("greet").onclick = function () {
//   if (document.getElementById("wort").value = "hallo") {
//     document.getElementById("message").innerHTML =
//            "Das ist eine Begrüßung 🤝"
//   } else if (document.getElementById("wort").value = "bye"); {
//     document.getElementById("message").innerHTML =
//     "Das ist eine Verabschiedung 👋"
//   }  
// };

// document.getElementById("greet").onclick = function (tik) {
//   if (document.getElementById("wort").value = "hallo") {
//     document.getElementById("message").innerHTML =
//            "Das ist eine Begrüßung 🤝"
//   } else if (document.getElementById("wort").value = "bye") {
//     document.getElementById("message").innerHTML =
//     "Das ist eine Verabschiedung 👋"
//   }  
// };

// document.getElementById("greet").onclick = function () {
//   if (document.getElementById("wort").value = "bye") {
//     document.getElementById("message").innerHTML =
//     "Das ist eine Verabschiedung 👋"
//   } (document.getElementById("wort").value = "hallo"); {
//     document.getElementById("message").innerHTML =
//            "Das ist eine Begrüßung 🤝"
//   }  
// };


function myFunction() {
  var greet = document.getElementById("myInput").value;
  var text;
  
  if (greet === "hallo") {
    text = "Das ist eine Begrüßung 🤝";
   
  } else if (greet === "bye") {
    text = "Das ist eine Verabschiedung 👋";
    
  }  
  document.getElementById("message").innerHTML = text;
}










