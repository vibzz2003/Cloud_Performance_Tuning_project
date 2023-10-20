import React from 'react'
import img1 from "../../media/1.png"
import "./time.scss"

export const Time = () => {
  return (
    <div className='time'>
        <div className='card'>
            <div className='left'>

                <p>Specify your <b>TIME</b> for today</p>
                <span>Note*: Maximum limit is of 30 minutes a day</span>

            </div>
            <div className='right'>

                <img src={img1} alt="logo" />
                <h1>Specify TIME</h1>
                <form>
                    <input type="number" name="time" id="time" min="0" max="30" />
                    <button>Submit</button>
                </form>
            </div>
        </div>
    </div>
  )
}
