let html = document.querySelector("#html");
let style = document.querySelector("#style");
let string = `/*
 * 你好，我是一名前端新人
 * 接下来我演示一下我的前端功底
 * 首先我先准备一个div
 */
#div1{
  border: 1px solid red;
  width: 200px;
  height: 200px;
}
/*
 * 接下来我把 div 变成一个八卦图
 * 注意看好了
 */
#div1{
  border-radius: 50%;
  box-shadow: 0 0 3px rgba(0,0,0,0.5);
  border: none;
}
/*
 * 八卦是阴阳合成的
 * 一白一黑
 */
#div1{
  background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/* 
 * 接下来添加两个神秘的小球
 */
#div1::before{
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  background: radial-gradient(circle, rgba(0,0,0,1) 000%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;
let string2 = "";
let n = 0;

let step = () => {
  setTimeout(() => {
    if (string[n] === "\n") {
      string2 += "<br>";
    } else if (string[n] === " ") {
      string2 += "&nbsp;";
    } else {
      string2 += string[n];
    }

    // 如果是回车就不照搬
    // 如果不是回车就照搬
    html.innerHTML = string2;
    style.innerHTML = string.substring(0, n);
    window.scrollTo(0, 9999);
    html.scrollTo(0, 9999);
    if (n < string.length - 1) {
      // 如果 n 不是最后一个就继续
      n += 1;
      step();
    }
  }, 50);
};

step();
