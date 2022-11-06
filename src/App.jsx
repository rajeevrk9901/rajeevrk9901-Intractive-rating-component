// import { useState } from 'react'
import './App.css'
import star from './assets/icon-star.svg'

function App() {
  // const [count, setCount] = useState()

  return (
    // <h1>hi</h1>
    <>
      <div className="wrapper flex flex-col gap-2">
        <img className='w-10' src={star} alt="" srcset="" />
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
        <ul>
          <li><button>1</button></li>
          <li><button>2</button></li>
          <li><button>3</button></li>
          <li><button>4</button></li>
          <li><button>5</button></li>
        </ul>
      </div>
    </>
  )
}

export default App
