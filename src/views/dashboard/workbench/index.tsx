import useCountStore from "@/store/count";

const Workbench = () => {
  const { count, incrementCount, decrementCount } = useCountStore();

  return (
    <>
      <div>Workbench</div>
      <div>{count}</div>
      <button onClick={incrementCount}>+</button>
      <button onClick={decrementCount}>-</button>
    </>
  );
};

export default Workbench;
