// This will print in the wrong order.
// We added it as an example and to test that the arrays from data.js are loaded

// 🚨🚨🚨 Comment out the below code before you start working on the code

// Out of sync
/* getInstruction(
  'mashedPotatoes',
  0,
  step1 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;
  },
  error => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  1,
  step2 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step2}</li>`;
  },
  error => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  2,
  step3 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step3}</li>`;
  },
  error => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  3,
  step4 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step4}</li>`;
  },
  error => console.log(error)
);

getInstruction(
  'mashedPotatoes',
  4,
  step5 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step5}</li>`;
    document.querySelector('#mashedPotatoesImg').removeAttribute('hidden');
  },
  error => console.log(error)
); */

// Iteration 1 - using callbacks - getInstruction function
// getInstruction(food, step, callback, errorCallback)

getInstruction(
  'mashedPotatoes',
  0,
  step1 => {
    document.querySelector('#mashedPotatoes').innerHTML += `<li>${step1}</li>`;
    getInstruction(
      'mashedPotatoes',
      1,
      step2 => {
        document.querySelector(
          '#mashedPotatoes'
        ).innerHTML += `<li>${step2}</li>`;
        getInstruction(
          'mashedPotatoes',
          2,
          step3 => {
            document.querySelector(
              '#mashedPotatoes'
            ).innerHTML += `<li>${step3}</li>`;
            getInstruction(
              'mashedPotatoes',
              3,
              step4 => {
                document.querySelector(
                  '#mashedPotatoes'
                ).innerHTML += `<li>${step4}</li>`;
                getInstruction(
                  'mashedPotatoes',
                  4,
                  step5 => {
                    document.querySelector(
                      '#mashedPotatoes'
                    ).innerHTML += `<li>${step5}</li>`;
                    document.querySelector('#mashedPotatoes').innerHTML +=
                      '<li>Mashed potatoes are ready!</li>';
                    document
                      .getElementById('mashedPotatoesImg')
                      .removeAttribute('hidden');
                  },
                  error => console.log(error)
                );
              },
              error => console.log(error)
            );
          },
          error => console.log(error)
        );
      },
      error => console.log(error)
    );
  },
  error => console.log(error)
);

// Iteration 2 - using promises - obtainInstruction function
// obtainInstruction(food, step)
obtainInstruction('steak', 0)
  .then(step0 => {
    document.querySelector('#steak').innerHTML += `<li>${step0}</li>`;
    return obtainInstruction('steak', 1);
  })
  .then(step1 => {
    document.querySelector('#steak').innerHTML += `<li>${step1}</li>`;
    return obtainInstruction('steak', 2);
  })
  .then(step2 => {
    document.querySelector('#steak').innerHTML += `<li>${step2}</li>`;
    return obtainInstruction('steak', 3);
  })
  .then(step3 => {
    document.querySelector('#steak').innerHTML += `<li>${step3}</li>`;
    return obtainInstruction('steak', 4);
  })
  .then(step4 => {
    document.querySelector('#steak').innerHTML += `<li>${step4}</li>`;
    return obtainInstruction('steak', 5);
  })
  .then(step5 => {
    document.querySelector('#steak').innerHTML += `<li>${step5}</li>`;
    return obtainInstruction('steak', 6);
  })
  .then(step6 => {
    document.querySelector('#steak').innerHTML += `<li>${step6}</li>`;
    return obtainInstruction('steak', 7);
  })
  .then(step7 => {
    document.querySelector('#steak').innerHTML += `<li>${step7}</li>`;
    document.querySelector('#steak').innerHTML += '<li>Steak is ready!</li>';
    document.getElementById('steakImg').removeAttribute('hidden');
  });

// Iteration 3 using async/await - obtainInstruction function
// obtainInstruction(food, step)
// 7 steps
async function makeBroccoli() {
  try {
    for (let step = 0; step < 7; step++) {
      const instruction = await obtainInstruction('broccoli', step);
      document.querySelector(
        '#broccoli'
      ).innerHTML += `<li>${instruction}</li>`;
    }
    document.querySelector('#broccoli').innerHTML +=
      '<li>Broccoli is ready!</li>';
    document.getElementById('broccoliImg').removeAttribute('hidden');
  } catch (error) {
    console.log(error);
  }
}

makeBroccoli();

// Bonus 2 - Promise all - brussels sprouts

const promisesArray = [
  obtainInstruction('brusselsSprouts', 0),
  obtainInstruction('brusselsSprouts', 1),
  obtainInstruction('brusselsSprouts', 2),
  obtainInstruction('brusselsSprouts', 3),
  obtainInstruction('brusselsSprouts', 4),
  obtainInstruction('brusselsSprouts', 5),
  obtainInstruction('brusselsSprouts', 6),
];

Promise.all(promisesArray)
  .then(steps => {
    steps.forEach(step => {
      document.querySelector(
        '#brusselsSprouts'
      ).innerHTML += `<li>${step}</li>`;
    });
    document.querySelector('#broccoli').innerHTML +=
      '<li>Brussels sprout is ready!</li>';
    document.getElementById('brusselsSproutsImg').removeAttribute('hidden');
  })
  .catch(error => console.log(error));
