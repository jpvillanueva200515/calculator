import './App.css';

function CalcDisplay({ dispValue }) {
  return <div className="CalcDisplay">{dispValue}</div>;
}

function CalcButton({ label, buttonClassName = "CalcButton", onClick }) {
  return (
    <button className={buttonClassName} onClick={onClick}>
      {label}
    </button>
  );
}

function App() {
  const [disp, setDisp] = useState(0);

  const onClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;
    setDisp(value);
  };

  return (
    <div className="App">
      <div className="Header">
        Calculator of Arzy Klein Espiritu - DA3A
      </div>
      <div className="Calculator">
        <CalcDisplay dispValue={disp} />
        <div className="CalcGrid">
          <CalcButton label={"7"} onClick={onClickHandler} />
          <CalcButton label={"8"} onClick={onClickHandler} />
          <CalcButton label={"9"} onClick={onClickHandler} />
          <CalcButton label={"÷"} onClick={onClickHandler} />
          <CalcButton label={"4"} onClick={onClickHandler} />
          <CalcButton label={"5"} onClick={onClickHandler} />
          <CalcButton label={"6"} onClick={onClickHandler} />
          <CalcButton label={"X"} onClick={onClickHandler} />
          <CalcButton label={"1"} onClick={onClickHandler} />
          <CalcButton label={"2"} onClick={onClickHandler} />
          <CalcButton label={"3"} onClick={onClickHandler} />
          <CalcButton label={"-"} onClick={onClickHandler} />
          <CalcButton label={"CLR"} buttonClassName="ClearButton" onClick={onClickHandler} />
          <CalcButton label={"0"} onClick={onClickHandler} />
          <CalcButton label={"+"} onClick={onClickHandler} />
          <CalcButton label={"="} onClick={onClickHandler} />
        </div>
      </div>
    </div>
  );
}

export default App;