import Calendar from '../server/lib/calendar';
import { useState, useEffect } from 'react';
import moment from 'moment';
const week = ['Sunday', 'Monday', 'Tuesday', 'Wenesday', 'Thursday', 'Friday', 'Saturday'];
const calendar = new Calendar(new Date().toISOString());

const Index = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date().toISOString());

  useEffect(() => {});

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
              <button disabled={!d.currentMonth} type="button" className="btn btn-outline-secondary">
                {moment(d.date).format('DD')} <span className="badge badge-light">10am</span>
              </button>
              {(k + 1) % 7 == 0 ? <br /> : null}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Index;
