import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Search from "./Search";

import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <div>
        <h1>Weather Search</h1>
        <p>
          Enter City <Search />
        </p>
    </div>
    </div>


  </StrictMode>
);
