
    function calc_promedio(n1, n2, n3) 
    {
    var n1 = parseInt(document.getElementById("nota1") .value);
    var n2 = parseInt(document.getElementById("nota2") .value);
    var n3 = parseInt(document.getElementById("nota3") .value);
    let p = (n1+n2+n3) / 3;
    document.getElementById("promedio").innerText = p;
    alert("El promedio es "+ p)



    
}
p=" "
do {
    p = prompt("Inserte nota")

} while (p>=6)

switch (p) {
    case "1":   alert("No aprobo");
    break;
    case "2":   alert("No aprobo");
    break;
    case "3":   alert("No aprobo");
    break;
    case "4":   alert("No aprobo");
    break;
    case "5":   alert("No aprobo");
    break;
    case "6":   alert("Aprobo");
    break;
    case "7":   alert("Aprobo");
    break;
    case "8":   alert("Aprobo");
    break;
    case "9":   alert("Aprobo");
    break;
    case "10":   alert("Aprobo");
    break;

    default: alert("Nota no existente")
        break;
}








function getRandomInt(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

let array= [];

for(let i=1;i<=10;i++){
    array.push(getRandomInt(1, 10));
}
console.log(array);

