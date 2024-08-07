/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputImagePath = path.resolve(__dirname, 'src/public/images/heros/hero-image_2.jpg');
const outputDesktopPath = path.resolve(__dirname, 'src/public/images/heros/hero-image_2-desktop.jpg');
const outputMobilePath = path.resolve(__dirname, 'src/public/images/heros/hero-image_2-mobile.jpg');

// Membuat direktori output jika belum ada
const outputDesktopDir = path.dirname(outputDesktopPath);
const outputMobileDir = path.dirname(outputMobilePath);

if (!fs.existsSync(outputDesktopDir)) {
  fs.mkdirSync(outputDesktopDir, { recursive: true });
}

if (!fs.existsSync(outputMobileDir)) {
  fs.mkdirSync(outputMobileDir, { recursive: true });
}

// Resize image for desktop
sharp(inputImagePath)
  .resize({ width: 1200, height: 600 })
  .toFile(outputDesktopPath, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Desktop image resized successfully!');
    }
  });

// Resize image for mobile
sharp(inputImagePath)
  .resize({ width: 600, height: 300 })
  .toFile(outputMobilePath, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Mobile image resized successfully!');
    }
  });
