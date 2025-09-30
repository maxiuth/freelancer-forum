/**
 * @typedef Freelancer
 * @property {string} name
 * @property {string} occupation
 * @property {number} rate
 */

// === Constants ===
const NAMES = ["Alice", "Bob", "Carol", "Dave", "Eve"];
const OCCUPATIONS = ["Writer", "Teacher", "Programmer", "Designer", "Engineer"];
const PRICE_RANGE = { min: 20, max: 200 };
const NUM_FREELANCERS = 100;

function oneFreelancer() {
  const name = Math.floor(Math.random() * NAMES.length);
  const occupation = Math.floor(Math.random() * OCCUPATIONS.length);
  const rate =
    Math.floor(Math.random() * (PRICE_RANGE.max - PRICE_RANGE.min + 1)) +
    PRICE_RANGE.min;

  return {
    name: NAMES[name],
    occupation: OCCUPATIONS[occupation],
    rate: rate,
  };
}

const freelancers = Array.from({ length: NUM_FREELANCERS }, oneFreelancer);

function averageRate() {
  const total = freelancers.reduce(
    (sum, freelancer) => sum + freelancer.rate,
    0
  );
  return total / freelancers.length;
}

const freelancerAverage = averageRate();

// A single freelancer
function singleFreelancer(freelancer) {
  const { name, occupation, rate } = freelancer;
  const $tr = document.createElement("tr");
  $tr.innerHTML = `
        <td>${name}</td>
        <td>${occupation}</td>
        <td>${rate}</td>
    `;
  return $tr;
}

// All freelancers

function allFreelancers() {
  const $tbody = document.createElement("tbody");
  const $freelancers = freelancers.map(singleFreelancer);
  console.log($freelancers);
  $tbody.replaceChildren(...$freelancers);
  console.log($tbody);
  return $tbody;
}

function avgRate() {
  const $p = document.createElement("p");
  $p.textContent = "The average rate is $" + freelancerAverage;
  console.log($p);
  return $p;
}

function render() {
  const $app = document.querySelector("#app");

  $app.innerHTML = `
  <h1>Freelancer Forum</h1>
  <AverageRate></AverageRate>
  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>Occupation</th>
        <th>Rate</th>
      </tr>
    </thead>
    <tbody id="FreelancerRows"></tbody>
  </table>
  `;

  $app.querySelector("AverageRate").replaceWith(avgRate());
  $app.querySelector("#FreelancerRows").replaceWith(allFreelancers());
}

render();
