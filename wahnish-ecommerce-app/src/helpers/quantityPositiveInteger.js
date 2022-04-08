export const quantityPositiveInteger = ()  => {
    let quantity = 0;
    while (isNaN(quantity) || Number(quantity)<= 0) {
        quantity = prompt("Ingrese una nueva cantidad valida")
    }
    return quantity
}

export default quantityPositiveInteger