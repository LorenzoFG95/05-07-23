import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./App.scss";
import { Button } from "./components/buttons";
import {
  InputText,
  InputPassword,
  InputToggle,
  InputSelect,
  DropdownSelect,
} from "./components/form";
import Badge from "./components/badges";
import useSound from "use-sound";

function App() {
  const [inputTextValue, setInputTextValue] = useState();
  const [inputPasswordValue, setInputPasswordValue] = useState();
  const [inputSelectValue, setInputSelectValue] = useState();
  const [inputDropdownValue, setInpuDropdownValue] = useState();
  const options = {
    name: "products",
    id: "products",
    options: [
      {
        id: 1,
        label: "Apples",
        value: "apples",
      },
      {
        id: 2,
        label: "Bananas",
        value: "bananas",
      },
      {
        id: 3,
        label: "Coconut",
        value: "coconut",
      },
    ],
  };
  return (
    <>
      <InputText
        id={"name"}
        name="name"
        placeholder="Your name"
        label={"name"}
        // disabled
        // error
        errorMessage={"Inserisci il tuo nome"}
        handleChange={setInputTextValue}
      />
      <InputPassword
        id={"password"}
        name="password"
        placeholder="Your password"
        label={"password"}
        // error
        // errorMessage={"Inserisci la tua password"}
        handleChange={setInputPasswordValue}
      />
      <InputSelect
        options={options}
        defaultValue={options?.options[0]?.value}
        handleChange={setInputSelectValue}
      />
      <DropdownSelect options={options} handleChange={setInpuDropdownValue} />
      {/* <InputSelect options={options} default /> */}
      {/* <h2>Buttons (con suono)</h2>
      <div className="container">
        <Button label="Click me" pill size={"xl"} />
        <Button label="Click me" pill />
        <Button label="Click me" pill size={"xs"} />
        <Button label="Click me" pill outline size={"xl"} />
        <Button label="Click me" pill outline />
        <Button label="Click me" pill outline size={"xs"} />
        <Button label="Click me" pill icon size={"xl"} />
        <Button label="Click me" pill icon />
        <Button label="Click me" pill icon size={"xs"} />
        <Button label="Click me" pill icon outline size={"xl"} />
        <Button label="Click me" pill icon outline />
        <Button label="Click me" pill icon outline size={"xs"} />
        <Button label="Click me" pill icon iconLeft size={"xl"} />
        <Button label="Click me" pill icon iconLeft />
        <Button label="Click me" pill icon iconLeft size={"xs"} />
        <Button label="Click me" pill icon iconLeft outline size={"xl"} />
        <Button label="Click me" pill icon iconLeft outline />
        <Button label="Click me" pill icon iconLeft outline size={"xs"} />
        <Button label="Click me" pill square icon size={"xs"} />
        <Button label="Click me" pill square icon outline size={"xs"} />
        <Button label="Click me" pill text1 icon outline size={"xl"} />
        <Button label="Click me" pill text1 icon outline />
        <Button label="Click me" pill text1 icon outline size={"xs"} />
        <Button label="Click me" pill />
        <Button label="Click me" rounded />
        <Button label="Click me" />
      </div>
      <h2>Badges</h2>
      <div className="container">
        <Badge />
        <Badge close />
        <Badge fill />
        <Badge fill close />
      </div>
      <h2>Inputs</h2>
      <div className="container">
        <InputToggle />
      </div> */}

      {/* <div className="container">
        <div className="row">
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
        </div>
        <div className="row">
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
          <div className="col-2">col2</div>
        </div>
        <div className="row">
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
        </div>
        <div className="row">
          <div className="col-4">col4</div>
          <div className="col-4">col4</div>
          <div className="col-4">col4</div>
        </div>
        <div className="row">
          <div className="col-5">col5</div>
          <div className="col-7">col7</div>
        </div>
        <div className="row">
          <div className="col-12">col12</div>
        </div>
        <div className="row">
          <div className="col-3">col3</div>
          <div className="col-3">col3</div>
          <div className="col-6">col6</div>
        </div>
        <div className="row space-between">
          <div className="col-1">col1</div>
          <div className="col-1">col1</div>
        </div>
        <div className="row">
          <div className="col-4">col4</div>
          <div className="col-8">col8</div>
        </div>
        <div className="row">
          <div className="col-xs-1">Col-xs-1</div>
        </div>

        <hr />
        <hr />
        <hr />
        <hr />
        <div className="row">
          <div className="col-xs-6 col-sm-2 col-md-4">A</div>
          <div className="col-xs-6 col-sm-6 col-md-4">B</div>
          <div className="col-xs-12 col-sm-4 col-md-4">C</div>
        </div>

        <div className="row-g">
          <div className="col-g-1">A</div>
          <div className="col-g-1">B</div>
        </div>
      </div> */}
    </>
  );
}

export default App;
