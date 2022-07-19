console.log('this is weather app using async wait');
const city = document.getElementById('city')
const searchBtn = document.getElementById('searchBtn');
let apikey = '25199ae3ad19fe7a4900d7908fac0c5c'

searchBtn.addEventListener('click', fetchData);
async function fetchData() {
    console.log("btn clicked");
    const getData = await fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=' + apikey)
    const user = await getData.json()

    .then(data => {
        let cityName = data['name']

        console.log(cityName)
        let cityyName = document.getElementById('cname').innerHTML = cityName;
        console.log(data);
        let dsecription = data['weather']['0']['description'];
        console.log(dsecription);
        // let icon = data['weather'][2]['icon']
        const name = document.getElementById('cname');
        // console.log(icon);
        let temp = data['main']['temp']
        console.log(temp);



    })


}