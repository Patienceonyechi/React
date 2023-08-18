import React from "react";
import Header from "./Component/Header";
import GlobalStyle from "./Component/GlobalStyle";
import LandPage from "./Component/LandingPage";
import Footer from "./Component/Footer";


const App: React.FC = () => {
  return (
    <div>
      <GlobalStyle />
      <Header />
      <LandPage />
      <Footer />
      
    </div>
  );
};

export default App;
