const tempLoad = () => {
    let icon = document.getElementById('icon');
    icon.innerHTML = "&#xf2cb";
    icon.style.color = "#ffa41b";

    setTimeout(() => {
        icon.innerHTML = "&#xf2ca;";
        icon.style.color = "#ffa41b";
    }, 1000)

    setTimeout(() => {
        icon.innerHTML = "&#xf2c9;";
    }, 2000)

    setTimeout(() => {
        icon.innerHTML = "&#xf2c8;";
    }, 3000)

    setTimeout(() => {
        icon.innerHTML = "&#xf2c7;";
        icon.style.color = "#ff5151";
    }, 4000)
}

setInterval(() => {
    icon.style.color = "#ffa41b";
    tempLoad();
}, 5000);


tempLoad();
   
   
   function tempconvert() {
    let input = document.querySelector('#val').value;

    let tempTypeSelect = document.querySelector('#tempType');
    let temerature = tempType.options[tempTypeSelect.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }

    if (temerature == 'cel') {
        document.querySelector("#output").innerHTML = celToFah(input) + "&#176;F";
    }
    else {
        document.querySelector("#output").innerHTML = fahToCel(input) + "&#176;C";
    }

    // TO RELOAD THE PAGE TO SET VALUE ZERO

    //    setTimeout(() => {
    //     window.location.reload();
    // }, 1500);

}
function refresh(){
    document.querySelector("#output").innerHTML = 0;
    document.querySelector('#val').value=' ';

}