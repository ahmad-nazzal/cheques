// let ball = document.getElementById("tasteer");
// alert("hello from the file");
// ball.onmousedown = function (event) {
//   let shiftX = event.clientX - ball.getBoundingClientRect().left;
//   let shiftY = event.clientY - ball.getBoundingClientRect().top;

//   ball.style.position = "absolute";
//   ball.style.zIndex = 1000;
//   document.body.append(ball);

//   moveAt(event.pageX, event.pageY);

//   // moves the ball at (pageX, pageY) coordinates
//   // taking initial shifts into account
//   function moveAt(pageX, pageY) {
//     ball.style.left = pageX - shiftX + "px";
//     ball.style.top = pageY - shiftY + "px";
//   }

//   function onMouseMove(event) {
//     moveAt(event.pageX, event.pageY);
//   }

//   // move the ball on mousemove
//   document.addEventListener("mousemove", onMouseMove);

//   // drop the ball, remove unneeded handlers
//   ball.onmouseup = function () {
//     document.removeEventListener("mousemove", onMouseMove);
//     ball.onmouseup = null;
//   };
// };

// ball.ondragstart = function () {
//   return false;
// };
