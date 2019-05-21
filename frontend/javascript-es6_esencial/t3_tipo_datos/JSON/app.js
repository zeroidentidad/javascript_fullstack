"use strict"

var persona = {nombre:'zero', twitter:'zeroidentidad'};

var personas = [
    {nombre:'jesus', twitter:'zeroidentidad'},
    {nombre:'fulano', twitter:'rrererf'},
    {nombre:'vero', twitter:'veroaruiz'},
    persona
]

var personaJSON = JSON.stringify(persona);

var nuevaPersona = JSON.parse(personaJSON);