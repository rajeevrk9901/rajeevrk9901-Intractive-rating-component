// import { useState } from 'react'
import './App.css'
import star from './assets/icon-star.svg'

function App() {
  // const [count, setCount] = useState()

  return (
    // <h1>hi</h1>
    <>
      {/* Global Container */}
      <div className="wrapper flex flex-col justify-center items-center min-h-screen">
        {/* Local Container */}
        <div className="flex flex-col items-center px-4 space-y-4">
          <img className='w-10' src={star} alt="" srcset="" />
          <h2>How did we do?</h2>
          <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
          <ul className='flex space-x-4'>
            <li><button>1</button></li>
            <li><button>2</button></li>
            <li><button>3</button></li>
            <li><button>4</button></li>
            <li><button>6</button></li>
          </ul>
          <button type="submit">submit</button>
        </div>
      </div>
    </>
  )
}

export default App
