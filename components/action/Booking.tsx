const Booking = ({ props }: any) => {
  const { add, remove, book, counter } = props;

  return (
    <div>
      <button onClick={remove}>-</button>
      <span>{counter}</span>
      <button onClick={add}>+</button>
      <div>
        <button onClick={book}>Book</button>
      </div>
    </div>
  );
};
export default Booking;
