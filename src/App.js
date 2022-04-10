import React, { createContext, useState } from "react";
import { Header, Main, TabMenu, TabContent, Book, Footer } from "./components";

export const TabsContext = createContext();

const App = () => {
  const [activeTab, setActiveTab] = useState(0);

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
