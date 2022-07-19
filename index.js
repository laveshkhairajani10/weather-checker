const city = document.getElementById('city')
const searchBtn = document.getElementById('searchBtn');



let apikey = '25199ae3ad19fe7a4900d7908fac0c5c'
searchBtn.addEventListener('click', () => {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city.value + '&appid=' + apikey)
        .then(res => {
            if (!res.ok) {
                alert("no weather found")
                throw new Error("no weather found")
            }
            return res.json();
        })


    .then(data => {
        let cityName = data['name']

        console.log(cityName)
        console.log(data);
        let dsecription = data['weather']['0']['description'];
        console.log(dsecription);
        // let icon = data['weather'][2]['icon']
        const name = document.getElementById('cname');
        let icon = data['weather']['0']['icon']
            // console.log(icon);
        let temp = data['main']['temp']
        console.log(temp);
        let img = document.getElementById('img')
        let str = ""
        let inner = `
            <div class="output">
        <h4 id="cname"> City Name :${cityName} </h4>
        <p id="temp"> Temperature : ${convertion(temp)}</p>
        <p id="discription"> Description : ${dsecription}</p>
      
                      </div>
            `

        name.innerHTML = inner;


    })


})

function convertion(val) {
    return (val - 273).toFixed(2)
}