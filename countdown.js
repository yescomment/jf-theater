const nextEventDate = new Date('Oct 9 2026 19:00:00 EDT')
const element = document.getElementById('door')

function updateCountdown() {
  const msLeft = nextEventDate - new Date()

  if (msLeft < 1000 * 60 * 15 && Math.floor(msLeft / 5000) % 2) {
    element.innerHTML = `DOORS ARE OPEN, CLICK TO ENTER` // flash between this…
  } else if (msLeft < 0) {
    element.innerHTML = 'jacobford.zoom.us/j/88965656433' // and URL every 10 seconds once started
  } else if (msLeft < 1000 * 10 && Math.floor(msLeft / 100) % 2) {
    element.innerHTML = 'jacobford.zoom.us/j/88965656433' // strobe URL starting 1 min before
  } else if (msLeft < 1000 * 60 * 15 && Math.floor(msLeft / 1000) % 2) {
    element.innerHTML = 'jacobford.zoom.us/j/88965656433' // flash URL every 1 sec starting 15 mins before
  } else if (msLeft < 1000 * 60 * 16 && Math.floor(msLeft / 1000) % 2) {
    element.innerHTML = 'DOORS OPEN MOMENTARILY' // flash coming soon starting 17 min before
  } else {
    element.innerHTML = `${msLeft}ms` // otherwise show ms until showtime
  }
  requestAnimationFrame(updateCountdown)
}

requestAnimationFrame(updateCountdown)
