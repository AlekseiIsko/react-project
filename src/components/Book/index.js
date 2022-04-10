const Book = () => {
  return (
    <section className="book">
      <div className="container">
        <div className="book-section">
          <div>
            <h1>Book Now</h1>
            <div className="choose">
              <select name="type-cleaning" id="type">
                <option>Regularly Cleaning</option>
                <option>Deep Cleaning</option>
                <option>Office Cleaning</option>
                <option>Windows Cleaning</option>
              </select>
            </div>
            <h6>Choose available dates:</h6>
            <div className="calendar">
              <h3>March 2021</h3>
              <div className="calendar-inner">
                <button type="button" className="calendar-btn">
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <table>
                  <thead>
                    <tr>
                      <td>M</td>
                      <td>T</td>
                      <td>W</td>
                      <td>T</td>
                      <td>F</td>
                      <td>S</td>
                      <td>S</td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td>1</td>
                      <td>2</td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>4</td>
                      <td>5</td>
                      <td>6</td>
                      <td>7</td>
                      <td>8</td>
                      <td>9</td>
                    </tr>
                    <tr>
                      <td className="disabled">10</td>
                      <td className="disabled">11</td>
                      <td>12</td>
                      <td className="active">13</td>
                      <td>14</td>
                      <td>15</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td className="disabled">17</td>
                      <td>18</td>
                      <td>19</td>
                      <td>20</td>
                      <td>21</td>
                      <td>22</td>
                      <td>23</td>
                    </tr>
                    <tr>
                      <td>24</td>
                      <td>25</td>
                      <td>26</td>
                      <td>27</td>
                      <td>28</td>
                      <td>29</td>
                      <td>30</td>
                    </tr>
                    <tr>
                      <td>31</td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
                <button type="button" className="calendar-btn">
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div>
            <h6>Choose available expert and time:</h6>
            <div className="avalible-people">
              <div>
                <div className="photo">
                  <img src="img/girl1.png" alt="Girl" />
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
                  <img src="img/girl2.png" alt="Girl 2" />
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
                  <img src="img/girl3.png" alt="Grace" />
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
                  <img src="img/girl4.png" alt="Jane" />
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
        </div>
      </div>
    </section>
  );
};

export default Book;
