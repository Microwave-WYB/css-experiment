
let cursor = document.getElementById("cursor");
let frame = document.querySelector(".floating-card-frame");
let card = document.querySelector(".floating-card");


document.body.addEventListener("mousemove", function (e) {
  (cursor.style.left = e.clientX + "px"), (cursor.style.top = e.clientY + "px");
});

card.addEventListener("mouseenter", function (e) {
  (cursor.style.transform = "scale(6)"),
  (cursor.style.backgroundColor = "rgba(255, 255, 255, 0.0)");
});

card.addEventListener("mouseleave", function (e) {
  (cursor.style.transform = "scale(1)");
  (cursor.style.backgroundColor = "white");
});

$(".floating-card-frame").mousemove(function (e) {
  let offset = $(this).offset();
  let x = e.pageX - offset.left;
  let y = e.pageY - offset.top;
  let xRelCenter = (x - $(this).width() / 2) / ($(this).width() / 2);
  let yRelCenter = (y - $(this).height() / 2) / ($(this).height() / 2);
  let maxTranslate = $(this).width() / 2 - $(".floating-card").width() / 2;
  let xTranslatePercent = xRelCenter * maxTranslate / $(this).width() * 100;
  let yTranslatePercent = yRelCenter * maxTranslate / $(this).height() * 100;
  let xShadowTranslate = (Math.round(xRelCenter * 10));
  let yShadowTranslate = (Math.round(yRelCenter * 10));
  card.style.transform = `translate(${xTranslatePercent-50}%, ${yTranslatePercent-50}%) scale(1.05)`;
  card.style.boxShadow = `${xShadowTranslate}px ${yShadowTranslate}px 20px rgba(0, 0, 0, 0.4), ${xShadowTranslate}px ${yShadowTranslate}px 16px rgba(43, 142, 255, 0.4)`;

  let brightness = 1 + 0.5 * (1 - Math.sqrt(Math.pow(xRelCenter, 2) + Math.pow(yRelCenter, 2)));
  card.style.filter = `brightness(${brightness})`;
  card.style.backdropFilter = `blur(10px)`;
});

$(".floating-card-frame").mouseleave(function () {
  card.style.transform = "translate(-50%, -50%)";
  card.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.5)";
  card.style.filter = "brightness(1) backdrop-blur(10px)";
});