function attachGradientEvents() {

  let gradientElement = document.getElementById('gradient');
  let resultElement = document.getElementById('result');

  const gradientMousemoveHandler = (e) => {
  
    let percent = Math.floor((e.offsetX / (e.target.clientWidth - 1)) * 100);
    resultElement.textContent = percent + '%';
  }
  gradientElement.addEventListener('mousemove', gradientMousemoveHandler);
}

// let gradient = document.getElementById('gradient');
// gradient.addEventListener('mousemove',gradientMove);
// gradient.addEventListener('mouseout', gradientOut);

// let result = document.getElementById('result');

// function gradientMove(event) {
//   let power = event.offsetX / (event.target.clientWidth -1);
//   power =Math.trunc(power * 100);
//   result.textContent = power + '%';
// }

// function gradientOut(event) {
//   result.textContent = '';
