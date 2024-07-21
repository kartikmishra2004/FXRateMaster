import { React, useState } from 'react'
import CurrencySelect from './CurrencySelect'
import spinner from '../assets/spinner.gif'

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromValue, setFromValue] = useState('USD');
  const [toValue, setToValue] = useState('INR');
  const [result, setResult] = useState('Please enter some amount!!');
  const [isLoading, setIsLoading] = useState(false);

  const handleSwap = () => {
    setFromValue(toValue)
    setToValue(fromValue)
  }
  const handleConvert = async () => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `https://v6.exchangerate-api.com/v6/${API_KEY}/pair/${fromValue}/${toValue}`;

    setIsLoading(true);

    try {
      const response = await fetch(url)
      const data = await response.json();
      const rate = (data.conversion_rate * amount).toFixed(3);
      setResult(`${amount} ${fromValue} = ${rate} ${toValue}`)
    } catch (error) {
      console.log('error fetching api');
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="convert-background flex justify-center pt-[6rem] text-4xl text-zinc-200 bg-[#000322] lg:h-[140vh] h-[160vh] w-[100%]">

      <div className="Convertercard gap-[10px] lg:gap-0 lg:mt-[7vh] mt-[3vh] lg:w-[80vw] w-[95vw] h-[92vh] lg:h-[72vh] rounded-[30px] flex flex-col justify-evenly items-center">
        <h1 className='font-semibold lg:text-5xl text-[1.5rem] p-[15px] lg:p-0 leading-[1]'><span className='font-semibold text-[#4a57de]'>FXRateMaster</span> | get realtime exchange rates</h1>
        <div className="form">
          <form className="flex items-center lg:items-start justify-center flex-col lg:flex-row lg:gap-14 w-[100%]">
            <div className="amount">
              <label htmlFor="number-input" className="block ml-1 text-lg font-medium text-zinc-300">Amount</label>
              <input value={amount} onChange={(e) => setAmount(e.target.value)} type="number" id="number-input" aria-describedby="helper-text-explanation" className="amount-input text-zinc-200 text-lg rounded-lg h-[3rem] block w-[17rem] p-2.5" placeholder="Enter the amount" required />
            </div>
            <CurrencySelect
              label='From'
              selectedCurrency={fromValue}
              handleCurrency={(e) => setFromValue(e.target.value)} />
            <div onClick={handleSwap} className="currency-swaper relative top-[0.9rem] lg:top-6 flex justify-center items-center cursor-pointer swap w-[50px] h-[50px] rounded-[100%] text-zinc-300 rotate-90 lg:rotate-0">⇆</div>
            <CurrencySelect
              label='To'
              selectedCurrency={toValue}
              handleCurrency={(e) => setToValue(e.target.value)}
            />
          </form>
        </div>
        <button onClick={handleConvert} className={`submit get-started-btn flex justify-center cursor-pointer text-center text-zinc-200 bg-[#4a57de] hover:bg-[#363fa3] font-normal w-[110px] h-[43px] items-center rounded-lg text-lg py-2`}>{!isLoading ? 'Get rates' : <img className='mix-blend-screen invert w-[28px] opacity-60 h-[28px]' src={spinner} alt="loading" />}</button>
        <div className={`result lg:px-[3rem] p-2.5 text-zinc-300 w-max lg:rounded-[10px] rounded-[20px] h-[4rem] flex justify-center items-center text-xl ${isLoading ? 'animate-pulse' : ''}`}>
          {isLoading ? "Getting exchange rates..." : result}
        </div>
      </div>
    </div>
  )
}

export default CurrencyConverter
