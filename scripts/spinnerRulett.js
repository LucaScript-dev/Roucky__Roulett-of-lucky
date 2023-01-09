import {
  btnSpin,
  ruletBody,
  ruletValues,
  screenRulet,
  labelRuletValue,
  btnSetting,
  containerSettings,
} from "./elementSelect.js";

btnSpin.addEventListener("click", (e) => {
  const btnValue = e.target.dataset.spinnerAction;
  const lengActive = e.target.dataset.lengDefault;

  if (btnValue === "spin") {
    const ramdonDeg = Math.random() * 2000;
    ruletBody.style.transform = `rotate(${ramdonDeg}deg)`;
    if (lengActive === "on") btnSpin.textContent = "Retry";
    if (lengActive === "off") btnSpin.textContent = "Otra!";
    btnSpin.dataset.spinnerAction = "retry";

    let arrValues = [];
    setTimeout(() => {
      ruletValues.forEach((el) => {
        const PositionValues = el.getBoundingClientRect().y;
        arrValues.push(PositionValues);
      });
      const indexValue = arrValues.findIndex(
        (el) => el === Math.min(...arrValues)
      );

      labelRuletValue.textContent = ruletValues[indexValue].textContent;

      screenRulet.style.visibility = "visible";
      screenRulet.style.opacity = "1";
    }, 2500);
  }
  if (btnValue === "retry") {
    if (lengActive === "on") btnSpin.textContent = "Spin!";
    if (lengActive === "off") btnSpin.textContent = "Gira!";
    ruletBody.style.transform = "rotate(0deg)";
    btnSpin.dataset.spinnerAction = "spin";

    screenRulet.style.opacity = "0";
    screenRulet.style.visibility = "hidden";
  }
});

// btn nav active

btnSetting.addEventListener("click", () => {
  containerSettings.classList.toggle("active-nav");
});
