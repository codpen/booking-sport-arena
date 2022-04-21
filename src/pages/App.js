import logo from "../assets/logo.svg";
import { OutlineButton, SolidButton } from "../components/Buttons";
import { InputText } from "../components/InputText";
import "../styles/App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="flex">
          <SolidButton text="Login" link="/login" />

          <OutlineButton text="Register" link="/Register" />
          <InputText type="text" placeholder="Search" />
        </div>
      </header>
    </div>
  );
}

export default App;
