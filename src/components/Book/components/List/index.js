import React from "react";

const List = () => {
  return (
    <div>
      <h6>Choose available expert and time:</h6>
      <div className="avalible-people">
        <div>
          <div className="photo">
            <img src="img/girl1.png" alt="photo" />
          </div>
          <div className="name">
            <h3>Albina</h3>
            <p>Deep Cleaning Expert</p>
            <div className="rating">
              Rating <span>4.3</span>
            </div>
          </div>
          <div className="time">
            <ul>
              <li>
                <span>09:00</span>
              </li>
              <li>
                <span>12:00</span>
              </li>
              <li>
                <span>15:00</span>
              </li>
              <li>
                <span>17:00</span>
              </li>
            </ul>
            <p>
              $<strong>50</strong> per service
            </p>
          </div>
        </div>
        <div>
          <div className="photo">
            <img src="img/girl2.png" alt="photo" />
          </div>
          <div className="name">
            <h3>Kristina</h3>
            <p>Window Cleaning Expert</p>
            <div className="rating">
              Rating <span>5.0</span>
            </div>
          </div>
          <div className="time">
            <ul>
              <li>
                <span>09:00</span>
              </li>
              <li>
                <span>12:00</span>
              </li>
              <li>
                <span>15:00</span>
              </li>
              <li>
                <span>17:00</span>
              </li>
            </ul>
            <p>
              $<strong>50</strong> per service
            </p>
          </div>
        </div>
        <div>
          <div className="photo">
            <img src="img/girl3.png" alt="photo" />
          </div>
          <div className="name">
            <h3>Grace</h3>
            <p>Regular Cleaning Expert</p>
            <div className="rating">
              Rating <span>2.1</span>
            </div>
          </div>
          <div className="time">
            <ul>
              <li>
                <span>09:00</span>
              </li>
              <li>
                <span>12:00</span>
              </li>
              <li>
                <span>15:00</span>
              </li>
              <li>
                <span>17:00</span>
              </li>
            </ul>
            <p>
              $<strong>50</strong> per service
            </p>
          </div>
        </div>
        <div>
          <div className="photo">
            <img src="img/girl4.png" alt="photo" />
          </div>
          <div className="name">
            <h3>Jane</h3>
            <p>Office Cleaning Expert</p>
            <div className="rating">
              Rating <span>3.9</span>
            </div>
          </div>
          <div className="time">
            <ul>
              <li>
                <span>09:00</span>
              </li>
              <li>
                <span>12:00</span>
              </li>
              <li>
                <span>15:00</span>
              </li>
              <li>
                <span>17:00</span>
              </li>
            </ul>
            <p>
              $<strong>50</strong> per service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
