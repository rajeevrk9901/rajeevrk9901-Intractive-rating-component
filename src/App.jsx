// import { useState } from 'react'
import './App.css'
import star from './assets/icon-star.svg'
import thankyou from './assets/illustration-thank-you.svg'

function App() {

  const Button = ({ value }) => {
    return <button className='btn-number' >{value}</button>
  }

  return (
    // <h1>hi</h1>
    <>
      {/* Global Container */}
      <div className="wrapper flex flex-col justify-center items-center min-h-screen max-w-sm m-auto ">
        {/* Local Container */}
        <div className="flex flex-col px-6 space-y-6 rounded-xl bg-gray-200 py-6">
          <img className='w-6' src={star} alt="" srcSet="" />
          {/* bg-gray-400 p-6 rounded-full */}
          <h2>How did we do?</h2>
          <p>Please let us know how we did with your <br /> support request. All feedback is appreciated <br />to help us improve our offering!</p>
          <ul className='flex space-x-4'>
            <li className=''>
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
          <button className='btn-rating uppercase text-white bg-red-800 py-2 rounded-3xl duration-150 hover:bg-red-700' type="submit">submit</button>
        </div>
      </div>
    </>
  )
}

const ThankYou = () => {
  <div className="wrapper flex flex-col justify-center items-center min-h-screen max-w-sm m-auto ">
    {/* Local Container */}
    <div className="flex flex-col px-6 space-y-6 rounded-xl bg-gray-200 py-6">
      <img className='w-6' src={thankyou} alt="" srcSet="" />
      <p>You selected Add rating here  out of 5</p>
      <h3>
        Thank you!
      </h3>
      <p> We appreciate you taking the time to give a rating. If you ever need more support,
        don’t hesitate to get in touch!</p>
    </div>
  </div>
}

export default App
