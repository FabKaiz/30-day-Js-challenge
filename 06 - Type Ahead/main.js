const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
const cities = [];
const searchBar = document.querySelector(".search");
const results = document.querySelector(".suggestions");

fetch(endpoint)
  .then((response) => response.json())
  .then((data) => cities.push(...data));

const findCities = (search, cities) => {
  return cities.filter((place) => {
    const regex = new RegExp(search, "gi");
    return place.city.match(regex) || place.state.match(regex);
  });
};

function showResult() {
  const result = findCities(this.value, cities);
  const html = result.map((place) => {
    const regex = new RegExp(this.value, "gi");
    const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
    const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
    return `
      <li>
        <span class="name">${cityName}, ${stateName}</span>
        <span class="population">${place.population}</span>
      </li>
    `;
    }).join("\n");
  results.innerHTML = html;
}

searchBar.addEventListener("change", showResult);
searchBar.addEventListener("keyup", showResult);