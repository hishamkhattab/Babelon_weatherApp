const cityForm = document.querySelector('.input-city');
const infoCard = document.querySelector('.container');
const displayMore = document.querySelector('.display-more');
const additionalInfo = document.querySelector('.add-info');
const mainDetails = document.querySelector(`.details`);
const dayDetails = document.querySelector(`.day-info`);
const mainImg = document.querySelector('.main-img img');



//updateUI 
const updateUI = ({ current,location} = data) => {
    infoCard.classList.remove('d-none');
    // const { location, current } = data;
    console.log(current,location);

    //getting the date
    const cityDate = new Date(`${location.localtime}`)
    console.log(dateFns.cityDate);

    const dayHtml = `
    <h5>${dateFns.format(cityDate, 'dddd')}</h5>
    <h5>${dateFns.format(cityDate, 'HH')}:${dateFns.format(cityDate, 'mm')}</h5>
    `;

    dayDetails.innerHTML = dayHtml;


    //setting the main image
    const imgSrc = current.is_day ? `./newImg/day.svg` : './newImg/night.svg';

    mainImg.setAttribute('src', imgSrc);

    //updatin the main-information
    const html = `
    <h5>${location.name}</h5>
    <div>${current.condition.text}</div>
    <div>
      <span>${current.temp_c}</span>
      <span>&deg C</span>
    </div>
    `;

    mainDetails.innerHTML = html;


    //updating additional info 
        const addInfoHtml = `
        <div>
        <span>Feels Like</span>
        <h5>${current.feelslike_c} &deg C</h5>
      </div>
      <div>
        <!-- icon -->
        <span>Humudity</span>
        <h5>${current.humidity} %</h5>
      </div>
      <div>
        <!-- icon -->
        <span>Visibility</span>
        <h5>${current.vis_km} km</h5>
      </div>
      <div>
        <!-- icon -->
        <span>wind speed</span>
        <h5>${current.wind_kph} km/hr</h5>
      </div>
      <div>
        <!-- icon -->
        <span>Pressure</span>
        <h5>${current.pressure_mb} hPa</h5>
      </div>
        `;

        additionalInfo.innerHTML = addInfoHtml;
    
}


//get weather 
const getForcast = async (city) => {

    getForeCast(city)
        .then(data => updateUI(data))
        .catch(err => console.log(err));
}


cityForm.addEventListener('submit', e => {
    
    e.preventDefault();

    const city = cityForm.city.value;
    getForcast(city)
    cityForm.reset();
})


displayMore.addEventListener('click', e => {

    if (e.target.nodeName === 'I') {
        additionalInfo.classList.toggle('d-none');
    }
})

