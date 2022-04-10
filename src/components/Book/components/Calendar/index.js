const Calendar = () => {
  return (
    <div classNameName="calendar">
      <h3>March 2021</h3>
      <div classNameName="calendar-inner">
        <button type="button" classNameName="calendar-btn">
          <i classNameName="fa-solid fa-angle-left"></i>
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
              <td classNameName="disabled">10</td>
              <td classNameName="disabled">11</td>
              <td>12</td>
              <td classNameName="active">13</td>
              <td>14</td>
              <td>15</td>
              <td>16</td>
            </tr>
            <tr>
              <td classNameName="disabled">17</td>
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
        <button type="button" classNameName="calendar-btn">
          <i classNameName="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Calendar;
