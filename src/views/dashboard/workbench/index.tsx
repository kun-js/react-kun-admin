import useCountStore from "@/store/count";

const Workbench = () => {
  const { count, incrementCount, decrementCount } = useCountStore();

  return (
    <>
      <div>Workbench</div>
      <div>count:{count}</div>
      <button onClick={() => incrementCount(1)}>+</button>
      <button onClick={() => decrementCount(1)}>-</button>
    </>
  );
};

export default Workbench;
