function calc_promedio() {
  var n1 = parseInt(document.getElementById("nota1").value);
  var n2 = parseInt(document.getElementById("nota2").value);
  var n3 = parseInt(document.getElementById("nota3").value);
  let p = (n1 + n2 + n3) / 3;
  p= p.toFixed(1)
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
console.log(array);

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

const notas = { nota1: "n1", nota2: "n2", nota3: "n3" };
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
    }else {
    Swal.fire({
      icon: "error",
      title: "Lo sentimos",
      text: "La nota " + resultado + " no alcanza para aprobar",
    });
  }
};

sessionStorage.setItem("calculo", JSON.stringify(notas));
localStorage.setItem("calculo1", JSON.stringify(notas));
