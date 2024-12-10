// Vigtige elementer fra DOM
const generateBtn = document.getElementById("generate");
const randomDotBtn = document.getElementById("randomDot");
const clearBtn = document.getElementById("clear");
const canvasContainer = document.querySelector(".canvas-container");
const rectanglesDiv = document.querySelector(".rectangles");

// Variabler til styring
let canvas;
let ctx;
let rectangleCount = 0;

// Funktion til at oprette canvas
function createCanvas() {
  if (canvas) {
    alert("Canvas er allerede oprettet!");
    return;
  }

  // Opret et nyt canvas element
  canvas = document.createElement("canvas");
  canvas.width = 500;
  canvas.height = 500;
  canvas.style.border = "1px solid black";

  // Hent konteksten til at tegne på canvas
  ctx = canvas.getContext("2d");
  canvasContainer.appendChild(canvas);
}

// Funktion til at generere en tilfældig farve i formatet rgb(r, g, b)
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Funktion til at tegne et enkelt rektangel
function drawRectangle() {
  if (!canvas) {
    alert("Opret først et canvas ved at trykke på 'Genere Canvas'!");
    return;
  }

  const x = Math.floor(Math.random() * (canvas.width - 25));
  const y = Math.floor(Math.random() * (canvas.height - 25));
  const color = getRandomColor();

  ctx.fillStyle = color;
  ctx.fillRect(x, y, 25, 25);

  // Opdater rektangeltælleren
  rectangleCount++;
  updateRectangleCount();
}

// Funktion til at tegne flere rektangler
function drawMultipleRectangles() {
  if (!canvas) {
    alert("Opret først et canvas ved at trykke på 'Genere Canvas'!");
    return;
  }

  const countInput = prompt("Hvor mange rektangler vil du tegne? (max 50)");
  const count = parseInt(countInput, 10);

  if (isNaN(count)) {
    alert("Indtast venligst et gyldigt tal!");
    return;
  }

  if (count > 50) {
    alert("Du kan ikke tegne mere end 50 rektangler ad gangen!");
    return;
  }

  for (let i = 0; i < count; i++) {
    drawRectangle();
  }
}

// Funktion til at rydde lærredet
function clearCanvas() {
  if (!canvas) {
    alert("Opret først et canvas ved at trykke på 'Genere Canvas'!");
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  rectangleCount = 0;
  updateRectangleCount();
}

// Funktion til at opdatere tæller for rektangler
function updateRectangleCount() {
  rectanglesDiv.textContent = `Antal rektangler: ${rectangleCount}`;
}

// Event Listeners til knapper
generateBtn.addEventListener("click", createCanvas);
randomDotBtn.addEventListener("click", drawMultipleRectangles);
clearBtn.addEventListener("click", clearCanvas);