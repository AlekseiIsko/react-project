import React, { useState, useEffect } from "react";
import "./style.css";

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const getAllDaysInMonth = (year, month) => {
  const date = new Date(year, month, 1);

  const dates = [];

  while (date.getMonth() === month) {
    dates.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }

  return dates;
};

const getCalendarDates = (year, month) => {
  const daysInMonth = getAllDaysInMonth(year, month);
  const emptyAtStart = daysInMonth[0].getDay();
  const emptyAtEnd = 7 - daysInMonth[daysInMonth.length - 1].getDay();
  let calendarDates = [[]];

  for (let index = 0; index < emptyAtStart; index++) {
    calendarDates[0].push("");
  }

  let loopCount = emptyAtStart;
  daysInMonth.forEach((day) => {
    if (loopCount === 7) {
      calendarDates[calendarDates.length] = [];
      loopCount = 0;
    }

    const currentArray = calendarDates[calendarDates.length - 1];
    currentArray.push(day.getDate());
    loopCount++;
  });

  for (let index = 0; index < emptyAtEnd; index++) {
    calendarDates[calendarDates.length - 1].push("");
  }

  return calendarDates;
};

const Calendar = () => {
  const currentDate = new Date();
  currentDate.setHours(0);
  currentDate.setMinutes(0);
  currentDate.setSeconds(0);
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [calendarDates, setCalendarDates] = useState([]);
  const [activeCalendarDay, setActiveCalendarDay] = useState(currentDate);

  useEffect(() => {
    setCalendarDates(getCalendarDates(currentYear, currentMonth));
  }, []);

  useEffect(() => {
    setCalendarDates(getCalendarDates(year, month));
  }, [month]);

  const onChangeMonth = (isNext) => {
    if (isNext) {
      if (month === 11) {
        setMonth(0);
        setYear(year + 1);
      } else {
        setMonth(month + 1);
      }
    } else {
      if (month === 0) {
        setMonth(11);
        setYear(year - 1);
      } else {
        setMonth(month - 1);
      }
    }
  };

  const isPrevDay = (day) => {
    const date = new Date(year, month, day + 1);
    return date.getTime() <= currentDate.getTime();
  };

  const isActiveDay = (day) => {
    return (
      activeCalendarDay.getDate() === day &&
      activeCalendarDay.getMonth() === month &&
      activeCalendarDay.getFullYear() === year
    );
  };

  const onDateClick = (day) => {
    if (day !== "" && !isPrevDay(day) && !isActiveDay(day)) {
      const newActiveDate = new Date(year, month, day);
      setActiveCalendarDay(newActiveDate);
    }
  };

  const isDisabled = (day) => {
    return day === "" || isPrevDay(day);
  };

  return (
    <div className="calendar">
      <h3>
        {months[month]} {year}
      </h3>
      <div className="calendar-inner">
        <button
          type="button"
          className="calendar-btn"
          disabled={month === currentMonth && currentYear === year}
          onClick={() => onChangeMonth(false)}
        >
          <i className="fa-solid fa-angle-left"></i>
        </button>
        <table>
          <thead>
            <tr>
              <td>S</td>
              <td>M</td>
              <td>T</td>
              <td>W</td>
              <td>T</td>
              <td>F</td>
              <td>S</td>
            </tr>
          </thead>
          <tbody>
            {calendarDates.map((row, index) => {
              return (
                <tr key={index}>
                  {row.map((day, dayIndex) => {
                    let styleClass = "";
                    if (isDisabled(day)) {
                      styleClass = "disabled";
                    }
                    if (isActiveDay(day)) {
                      styleClass = "active";
                    }
                    return (
                      <td
                        key={dayIndex}
                        className={styleClass}
                        onClick={() => onDateClick(day)}
                      >
                        {day}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
        <button
          type="button"
          className="calendar-btn"
          onClick={() => onChangeMonth(true)}
        >
          <i className="fa-solid fa-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Calendar;
