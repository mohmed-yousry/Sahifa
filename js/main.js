let boxSeetings = document.querySelector("#settings");
let gersetings = document.querySelector(".geer-seeting");
gersetings.addEventListener("click", function () {
  boxSeetings.classList.toggle("show");
  this.classList.toggle("fa-spin");
});

// بداية الالوان
let spansColor = Array.from(
  document.querySelectorAll("#settings .settings-color span")
);

if (localStorage.getItem("color-item")) {
  document.documentElement.style.setProperty(
    "--main-color",
    localStorage.getItem("color-item")
  );

  for (let z = 0; z < spansColor.length; z++) {
    if (spansColor[z].classList.contains("active") == true) {
      spansColor[z].classList.remove("active");
    }
    if (
      localStorage.getItem("color-item") ==
      spansColor[z].getAttribute("color-att")
    ) {
      spansColor[z].classList.add("active");
    }
  }
} else {
  localStorage.setItem("color-item", "#e91e63");
}
for (let i = 0; i < spansColor.length; i++) {
  spansColor[i].addEventListener("click", (e) => {
    for (let x = 0; x < spansColor.length; x++) {
      spansColor[x].classList.remove("active");
      spansColor[i].classList.add("active");
      document.documentElement.style.setProperty(
        "--main-color",
        spansColor[i].getAttribute("color-att")
      );
      localStorage.setItem(
        "color-item",
        spansColor[i].getAttribute("color-att")
      );
    }
  });
}

// نهاية الالوان
// نهاية الاعدادات
// اخر الاخبار

let pPassas = document.querySelector("#BreakingNew .container p");
let allLorem = Array.from(
  document.querySelectorAll("#BreakingNew .container .lorem p")
);

setInterval(function () {
  pPassas.innerHTML =
    allLorem[Math.floor(Math.random() * allLorem.length)].innerHTML;
}, 3000);
// نهاية اخر الاخبار
// ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ
// بداية جزء الاسلايد
let allPicSlid = Array.from(
  document.querySelectorAll("#cursor .container .part img")
);

let angleSlid = Array.from(
  document.querySelectorAll("#cursor .container .angle i")
);
// console.log(angleSlid);
for (let i = 0; i < allPicSlid.length; i++) {
  let slidintervil = setInterval(function () {
    allPicSlid[i].setAttribute(
      "src",
      `./img/cursoser/${Math.floor(Math.random() * 10)}.jpg `
    );

    angleSlid[0].addEventListener("click", function () {
      allPicSlid[i].setAttribute(
        "src",
        `./img/cursoser/${Math.floor(Math.random() * 10)}.jpg `
      );
    });
    angleSlid[1].addEventListener("click", function () {
      allPicSlid[i].setAttribute(
        "src",
        `./img/cursoser/${Math.floor(Math.random() * 10)}.jpg `
      );
    });
  }, 5000);
}
// نهاية جزء الاسلايد
// ـــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ

// part to top

let btnToTop = document.querySelector(".totop i");
window.addEventListener("scroll", function () {
  let x = this.scrollY;
  if (x >= 2000) {
    btnToTop.style.display = "flex";
  } else {
    btnToTop.style.display = "none";
  }
});

btnToTop.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
