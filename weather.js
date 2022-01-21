const APIkey = 'db7552857b4944e189271157212311';

const getForeCast = async (city) => {

    const base = 'https://api.weatherapi.com/v1/current.json';
    const query = `?key=${APIkey}&q=${city}&aqi=no`;

    const response = await fetch(base + query);

    const data = await response.json();

    return data;
}

