function selectColor() {
    var selectedColor = document.getElementById("colorPicker").value;
    document.querySelector(".column").style.backgroundColor = selectedColor;

    document.getElementById("hexCode").value = selectedColor;
    return selectedColor;

}


document
    .querySelector("#colorPicker")
    .addEventListener("input", hello);

////////////////////////////////////////////////////////

console.log(selectColor());
const hex2rgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);

    return { r, g, b }
}


function rgb1() {
    let rgb2 = hex2rgb(selectColor());
    return rgb2;
}
function color() {
    let rgbValue = `rgb(${rgb1().r}, ${rgb1().g}, ${rgb1().b})`;
    return rgbValue;
}
console.log(color());

function hello() {
    let h4 = document.querySelector("h4");
    h4.innerText = `RGB Value is : ${color()} 
HEXCODE is : ${selectColor()}`
}
