const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#results');

  if (height <= 0 || height === '' || isNaN(height)) {
    result.innerHTML = `please enter vaild height ${height}`;
  } else if (weight <= 0 || weight === '' || isNaN(weight)) {
    result.innerHTML = `please enter vaild weight  ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(1);
    result.innerHTML = `<span>${bmi}</span>`;

    if (bmi <= 18.6) {
      result.innerHTML = `<span>you are under weight your BMi is ${bmi}</span>`;
    } else if ((bmi) => 24.9) {
      result.innerHTML = `<span>you are  Overweight your BMi is ${bmi}</span>`;
    } else {
      result.innerHTML = `<span>you are under normal your BMi is ${bmi}</span>`;
    }
  }
});
