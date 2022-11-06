import { useState } from 'react'
import './App.css'
import star from './assets/icon-star.svg'
import thankyou from './assets/illustration-thank-you.svg'

function App() {

  const [issubmitted, setIssubmitted] = useState(false)
  const [rating, setRating] = useState("")

  const Button = ({ value }) => {
    return <button className='btn-number w-10 h-10' onClick={() => { setRating(value), console.log(value) }}  >{value}</button>
  }

  return (
    // <h1>hi</h1>
    <>
      {!issubmitted &&
        <div div className="wrapper flex flex-col justify-center items-center min-h-screen  max-w-sm m-auto ">

          <div className="flex flex-col px-6 space-y-6 rounded-xl bg-gray-200 py-6">
            <img className='w-6' src={star} alt="" srcSet="" />

            <h2>How did we do?</h2>
            <p>Please let us know how we did with your <br /> support request. All feedback is appreciated <br />to help us improve our offering!</p>
            <ul className='flex space-x-4'>
              <li>
                <Button value={1} />
              </li>
              <li>
                <Button value={2} />
              </li>
              <li>
                <Button value={3} />
              </li>
              <li>
                <Button value={4} />
              </li>
              <li>
                <Button value={5} />
              </li>
            </ul>
            <button onClick={() => setIssubmitted(true)} className='btn-rating uppercase text-white bg-red-800 py-2 rounded-3xl duration-150 hover:bg-red-700' type="submit">submit</button>
          </div>
        </div>}
      {issubmitted && <ThankYou rating={rating} setIssubmitted={setIssubmitted} />}
    </>
  )
}

const ThankYou = ({ rating, setIssubmitted }) => {
  return (
    <div className=" flex flex-col min-h-screen justify-center items-center max-w-sm m-auto ">
      {/* Local Container */}
      <div className="flex flex-col px-6 space-y-6 rounded-xl bg-gray-200 py-6 justify-center mx-3 items-center">
        <img className='w-28' src={thankyou} alt="" srcSet="" />
        <p className='bg-gray-300 px-6 py-0.5 rounded-xl text-red-500 text-sm'>You selected {rating} out of 5</p>
        <h3>
          Thank you!
        </h3>
        <p> We appreciate you taking the time to give a rating. If you ever need more support,
          don’t hesitate to get in touch!</p>
        <button onClick={() => setIssubmitted(false)} className='w-full text-center text-white bg-red-800 py-2 rounded-3xl duration-150 hover:bg-red-700' type="submit">Rate Again!</button>
      </div>
    </div>
  )
}

export default App
