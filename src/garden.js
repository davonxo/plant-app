const canvas = document.getElementById('gardenCanvas');
const ctx = canvas.getContext('2d');

const tileSize = 32;
const gridWidth = 7;
const gridHeight = 14;

const soilColor = '#8B5A2B';

const seedlingImg = new Image();
seedlingImg.src = './assets/seedling.png';

seedlingImg.onload = () => {
  drawGarden();
};

function drawGarden() {
  for (let y = 0; y < gridHeight; y++) {
    for (let x = 0; x < gridWidth; x++) {
      ctx.fillStyle = soilColor;
      ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);

      if ((x + y) % 3 === 0) {
        ctx.drawImage(seedlingImg, x * tileSize, y * tileSize, tileSize, tileSize);
      }
    }
  }
}
