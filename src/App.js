import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer>
          This project was coded by{" "}
          <a
            href="https://classy-semolina-bd4086.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            title="Alina`s Portfolio Site"
          >
            Alina Smahliuk
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/SmahliukAlina/weather-react-1.0"
            target="_blank"
            rel="noreferrer noopener"
            title="Project on GitHub"
          >
            open-sourced
          </a>
        </footer>
      </div>
    </div>
  );
}
