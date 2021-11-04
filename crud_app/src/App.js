import React from "react";
import Navbar from "./component/layout/Navbar";
import ContactList from "./component/ContactList";
import ContactForm from "./component/ContactForm";

import "./App.css";
function App() {
  return (
    <div className="App">
      <Navbar />
      <ContactList />
      <ContactForm />
    </div>
  );
}

export default App;
