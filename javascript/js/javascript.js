
    function calc_promedio(n1, n2, n3) 
    {
    var n1 = parseInt(document.getElementById("nota1") .value);
    var n2 = parseInt(document.getElementById("nota2") .value);
    var n3 = parseInt(document.getElementById("nota3") .value);
    let p = (n1+n2+n3) / 3;
    document.getElementById("promedio").innerText = p;
}


function getRandomInt(min,max){
    return Math.floor(Math.random() * (max-min)) + min;
}

let array= [];

for(let i=1;i<=10;i++){
    array.push(getRandomInt(1, 10));
}
console.log(array);