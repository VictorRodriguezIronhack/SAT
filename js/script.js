new Vivus("svg1", {
  duration: 200,
  animTimingFunction: Vivus.EASE,
  file: "../img/basic_calendar.svg",
});
new Vivus("svg2", {
  duration: 200,
  animTimingFunction: Vivus.EASE,
  file: "../img/ecommerce_ticket.svg",
});
new Vivus("svg3", {
  duration: 200,
  animTimingFunction: Vivus.EASE,
  file: "../img/basic_chronometer.svg",
});
new Vivus("svg4", {
  duration: 200,
  animTimingFunction: Vivus.EASE,
  file: "../img/basic_pin2.svg",
});

window.onload = () => setTimeout(() => fixedCTA.classList.add("visible"), 1000);
window.onscroll = () =>
  isInViewport(contact)
    ? fixedCTA.classList.remove("visible")
    : fixedCTA.classList.add("visible");

function isInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.onload = function () {
  let url = window.location.href;
  console.log(url);

  //"https://summer.ironhack.com/?referal=facebook"
  let utm_source = url.slice(37, txt.length);

  let att = document.getElementById("embed").attributes[6];
  console.log(att.value);
  att.value = `utm_source=${utm_source},utm_medium=xxxxx,utm_campaign=xxxxx,utm_term=xxxxx,utm_content=xxxxx,tag=xxxxx`;
  //Comprobación
  let check = document.getElementById("embed").attributes[6];
  console.log(check);
};
