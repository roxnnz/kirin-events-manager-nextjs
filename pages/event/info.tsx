import { useRouter } from 'next/router';
import { useState } from 'react';
import Booking from '../../components/action/Booking';

const Info = () => {
  const router = useRouter();
  const { date } = router.query;
  const [counter, setCounter] = useState(1);

  const add = () => {
    if (counter >= 2) {
      return;
    }
    setCounter(counter + 1);
  };

  const remove = () => {
    if (counter <= 0) {
      return;
    }
    setCounter(counter - 1);
  };

  const book = () => {
    return;
  };

  const getCapacity = (q: string | string[]) => {
    console.log(q);
    return '18/20';
  };

  const props = {
    add,
    remove,
    book,
    counter
  };

  return (
    <>
      {date}
      <div>{date && getCapacity(date)}</div>
      <Booking props={props}></Booking>
    </>
  );
};

export default Info;
