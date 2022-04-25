const search = document.querySelector(".search");
const input = document.querySelector(".input");
const countryName = document.querySelector(".countryName");
const flag = document.querySelector(".flag");
const loader = document.querySelector(".loader");

const confirmedd=document.querySelector(".confirmed")
const deathss=document.querySelector(".deaths")
const recoveredd = document.querySelector(".recovered");
const load = document.querySelector("#load");
const btn = document.querySelector(".btn");



//asking data from server

const add = async (cityName) => {
  const api_link = "https://covid19.mathdro.id/api/countries/";
  const flag_link = "https://countryflagsapi.com/png/";
  const api = api_link + cityName;

  const req = await fetch(api);
  const data = await req.json()
  
  .then(getData);
  flag.src = flag_link + cityName;
  

//   showContent(data)
  function getData(data) {
    
    loader.style.display = "none";
    const covid = data;
    const {confirmed, deaths, recovered}=covid
    console.log(covid);
    if(covid.error){
      load.textContent="Davlat nomini to'g'ri kiriting"
      cityName="uzbekistan"
      btn.style.display="block" 
      loader.style.display = "block";
    }
    countryName.textContent = cityName;
    confirmedd.textContent = `${confirmed.value}`+" ta";
    deathss.textContent = `${deaths.value}`+" ta";
    recoveredd.textContent = `${recovered.value}`+" ta";
  }
};

search.addEventListener("submit", (e) => {
  e.preventDefault();
  const cityName = input.value.toLowerCase()
  input.value=''
  console.log(cityName);
  add(cityName);
  loader.style.display = "block";
  load.textContent = "Loading...";
  btn.display="none"
});

add("uzbekistan")

btn.addEventListener("click", ()=>{
  loader.style.display="none"
  btn.style.display="none"
})