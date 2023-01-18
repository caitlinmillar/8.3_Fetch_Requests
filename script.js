const countries = document.getElementById("countriesList");
const form = document.getElementById("countriesForm")

function name(countryData){
    let countryName = countryData[0].name;
    return countryName;
}

function countryInfo(countryData){
    let countryName = countryData.name;
    let population = countryData.population;
    let countryInfo = countryName + population;
    return countryInfo;
}

const getAllCountries=
fetch("https://restcountries.com/v2/all")
    .then(response => response.json())
    .then(data => console.log(data))
    .then(() => heading.innerHTML = "Countries")
    console.log(getAllCountries)


// Using a MAP?
// function map(countryData){
//     let countries = countryData;
//     for(let country of countries){
//         let countryInfo = grabData(country);
//         const newHeader = document.createElement("h3");
//         newHeader.append(countryInfo);
//         countries.append(newHeader);
//     };

// }

const getCountryByName = async (countryName)=>{
    const response = await fetch ('https://restcountries.com/v3.1/name/${countryName}');
    const jsonData = await response.json();
    // const countryInfo = await response.json();
   
    console.log(jsonData);


    const countriesSection = document.querySelector

    // jsonData.forEach(country => {
    // const content = document.createElement("h2");
    // content.textContent = jsonData[0].name.common;
    // // content.textContent = "The name of country is " + country.name.nativeName.tur.official +
    // // " Population is " + country.population;
    // console.log(content);

    countryInfo.appendChild(content);

    console.log(countryInfo)
    document.querySelector("body").appendChild(content);
    countriesSection.appendChild(content)

    }


getCountryByName("russia")


const button = document.querySelector("button");
button.addEventListener("click", getCountryByName)