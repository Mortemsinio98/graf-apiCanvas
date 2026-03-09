function draw() {

    const canvas = document.getElementById("canvas");

    if (canvas.getContext) {

        const ctx = canvas.getContext("2d");

        // 1 RECTÁNGULO
        ctx.fillStyle = "green";
        ctx.fillRect(50, 50, 150, 100);


        // 2 TRIÁNGULO
  //      ctx.beginPath();
    //    ctx.moveTo(300, 150);
  //      ctx.lineTo(250, 50);
  //      ctx.lineTo(350, 50);
  //      ctx.closePath();
  //      ctx.fillStyle = "blue";
  //      ctx.fill();
// 3 HAPPY FACE
//  ctx.beginPath();
//  ctx.arc(550, 100, 50, 0, Math.PI * 2, true);
//  ctx.moveTo(585, 100);
//  ctx.arc(550, 100, 35, 0, Math.PI, false);
//  ctx.moveTo(535, 85); 
// ctx.arc(530, 85, 5, 0, Math.PI * 2, true);
//  ctx.moveTo(575, 85); 
// ctx.arc(570, 85, 5, 0, Math.PI * 2, true);
//  ctx.stroke();

// TEXTO 3D "Mortem"
//ctx.font = "bold 60px Arial";
//ctx.textAlign = "center";

// Sombra para efecto 3D
//ctx.fillStyle = "#444";
//ctx.fillText("Mortem", 550 + 4, 100 + 4);
//ctx.fillText("Mortem", 550 + 3, 100 + 3);
//ctx.fillText("Mortem", 550 + 2, 100 + 2);

// Texto principal
//ctx.fillStyle = "#000";
//ctx.fillText("Mortem", 550, 100);

// Borde para resaltar
//ctx.lineWidth = 2;
//ctx.strokeStyle = "#666";
//ctx.strokeText("Mortem", 550, 100);

        // 4 LÍNEAS
        //ctx.beginPath();
        //ctx.moveTo(50, 250);
        //ctx.lineTo(300, 350);
        //ctx.lineTo(250, 350);
        //ctx.closePath();
        //ctx.stroke();


        // 5 ARCOS
       // ctx.beginPath();
        //ctx.arc(350, 300, 50, 0, Math.PI, false);
        //ctx.stroke();


        // 6 CURVA CUADRÁTICA
       // ctx.beginPath();
       // ctx.moveTo(500, 250);
       // ctx.quadraticCurveTo(600, 350, 700, 250);
       // ctx.stroke();


        // 7 CURVA BEZIER
       // ctx.beginPath();
        //ctx.moveTo(800, 250);
       // ctx.bezierCurveTo(850, 150, 950, 350, 1000, 250);
       // ctx.stroke();


        // 8 COMBINACIÓN DE FIGURAS
        //ctx.fillStyle = "red";
        //ctx.fillRect(900, 100, 280, 380);

        //ctx.beginPath();
        //ctx.arc(940, 90, 40, 0, Math.PI * 2);
        //ctx.stroke();

    }

}
