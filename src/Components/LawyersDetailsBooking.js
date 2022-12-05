import React from 'react'

const LawyersDetailsBooking = () => {
  return (
    <div className='lawyersDetailsBooking'>
      <div className="lawyersDetailsBooking--text">
        <p>Faites votre réservation</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit</p>
      </div>
      <div className="lawyersDetailsBooking--book">
        <form className='lawyersDetailsBooking--book_form'>
          <div className="lawyersDetailsBooking--book_date">
            <label htmlFor="date">Date</label>
            <input id="date" name="date" placeholder="Date" type="date" className="input--custom" />
          </div>
          <div className="lawyersDetailsBooking--book_subject">
            <label htmlFor="subject">Sujet</label>
            <input id="subject" name="subject" placeholder="Sujet" type="text" className="input--custom" />
          </div>
          <div className="lawyersDetailsBooking--book_subject">
            <label htmlFor="message">Message</label>
            <textarea cols="30" rows="10" id="message" name="message" placeholder="Message" type="text" className="input--custom" />
          </div>
          <div className="lawyersDetailsBooking--book_btn">
            <button className="btn--costum btn--costum_hover">
                réservez-vous
            </button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default LawyersDetailsBooking