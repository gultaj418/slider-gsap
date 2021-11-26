gsap.set(".info-btn", { yPercent: -100, opacity: 0 });

gsap.utils.toArray(".box").forEach((box) => {
  let imgSlide = box.querySelector(".image"),
    infoBtn = box.querySelector(".info-btn"),
    tl = gsap.timeline({ paused: true });
  tl.call(() => {
    if (tl.reversed()) {
      imgSlide.classList.remove("green");
    } else {
      imgSlide.classList.add("green");
    }
  })
    .to(imgSlide, { css: { marginRight: 128 } })
    .to(infoBtn, { yPercent: 0, opacity: 1 });

  box.addEventListener("click", () => {
    var gammaList = document.getElementsByClassName("gamma");
    let infoBtn = document.childNodes[1];

    box.classList.add("gamma");
    for (let p = 0; p < gammaList.length; p++) {
      if (!gammaList[p].isEqualNode(box)) {
        console.log("girdi");

        gsap.to(gammaList[p], 0.3, { marginRight: -130 });
      }
    }

    tl.play();
  });
});
