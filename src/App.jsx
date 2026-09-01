import "./App.css";
import Mockup from "./components/Mockup";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="page">
        <Mockup />
        <div className="page__content">
          <h1 className="page__header">Simple booking</h1>
          <p className="page__description">
            Stay in touch with our dog walkers through the chat interface. This
            makes it easy to discuss arrangements and make bookings. Once the
            walk has been completed you can rate your walker and book again all
            through the chat.
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
