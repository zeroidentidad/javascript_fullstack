//calback foreach

const ciudades = ['londres', 'rancho', 'madrid', 'mexico']

//inline callback
console.log('en inline:')

ciudades.forEach(function (ciudad) {
    console.log(ciudad)
})

//callback con func definida
console.log('con func definida:')

function callback(ciudad){
    console.log(ciudad)
}
ciudades.forEach(callback);