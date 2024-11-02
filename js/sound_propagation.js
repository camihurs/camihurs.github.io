let angle = Math.PI / 4;  // Ángulo inicial del péndulo (45 grados)
let angleVelocity = 0;    // Velocidad angular
let angleAcceleration = 0; // Aceleración angular
let gravity = 0.4;        // Gravedad

let originX; // Posición x del origen del péndulo
let originY; // Posición y del origen del péndulo
let length = 200; // Longitud del péndulo
let bobX, bobY;   // Posición del objeto del péndulo

function setup() {
    createCanvas(600, 400);
    originX = width / 2; // Origen en el centro del canvas
    originY = 100;       // Posición y del origen
}

function draw() {
    background(240);

    // Aceleración angular (basada en la segunda ley de Newton para péndulos)
    angleAcceleration = (-1 * gravity / length) * sin(angle);
    angleVelocity += angleAcceleration;  // Actualiza la velocidad angular
    angleVelocity *= 0.99; // Agrega algo de fricción
    angle += angleVelocity; // Actualiza el ángulo

    // Calcular la posición del objeto del péndulo
    bobX = originX + length * sin(angle);
    bobY = originY + length * cos(angle);

    // Dibujar la línea del péndulo
    stroke(0);
    line(originX, originY, bobX, bobY);

    // Dibujar el objeto del péndulo
    fill(127);
    ellipse(bobX, bobY, 40, 40);
}
