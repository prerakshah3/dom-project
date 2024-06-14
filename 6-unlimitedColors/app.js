const randomcolor = function () {
  const hex = '0123456ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
};
let internalId;
const start = function () {
  if (!internalId) {
    internalId = setInterval(changeBgColor, 80);
  }
  function changeBgColor() {
    document.body.style.backgroundColor = randomcolor();
  }
};
const stop = function () {
  clearInterval(internalId);
  internalId = null;
};
document.querySelector('#start').addEventListener('click', start);
document.querySelector('#stop').addEventListener('click', stop);

console.log(randomcolor());
