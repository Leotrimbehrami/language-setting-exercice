import "./App.css";
import {  LanguageProvider } from "./Context";
import Header from "./components/Header";
import Content from "./components/Content";

function App() {
  return(
    <LanguageProvider>
      <Header />
      <Content />

    </LanguageProvider>
  )
}

export default App;
