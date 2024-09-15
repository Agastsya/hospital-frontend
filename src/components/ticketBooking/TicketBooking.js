// TicketBooking.js
import React, { useState } from "react";
import "./TicketBooking.css"; // Import the CSS file for styles

const TicketBooking = () => {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [ticketCount, setTicketCount] = useState(0);

  const toggleSeat = (id, isBooked) => {
    if (isBooked) return; // Do nothing if the seat is booked

    setSelectedSeats((prevSeats) => {
      const newSeats = [...prevSeats];
      if (newSeats.includes(id)) {
        newSeats.splice(newSeats.indexOf(id), 1);
        setTicketCount((prevCount) => prevCount - 1);
        setTotalAmount((prevAmount) => prevAmount - 200);
      } else {
        newSeats.push(id);
        setTicketCount((prevCount) => prevCount + 1);
        setTotalAmount((prevAmount) => prevAmount + 200);
      }
      return newSeats;
    });
  };

  const renderSeats = () => {
    const seats = [];
    for (let i = 1; i <= 59; i++) {
      const isBooked = Math.random() < 0.5; // Randomly book some seats
      seats.push(
        <input
          type="checkbox"
          name="tickets"
          id={`s${i + 1}`}
          key={i}
          disabled={isBooked}
          onChange={() => toggleSeat(i + 1, isBooked)}
        />
      );
      seats.push(
        <label
          htmlFor={`s${i + 1}`}
          className={`seat ${isBooked ? "booked" : ""}`}
          key={`label-${i}`}
        ></label>
      );
    }
    return seats;
  };

  return (
    <div className="center">
      <div className="tickets">
        <div className="ticket-selector">
          <div className="head">
            <div className="title">Movie Name</div>
          </div>
          <div className="seats">
            <div className="status">
              <div className="item">Available</div>
              <div className="item">Booked</div>
              <div className="item">Selected</div>
            </div>
            <div className="all-seats">{renderSeats()}</div>
          </div>
          <div className="timings">
            <div className="dates">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, index) => (
                  <React.Fragment key={index}>
                    <input
                      type="radio"
                      name="date"
                      id={`d${index + 1}`}
                      defaultChecked={index === 0}
                    />
                    <label htmlFor={`d${index + 1}`} className="dates-item">
                      <div className="day">{day}</div>
                      <div className="date">{index + 11}</div>
                    </label>
                  </React.Fragment>
                )
              )}
            </div>
            <div className="times">
              {["11:00", "14:30", "18:00", "21:30"].map((time, index) => (
                <React.Fragment key={index}>
                  <input
                    type="radio"
                    name="time"
                    id={`t${index + 1}`}
                    defaultChecked={index === 0}
                  />
                  <label htmlFor={`t${index + 1}`} className="time">
                    {time}
                  </label>
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
        <div className="price">
          <div className="total">
            <span>
              <span className="count">{ticketCount}</span> Tickets
            </span>
            <div className="amount">{totalAmount}</div>
          </div>
          <button type="button">Book</button>
        </div>
      </div>
    </div>
  );
};

export default TicketBooking;
