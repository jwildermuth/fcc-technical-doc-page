let menu = document.querySelector(".nav-list")
let toggle = document.querySelector(".burger-toggle")

window.addEventListener('mouseup', function(event){
  if (event.target != toggle){
        toggle.checked = false;
    }
});
