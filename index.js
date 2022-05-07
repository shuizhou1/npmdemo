export default {
  test(a){
    console.log(a)
  },
  // 定时器的缺点第一次不触发
 throttle(fn, interval) {
    let timer = null;
    return function (...args) {
      if (timer === null) {
        timer = setTimeout(() => {
          fn.apply(this, args)
          clearTimeout(timer);
          timer = null;
        }, interval)
      }
    }
  },
  // 时间戳形式
  dateThrottle(fn, interval) {
    let lasttime = 0; //将立即执行一次
    return function (...args) {
      let nowtime = Date.now();
      if (nowtime - lasttime >= interval) {
        fn.apply(this, args)
        lasttime = nowtime
      }

    }
  }
}