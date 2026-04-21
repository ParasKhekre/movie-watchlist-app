import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import StarRating from "./StarRating";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <Test /> */}
  </StrictMode>,
);

function Test() {
  const [movieRating, setMovieRating] = useState(0);

  return (
    <>
      <StarRating
        maxRating={5}
        className="test"
        defaultRating={3}
        onSetRating={setMovieRating}
      />
      <p>You rated {movieRating} stars</p>
    </>
  );
}
