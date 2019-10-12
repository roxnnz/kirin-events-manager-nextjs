import Calendar from '../server/lib/calendar';
import { useState } from 'react';
import Link from 'next/link';
const week = ['Sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday'];
const calendar = new Calendar(new Date().toISOString());

const CalendarView = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().toISOString());

  const getCurrentMonth = () => {
    return calendar.getCurrentMonth(currentMonth);
  };
  const getCurrentYear = () => {
    return calendar.getCurrentYear(currentMonth);
  };
  const handlePrevMonth = () => {
    setCurrentMonth(calendar.prevMonth(currentMonth));
  };
  const handleNextMonth = () => {
    setCurrentMonth(calendar.nextMonth(currentMonth));
  };
  const getCurrentMonthCalendar = () => {
    return calendar.getCurrentMonthCalendar(currentMonth);
  };
  const getDateByDateString = (date: string) => {
    const day = new Date(date);
    return day.getDate();
  };
  return (
    <div>
      <button onClick={handlePrevMonth}>{'<'}</button>
      <span>
        {getCurrentMonth()} - {getCurrentYear()}
      </span>
      <button onClick={handleNextMonth}>{'>'}</button>

      <div>
        {week.map((day: string, k: number) => {
          return (
            <span className="badge badge-info" key={k}>
              <h5>{day}</h5>
            </span>
          );
        })}
      </div>

      <div>
        {getCurrentMonthCalendar().map((d: any, k: number) => {
          return (
            <span key={k}>
              <Link href={`/event/info?date=${d.date}`}>
                <button
                  style={{ width: 90 }}
                  disabled={!d.currentMonth}
                  type="button"
                  className="btn btn-outline-secondary"
                >
                  {getDateByDateString(d.date)} <span className="badge badge-light">10am</span>
                </button>
              </Link>
              {(k + 1) % 7 == 0 ? <br /> : null}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarView;
