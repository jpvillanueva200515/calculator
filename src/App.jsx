import { useState } from 'react'

function CalcDisplay({ dispValue }) {
  return (
    <div className='CalcDisplay'>
      {dispValue}
    </div>
  )
}

function CalcButton({ label, onClick, buttonClassName = '' }) {
  return (
    <button
      className={`CalcButton ${buttonClassName}`}
      onClick={() => onClick(label)}
    >
      {label}
    </button>
  )
}

function App() {
  const [disp, setDisp] = useState('0')
  const [firstNumber, setFirstNumber] = useState(null)
  const [operator, setOperator] = useState(null)
  const [waitingForNumber, setWaitingForNumber] = useState(false)

  const onClickHandler = (value) => {
    // Numbers
    if (!isNaN(value)) {
      if (waitingForNumber) {
        setDisp(value)
        setWaitingForNumber(false)
      } else {
        setDisp(disp === '0' ? value : disp + value)
      }
      return
    }

    // Clear
    if (value === 'CLR') {
      setDisp('0')
      setFirstNumber(null)
      setOperator(null)
      setWaitingForNumber(false)
      return
    }

    // Equals
    if (value === '=') {
      if (firstNumber === null || operator === null) {
        return
      }

      const secondNumber = Number(disp)
      let result

      if (operator === '+') {
        result = firstNumber + secondNumber
      } else if (operator === '-') {
        result = firstNumber - secondNumber
      } else if (operator === 'X') {
        result = firstNumber * secondNumber
      } else if (operator === '÷') {
        result = secondNumber === 0 ? 'Error' : firstNumber / secondNumber
      }

      setDisp(String(result))
      setFirstNumber(null)
      setOperator(null)
      setWaitingForNumber(true)
      return
    }

    // Operators
    if (['+', '-', 'X', '÷'].includes(value)) {
      setFirstNumber(Number(disp))
      setOperator(value)
      setWaitingForNumber(true)
    }
  }

  return (
    <div className='App'>
      <div className='Header'>
        Calculator of Juan Paulo Villanueva - IT 3ADA
      </div>

      <div className='Calculator'>
        <CalcDisplay dispValue={disp} />

        <div className='CalcButtons'>
          <CalcButton label={'7'} onClick={onClickHandler} />
          <CalcButton label={'8'} onClick={onClickHandler} />
          <CalcButton label={'9'} onClick={onClickHandler} />
          <CalcButton label={'÷'} onClick={onClickHandler} />

          <CalcButton label={'4'} onClick={onClickHandler} />
          <CalcButton label={'5'} onClick={onClickHandler} />
          <CalcButton label={'6'} onClick={onClickHandler} />
          <CalcButton label={'X'} onClick={onClickHandler} />

          <CalcButton label={'1'} onClick={onClickHandler} />
          <CalcButton label={'2'} onClick={onClickHandler} />
          <CalcButton label={'3'} onClick={onClickHandler} />
          <CalcButton label={'-'} onClick={onClickHandler} />

          <CalcButton
            label={'CLR'}
            buttonClassName={'ClearButton'}
            onClick={onClickHandler}
          />

          <CalcButton label={'0'} onClick={onClickHandler} />
          <CalcButton label={'='} onClick={onClickHandler} />
          <CalcButton label={'+'} onClick={onClickHandler} />
        </div>
      </div>
    </div>
  )
}

export default App