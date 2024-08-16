/**
 * 定义一个防抖函数debounce，用于确保回调函数在指定的等待时间内最多只执行一次。
 * @param callback - 回调函数，可以接收任意数量和类型的参数。
 * @param wait - 等待时间，单位为毫秒，表示在这段时间内如果多次触发函数，则只有最后一次触发会执行回调。
 * @returns 返回一个新的函数，该函数封装了防抖逻辑。
 */
export function debounce<T extends unknown[]>(
  callback: (...args: T) => void, // 回调函数，可以接收任意数量和类型的参数
  wait: number // 等待时间，单位为毫秒
): (...args: T) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null; // 存储定时器的ID

  // 返回一个新的函数，封装了防抖逻辑
  return (...args: T) => {
    // 如果已经存在一个定时器，先清除它
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }

    // 设置一个新的定时器，等待指定时间后执行回调函数
    // 如果在等待时间内再次触发该函数，之前的定时器会被清除并重新设置
    timeoutId = setTimeout(() => {
      callback(...args); // 执行回调函数
      timeoutId = null; // 执行完毕后重置定时器ID
    }, wait);
  };
}
