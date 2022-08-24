function calc_promedio() {
  var n1 = parseInt(document.getElementById("nota1").value);
  var n2 = parseInt(document.getElementById("nota2").value);
  var n3 = parseInt(document.getElementById("nota3").value);
  let p = (n1 + n2 + n3) / 3;
  p = p.toFixed(1);
  document.getElementById("promedio").innerText = "Su promedio es de " + p;
  return p;
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

let array = [];

for (let i = 1; i <= 10; i++) {
  array.push(getRandomInt(1, 10));
}

const nota1 = document.getElementById("nota1");
nota1.addEventListener("keydown", (e) => {
  console.log("La primer nota es:" + e.key);
});

const nota2 = document.getElementById("nota2");
nota2.addEventListener("keydown", (e) => {
  console.log("La segunda nota es:" + e.key);
});

const nota3 = document.getElementById("nota3");
nota3.addEventListener("keydown", (e) => {
  console.log("La tercer nota es:" + e.key);
});

const notas = {
  nota1: "n1",
  nota2: "n2",
  nota3: "n3",
};
JSON.stringify(notas);

const boton = document.getElementById("btn");
boton.onclick = () => {
  let resultado = calc_promedio();
  if (resultado >= 6) {
    Swal.fire({
      icon: "success",
      title: "Felicidades",
      text: "Aprobado con " + resultado,
    });
  } else {
    Swal.fire({
      icon: "error",
      title: "Lo sentimos",
      text: "La nota " + resultado + " no alcanza para aprobar",
    });
  }
};

sessionStorage.setItem("calculo", JSON.stringify(notas));
localStorage.setItem("calculo1", JSON.stringify(notas));


const clima = document.getElementById("clima");
let icon = "clear";

const climaInfo = async () => {
  const resp = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?lat=-34.603719&lon=-58.381834&lang=es&appid=6e06ac3c98dba32312d10ffe9a1499b2"
  );
  const data = await resp.json();
  return data;
};

climaInfo().then((data) => {
  const icon = data.weather[0].main.toLowerCase()

  clima.innerHTML += `
<img src="./icons/${icon}.svg" alt="">
<div>
<h1>13°</h1>
<p>${data.name}, ${data.sys.country}</p>
</div>`;
});


