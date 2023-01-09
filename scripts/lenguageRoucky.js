import {
  lengEng,
  lengEsp,
  labelLenguage,
  labelScreen,
  labelSetting,
  labelTheme,
  btnSpin,
} from "./elementSelect.js";

lengEng.addEventListener("click", () => {
  lengEng.classList.add("active");
  lengEsp.classList.remove("active");

  lengEng.textContent = "English";
  lengEsp.textContent = "Spanish";
  labelLenguage.textContent = "Lenguage";
  labelSetting.textContent = "Settings";
  labelScreen.textContent = "Result";
  labelTheme.textContent = "Themes";

  btnSpin.textContent = "Spin!";
  btnSpin.dataset.lengDefault = "on";
});

lengEsp.addEventListener("click", () => {
  lengEsp.classList.add("active");
  lengEng.classList.remove("active");

  lengEng.textContent = "Inglés";
  lengEsp.textContent = "Español";
  labelLenguage.textContent = "Idioma";
  labelSetting.textContent = "Ajustes";
  labelScreen.textContent = "Resultado";
  labelTheme.textContent = "Temas";

  btnSpin.textContent = "Gira!";
  btnSpin.dataset.lengDefault = "off";
});
