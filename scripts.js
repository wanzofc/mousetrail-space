let canvasId;
let ctx;
let particlesArray = [];
let hue;
let frame;

// Mendapatkan elemen canvas
let canvas = document.getElementById("canvas");

// Mengatur konteks 2D pada canvas
ctx = canvas.getContext("2d");

// Mengatur id canvas dan lebar canvas
canvasId = "canvas1";
let canvasHeight = innerHeight;

// Function untuk menghasilkan warna
function getRandomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}

// Function untuk menghasilkan int secara acak
function getRandomInt() {
  return Math.floor(Math.random() * 100);
}

// Function untuk membuat partikel
class Particle {
  constructor() {
    // Mengatur posisi partikel
    this.x = mouse.x;
    this.y = mouse.y;
    this.speedX = getRandomInt() * 2 - 1;
    this.speedY = getRandomInt() * 2 - 1;
    this.color = getRandomColor();
  }

  // Mengupdate posisi partikel
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x > canvas.width || this.x  canvas.height || this.y
