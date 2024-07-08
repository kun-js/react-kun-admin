// 定义debounce函数，接受一个回调函数callback和等待时间wait
export function debounce<T extends unknown[]>(
  callback: (...args: T) => void, // 回调函数，可以接收任意数量和类型的参数
  wait: number // 等待时间，单位为毫秒
): (...args: T) => void {
  // 使用let声明一个变量timeoutId，用于存储定时器的ID
  let timeoutId: ReturnType<typeof setTimeout> | null = null;

  // 返回一个新的函数，该函数在调用时会执行防抖逻辑
  return (...args: T) => {
    // 如果timeoutId不是null，说明之前已经设置了定时器，需要先清除
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    // 设置一个新的定时器，等待指定的时间后执行回调函数
    // 如果在等待时间内再次触发该函数，之前的定时器会被清除并重新设置
    timeoutId = setTimeout(() => {
      callback(...args); // 执行回调函数
      timeoutId = null; // 重置timeoutId
    }, wait);
  };
}
