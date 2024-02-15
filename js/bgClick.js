function bgClick() {
    const colorPicker = document.getElementById("formColorPicker");
    
    if (colorPicker.classList.contains("hidden")) {
        colorPicker.classList.remove("hidden")
    } else {
        colorPicker.classList.add("hidden")
    };
    console.log("Click")
    
}
window.onclick = () => {
    bgClick();
}