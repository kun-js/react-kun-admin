// throttle.ts

// 定义throttle函数，接受一个回调函数callback和节流时间limit
export function throttle<T extends unknown[]>(
  callback: (...args: T) => void, // 回调函数，可以接收任意数量和类型的参数
  limit: number // 节流时间，单位为毫秒
): (...args: T) => void {
  // 使用let声明一个变量lastCalled，用于记录上次执行回调函数的时间戳
  let lastCalled: number = 0;

  // 返回一个新的函数，该函数在调用时会执行节流逻辑
  return (...args: T) => {
    // 获取当前时间戳
    const now = Date.now();

    // 如果当前时间戳与上次执行回调函数的时间戳之差小于节流时间，则直接返回
    // 这样可以保证在指定的节流时间内最多只执行一次回调函数
    if (now - lastCalled < limit) {
      return;
    }

    // 更新lastCalled为当前时间戳，并执行回调函数
    lastCalled = now;
    callback(...args);
  };
}
