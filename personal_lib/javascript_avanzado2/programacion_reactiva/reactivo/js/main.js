rxjs.fromEvent(document, 'click').pipe(
  rxjs.operators.pluck('target'),
  rxjs.operators.filter(node => node.classList.contains('ball')),
  rxjs.operators.scan(counter => counter + 1, 0)
).subscribe(counter=>{
  document.getElementById("counter").innerText = "Puntos: "+counter;
});

rxjs.fromEvent(document, 'animationend').pipe(
  rxjs.operators.pluck('target'),
  rxjs.operators.filter(node => node.classList.contains('ball'))
).subscribe( node=> document.body.removeChild(node));

function randomNum(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

rxjs.interval(300).pipe(
  rxjs.operators.map(()=>{
    let ball = document.createElement("div");
    ball.className = "ball";
    ball.style.backgroundColor = "rgb(" + randomNum(255) + "," + randomNum(255) + "," + randomNum(255) + ")";
    ball.style.top = randomNum(350) + "px";
    ball.style.left = randomNum(1550) + "px";
    return ball;
  })
).subscribe(ball=> document.body.appendChild(ball));



