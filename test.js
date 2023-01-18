const url = "https://restcountries.com/v2/all";
const countriesSection = document.getElementById("countries")
const heading = document.getElementById("heading")
const fetchResponse = await fetch("https://restcountries.com/v2/name/");

// function name(){
//     fetch("https://restcountries.com/v2/name/" + name)
//     .then(response => response.json())
//     .then((data) => console.log(data))
// }


// function getCountryByName (data){
//     fetch("https://restcountries.com/v3.1/name/peru")
//     .then(response => response.json())
//     .then(jsonData => console.log(jsonData))
//     let countryName=document.querySelector("h1");
//     countryName.textContent = jsonData.capital;
//     console.log(countryName);
// }

const getCountryByName = async(name) => {
    const response = await fetch("https://restcountries.com/v3.1/name/${countryName}")
    const jsonData = await response.json();
    const showData = console.log(jsonData.forEach(country => country.name.common));
}

fetch("https://restcountries.com/v3.1/name/peru")
    .then(response => response.json())
    .then(data => console.log(data))


const getAllCountries=
fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => console.log(data))

// function getCountryByName(chosenCountry){
//     fetch("https://restcountries.com/v2/name/")
//     .then(response => response.json())
//     .then(data => console.log(chosenCountry.getCountryByName))
// }
// getCountryByName();
getCountryByName("peru")

