import "./main.css";
import cls from "./App.module.css";
import { Header } from "./widgets/Header";
import { Footer } from "./widgets/Footer";
import { Content } from "./widgets/Content";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Footer />
    </>
  );
}

export default App;
