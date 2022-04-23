import React, {useState, useEffect, createContext} from "react";
import { getAuth, signOut } from "firebase/auth";
import { useAuthState } from "./firebase";
import { Header, Main, TabMenu, TabContent, Book, Footer } from "./components";

export const TabsContext = createContext();

const Home = () => {
  const { user } = useAuthState();
  const [activeTab, setActiveTab] = useState(0);

//   useEffect(() => {
//     const app = initializeApp(firebaseConfig);
//     const auth = getAuth(app);
//     const db = getFirestore(app);
//     const analytics = getAnalytics(app);
//   }, []);

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

export default Home;
