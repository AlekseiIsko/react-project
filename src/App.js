import React, { createContext, useState, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Header, Main, TabMenu, TabContent, Book, Footer } from "./components";

export const TabsContext = createContext();

const firebaseConfig = {
  apiKey: "AIzaSyABlLQi0iUlVGlUe7vtsxCOF_jAGqf2J5w",
  authDomain: "project-1563f.firebaseapp.com",
  projectId: "project-1563f",
  storageBucket: "project-1563f.appspot.com",
  messagingSenderId: "46650209906",
  appId: "1:46650209906:web:223d901da797401c7df4eb",
  measurementId: "G-R62XY3T2ER"
};

// Initialize Firebase

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
  }, []);

  return (
    <div className="App">
      <section className="main">
        <div className="container">
          <Header menuState setMenuState />
          <Main />
        </div>
      </section>
      <section className="second-section">
        <TabsContext.Provider value={{ activeTab, setActiveTab }}>
          <TabMenu />
          <TabContent />
        </TabsContext.Provider>
      </section>
      <Book />
      <Footer />
    </div>
  );
};

export default App;
