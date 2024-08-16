/**
 * 定义一个节流函数throttle，用于限制回调函数在指定的时间间隔内只能执行一次。
 * @param callback - 回调函数，可以接收任意数量和类型的参数。
 * @param limit - 节流时间，单位为毫秒，表示在这段时间内最多只执行一次回调函数。
 * @returns 返回一个新的函数，该函数封装了节流逻辑。
 */
export function throttle<T extends unknown[]>(
  callback: (...args: T) => void, // 回调函数，可以接收任意数量和类型的参数
  limit: number // 节流时间，单位为毫秒
): (...args: T) => void {
  let lastCalled: number = 0; // 记录上次执行回调函数的时间戳

  // 返回一个新的函数，封装了节流逻辑
  return (...args: T) => {
    const now = Date.now(); // 获取当前时间戳

    // 如果当前时间戳与上次执行回调函数的时间戳之差小于节流时间，则不执行回调函数
    if (now - lastCalled < limit) {
      return;
    }

    // 更新时间戳并执行回调函数
    lastCalled = now;
    callback(...args);
  };
}
