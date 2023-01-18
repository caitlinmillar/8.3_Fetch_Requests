const getCountryByName = async ()=>{
    const response = await fetch ('https://restcountries.com/v3.1/name/peru');
    const jsonData = await response.json();
    console.log(jsonData);
}

const button = document.querySelector("button");
button.addEventListener("click", getCountryByName)