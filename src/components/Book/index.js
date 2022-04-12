import React from "react";
import List from "./components/List";
import Choose from "./components/Choose";
import Calendar from "./components/Calendar";

const Book = () => {
  return (
    <section className="book" id="#book">
      <div className="container">
        <div className="book-section">
          <div>
            <h1>Book Now</h1>
            <Choose />
            <h6>Choose available dates:</h6>
            <Calendar />
          </div>
          <List />
        </div>
      </div>
    </section>
  );
};

export default Book;
