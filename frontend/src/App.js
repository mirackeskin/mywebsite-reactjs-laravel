import React from "react"
import '../src/App.css'
import { LoginContextProvider } from "./contexts/auth/LoginContext";
import Navigations from "./navigations/Navigations";


function App() {
  return (
    <div className="App">
      <LoginContextProvider>
          <Navigations></Navigations>
      </LoginContextProvider>
    </div>
  );
}

export default App;
