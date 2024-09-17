setInterval(() => {
  let t = document.getElementById("time");
  let time = new Date().toLocaleTimeString();
  t.innerHTML = `${time}`;

  let d = document.getElementById("date");
  let date = new Date().toLocaleDateString();
  d.innerHTML = `${date}`;
}, 500);

let signout = document.getElementById("signout");

signout.addEventListener("click", () => {
  window.location.href = "login.html";
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

let ss=document.getElementById("sensex");

ss.addEventListener("click", () => {
  const iframe = document.getElementById("iframe");
  iframe.setAttribute("src", "https://in.investing.com/indices/sensex");
});

let wt=document.getElementById("weather");

wt.addEventListener("click", () => {
  const iframee = document.getElementById("iframe");
  iframee.setAttribute("src", "https://www.accuweather.com/en/in/mumbai/204842/weather-forecast/204842");
});

let ln=document.getElementById("lnews");

ln.addEventListener("click", () => {
  const iframeee = document.getElementById("iframe");
  iframeee.setAttribute("src", "https://www.ndtv.com/latest");
});


