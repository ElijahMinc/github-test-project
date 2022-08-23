import React from "react";
import { AppContext } from "../../context/AppContext";
import { AppRouter } from "../Common/AppRouter/AppRouter";
import { Toast } from "../Common/Toast/Toast";

const App = () => {
  return (
    <div className="container">
      <AppContext>
        <AppRouter />
        <Toast />
      </AppContext>
    </div>
  );
};

export default App;
