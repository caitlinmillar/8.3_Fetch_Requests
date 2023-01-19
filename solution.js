
// declares function
const getCountryByName = async (countryName) => {
// backticks for fetch so that url can be adapted as we go
// the first item is what I want to use
// fetch = pending promise, GET request
const response = await fetch(`https://restcountries.com/v3.1/name/${countryName}`)
const jsonData = await response.json();
console.log(jsonData);

// const countryNames = jsonData.map((country) => {
//     return country.name.common;
// })
// console.log(countryNames);

const countryInfo = document.createElement("ul");

const listName = document.createElement("li");
listName.textContent = jsonData[0].name.common;

const carsSide = document.createElement("li")
carsSide.textContent = jsonData[0].car.side;

const countries = document.querySelector("#countries")
countries.appendChild(countryInfo);
countryInfo.appendChild(listName);
countryInfo.appendChild(carsSide);

}

const onSearchSubmit = (event) => {
    event.preventDefualt();
    getCountryByName(event.target.countries.value);

}

const searchForm = document.querySelector("form");
searchForm.addEventListener("submit", onSearchSubmit)
// calls functions
getCountryByName("russia");


