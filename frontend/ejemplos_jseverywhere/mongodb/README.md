
## Docker:

### ejecutar creacion contenedor por defecto con compose:

docker-compose up

### iniciar docker container:

docker start mongodb_mongodb_1

### acceder a container para ejecutar comandos:

docker exec -it mongodb_mongodb_1 bash

## MongoDB:

## ver info mongodb

$ mongo

## crear database

$ use notasocial

## crear coleccion

$ db.notasocial.save({ type: "Madafaka" })

## insercion multiple

$ db.notasocial.save([{type: "Kepedo"}, {type: "Kiubo"}])

## consultar todo

$ db.notasocial.find()

## consultar por valor propiedad

$ db.notasocial.find({ type: "Madafaka" })
$ db.notasocial.find({ _id: ObjectId("DOCUMENT ID") })

## actualizar elemento

$ db.notasocial.update({ type: "Kepedo" }, { type: "Watafak" })

## eliminar elemento(s)

$ db.notasocial.remove({ type: "Watafak" })

$ db.notasocial.remove({})