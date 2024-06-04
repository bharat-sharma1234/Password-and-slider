import React from 'react'
import './Home.css'
import Card from './Card'

function Home({data}) {
//Related gist & discussion https://gist.github.com/jakearchibald/cb03f15670817001b1157e62a076fe95
// Related video https://www.youtube.com/watch?v=MCi6AZMkxcU

window.onload = function () {
  const controller = new AbortController();
  // Set the date we're counting down to
  const countDownDate = new Date("May 28, 2024 08:00:00").getTime();
  const clockDaysElement = document.querySelector(".clock-days");
  const clockHoursElement = document.querySelector(".clock-hours");
  const clockMinutesElement = document.querySelector(".clock-minutes");
  const clockSecondsElement = document.querySelector(".clock-seconds");
  // Create an animation callback every second:
  animationInterval(1000, controller.signal, (time) => {
    // Get today's date and time
    let now = new Date().getTime();

    // Find the distance between now and the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the results
    clockDaysElement.textContent = days;
    clockHoursElement.textContent = hours;
    clockMinutesElement.textContent = minutes;
    clockSecondsElement.textContent = seconds;

    // If the count down is finished, write some text
    if (distance < 0) {
      controller.abort();
      document.querySelector(".clock-container").innerHTML = "EXPIRED";
    }
  });
};

function animationInterval(ms, signal, callback) {
  // Prefer currentTime, as it'll better sync animtions queued in the
  // same frame, but if it isn't supported, performance.now() is fine.
  const start = document.timeline
    ? document.timeline.currentTime
    : performance.now();

  function frame(time) {
    if (signal.aborted) return;
    callback(time);
    scheduleFrame(time);
  }

  function scheduleFrame(time) {
    const elapsed = time - start;
    const roundedElapsed = Math.round(elapsed / ms) * ms;
    const targetNext = start + roundedElapsed + ms;
    const delay = targetNext - performance.now();
    setTimeout(() => requestAnimationFrame(frame), delay);
  }

  scheduleFrame(start);
}


  return (
    <>


<div className='counter'>
<h1>Mystery countdown ends in...</h1>
<div class="clock-container">
  <div class="clock-col">
    <div class="clock-days clock-timer">&nbsp;</div>
    <div class="clock-label label-days">
      Days
    </div>
  </div>
  <div class="clock-col">
    <div class="clock-hours clock-timer">&nbsp;</div>
    <div class="clock-label label-hour">
      Hours
    </div>
  </div>
  <div class="clock-col">
    <div class="clock-minutes clock-timer">&nbsp;</div>
    <div class="clock-label label-minutes">
      Minutes
    </div>
  </div>
  <div class="clock-col">
    <div class="clock-seconds clock-timer">&nbsp;</div>
    <div class="clock-label label-seconds">
      Seconds
    </div>
  </div>
</div>
</div>



      <div className='cardd'>
       
       {
         data.map((item) => (
          <div key={item.id}>
           <Card
           image={item.image}
           price={item.price}
           productName={item.productName}
           />
           </div>
         ))
       }
     </div>
    </>
  )
}

export default Home
