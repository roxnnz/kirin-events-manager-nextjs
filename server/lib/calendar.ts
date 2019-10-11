import moment from 'moment';

interface ICalendar {
  currentDate: string;
  getCurrentYear: (currentMonth: string) => string;
  getCurrentMonthCalendar: (currentMonth: string) => any;
}

class Calendar implements ICalendar {
  currentDate: string;

  constructor(currentDate: string = '') {
    this.currentDate = currentDate;
  }

  private prevMonthDays(currentMonth: string) {
    let prevMonthDays = [];

    for (
      let i = 0;
      i <
      Number(
        moment(currentMonth)
          .startOf('month')
          .format('d')
      );
      i++
    ) {
      prevMonthDays.push({
        currentMonth: false,
        date: moment(currentMonth)
          .startOf('month')
          .add(-i - 1, 'd')
          .toISOString()
      });
    }

    return prevMonthDays;
  }

  private nextMonthDays(currentMonth: string) {
    let cells = 42;

    let t =
      cells -
      (moment(currentMonth).daysInMonth() +
        Number(
          moment(currentMonth)
            .startOf('month')
            .format('d')
        ));

    let nextMonthDays = [];

    for (let i = 0; i < t; i++) {
      nextMonthDays.push({
        currentMonth: false,
        date: moment(currentMonth)
          .endOf('month')
          .add(i + 1, 'd')
          .toISOString()
      });
    }

    return nextMonthDays;
  }

  getCurrentYear(currentMonth: string) {
    return moment(currentMonth).format('YYYY');
  }

  getCurrentMonth(currentMonth: string) {
    return moment(currentMonth).format('MMMM');
  }

  getCurrentMonthCalendar(currentMonth: string) {
    let days = [];

    for (let i = 0; i < moment(currentMonth).daysInMonth(); i++) {
      days.push({
        currentMonth: true,
        date: moment(currentMonth)
          .startOf('month')
          .add(i, 'd')
          .toISOString()
      });
    }

    this.prevMonthDays(currentMonth).forEach(obj => {
      days.unshift(obj);
    });

    this.nextMonthDays(currentMonth).forEach(obj => {
      days.push(obj);
    });
    console.log(days);
    return days;
  }

  prevMonth(currentMonth: string) {
    this.currentDate = moment(currentMonth)
      .add(-1, 'month')
      .toISOString();

    return moment(currentMonth)
      .add(-1, 'month')
      .toISOString();
  }
  nextMonth(currentMonth: string) {
    this.currentDate = moment(currentMonth)
      .add(1, 'month')
      .toISOString();

    return moment(currentMonth)
      .add(1, 'month')
      .toISOString();
  }
}

export default Calendar;
