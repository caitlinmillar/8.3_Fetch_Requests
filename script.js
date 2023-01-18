const url = "https://restcountries.com/v2/all";
const countriesSection = document.getElementById("countries")

function getCountryByName(countryName){
    let countryName=data[0].countryName;
    fetch("https://restcountries.com/v3.1/name/{countryName}")
    .then(response => response.json())
    .then(data => console.log(data))
    return countryName;
}
// fetch("https://restcountries.com/v3.1/name/peru")
//     .then(response => response.json())
//     .then(data => console.log(data))


const getAllCountries=
fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => console.log(data))

getCountryByName("France");

