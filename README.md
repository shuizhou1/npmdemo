### 安装

npm install

### 使用

```js
import tool from 'lsznpmdemo';
  // 普通节流第一次不触发
  tool.throttle(fn,interval)
  // 立即触发节流
  tool.dateThrottle(fn,interval)
```



