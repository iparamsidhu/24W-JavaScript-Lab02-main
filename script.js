// Declare and initialize global variables
const pageBg = document.documentElement;
const sliders = document.querySelectorAll("input[type='range']");
let rgb = [0, 0, 0];

// Event handlers for range sliders
sliders.forEach(slider => {
    slider.addEventListener("input", function() {
        const channel = this.id;
        const value = parseInt(this.value);
        if (!isNaN(value) && value >= 0 && value <= 255) {
            rgb = changeRgb(channel, value);
            const newCSS = writeCSS(rgb);
            pageBg.style.backgroundColor = newCSS;
        }
    });
});

// Function to update RGB array
function changeRgb(channel, value) {
    switch (channel) {
        case 'red':
            rgb[0] = value;
            break;
        case 'green':
            rgb[1] = value;
            break;
        case 'blue':
            rgb[2] = value;
            break;
    }
    return rgb;
}

// Function to generate CSS background color string
function writeCSS(rgb) {
    const newColor = `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    return newColor;
}
