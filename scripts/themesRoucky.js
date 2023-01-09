import {
  themeElectro,
  themeNormal,
  btnSpin,
  screenRulet,
  ruletBody,
  headerRoucky,
  mainRoucky,
  logoRoucky,
  listRoucky,
  lengEng,
  lengEsp,
  labelRuletValue,
  labelScreen,
  containerSettings,
} from "./elementSelect.js";

themeElectro.addEventListener("click", () => {
  themeElectro.classList.add("active");
  themeNormal.classList.remove("active");

  headerRoucky.style.backgroundColor = "#101419";
  mainRoucky.style.backgroundColor = "#0c0c0c";
  containerSettings.style.backgroundColor = "#101419";

  ruletBody.classList.add("ruletElectro");

  screenRulet.classList.add("resultScreenElectro");
  labelScreen.classList.add("labelScreenElectro");
  labelRuletValue.classList.add("valueElectro");

  logoRoucky.forEach((el) => {
    el.classList.add("logoElectro");
  });
  btnSpin.classList.add("btnSpinElectro");
  listRoucky.forEach((el) => {
    el.classList.add("listElectro");
    el.classList.replace("active", "activeElectro");
    el.dataset.electro = "on";
  });

  lengEng.addEventListener("click", () => {
    lengEsp.classList.remove("activeElectro");
  });

  lengEsp.addEventListener("click", () => {
    lengEng.classList.remove("activeElectro");
  });
});

themeNormal.addEventListener("click", () => {
  listRoucky.forEach((el) => {
    el.classList.remove("listElectro");
    el.classList.replace("activeElectro", "active");
    el.dataset.electro = "off";
  });

  themeNormal.classList.replace("activeElectro", "active");
  themeElectro.classList.replace("activeElectro", "active");
  themeElectro.classList.remove("active");

  screenRulet.classList.remove("resultScreenElectro");
  labelScreen.classList.remove("labelScreenElectro");
  labelRuletValue.classList.remove("valueElectro");

  headerRoucky.style.backgroundColor = "#00cfc1";
  mainRoucky.style.backgroundColor = "#ffefe8";
  containerSettings.style.backgroundColor = "#00cfc1";
  ruletBody.classList.remove("ruletElectro");

  btnSpin.classList.remove("btnSpinElectro");

  logoRoucky.forEach((el) => {
    el.classList.remove("logoElectro");
  });
});

listRoucky.forEach((el) => {
  el.addEventListener("click", (e) => {
    if (e.target.dataset.electro === "on") el.classList.add("activeElectro");
    el.classList.replace("active", "activeElectro");
    if (e.target.dataset.electro === "off") {
      themeNormal.classList.add("active");
    }
  });
});
