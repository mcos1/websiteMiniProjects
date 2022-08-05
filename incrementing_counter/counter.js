`use strict`;

const counters = document.querySelectorAll(`.counter`);

counters.forEach((counter) => {
  counter.innerText = `0`;

  const updateCounter = () => {
    const target = Number(counter.getAttribute(`data-target`));
    const c = +counter.innerText; // + in front is the same as wrapping it in Number() to turn it into a number

    const increment = target / 200;

    if (c < target) {
      counter.innerText = `${Math.ceil(c + increment)}`;
      setTimeout(updateCounter, 1);
    } else {
      counter.innerText = target;
    }
  };

  updateCounter();
});
