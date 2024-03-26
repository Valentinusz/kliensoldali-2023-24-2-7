import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import RandomColorDiv from "./RandomColorDiv";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <RandomColorDiv>aaasdaasds</RandomColorDiv>
    <RandomColorDiv>aaasdaassssssds</RandomColorDiv>
  </React.StrictMode>
);
