export default function countDownTimer() {
  let timer
  let x = 60
  x--
  if (x < 0) {
    clearTimeout(timer)
  } else {
    timer = setTimeout(countDownTimer, 1000)
  }
  return x
}
