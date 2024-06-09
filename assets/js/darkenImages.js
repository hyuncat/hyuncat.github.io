// darkenImages.js
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputDir = path.join(__dirname, '../../assets/images/projects');
const outputDir = path.join(__dirname, '../../assets/images/projects/dark');

// Create output directory if it doesn't exist
if (!fs.existsSync(outputDir)){
    fs.mkdirSync(outputDir);
}

// Function to darken images
function darkenImage(inputPath, outputPath) {
    sharp(inputPath)
        .modulate({ brightness: 0.5 }) // Adjust brightness (0.5 for 50% darker)
        .toFile(outputPath)
        .then(info => console.log(`Image processed: ${outputPath}`))
        .catch(err => console.error(err));
}

// Process all images in the input directory
fs.readdir(inputDir, (err, files) => {
    if (err) {
        console.error("Error reading directory", err);
        return;
    }

    files.forEach(file => {
        const inputPath = path.join(inputDir, file);
        const outputPath = path.join(outputDir, file);
        darkenImage(inputPath, outputPath);
    });
});
