import "./App.scss";
import MobileMockup from "./components/MobileMockup";
import Header from "./components/Header";

function App() {
  return (
    <main className="container">
      <MobileMockup className="mockup" />
      <Header />
    </main>
  );
}

export default App;
