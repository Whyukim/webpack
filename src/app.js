import axios from "axios";
import form from "./form";
import result from "./result";

import "./app.css";
// import nyancat from "./nyancat.jpg";
let resultEl;
let formEl;

document.addEventListener("DOMContentLoaded", async () => {
  formEl = document.createElement("div");
  formEl.innerHTML = form.render();
  document.body.appendChild(formEl);

  resultEl = document.createElement("div");
  resultEl.innerHTML = await result.render();
  document.body.appendChild(resultEl);
});

if (module.hot) {
  console.log("핫 모듈");

  module.hot.accept("./result", async () => {
    console.log("result 변경");
    resultEl.innerHTML = await result.render();
  });

  module.hot.accept("./form", async () => {
    console.log("form 변경");
    formEl.innerHTML = form.render();
  });
}
console.log(process.env.NODE_ENV);
console.log("app.js");
