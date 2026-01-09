export function ageCalculator(edadAño, edadMes, edadDia ) {
   edadAño= Number(edadAño)
   edadMes= Number(edadMes)
   edadDia= Number(edadDia)

    let hoy = new Date();
    let nacimiento = new Date(edadAño, edadMes, edadDia);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    let mes = hoy.getMonth() - nacimiento.getMonth();   
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
return  edad;
}


console.log(ageCalculator(1990, 5, 25));
