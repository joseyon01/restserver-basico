/*Controlador de Usuarios (Metodos)*/


//Funcion de Prueba
exports.initialSystem = (req, res) => {
    res.send('Hello World! desde el controlador')
}

exports.getUser = (req, res) => {
   res.json({
    status:200,
    msg: "La peticion es un GET (obtener)"
   })
}


//Parametros por segmento para consultas
exports.getUserQuery = (req, res) => {
    
    const params = req.query;

    const {q, nombre, apikey, page="1"} = params; //si no envia el page el valor por defecto es 1
    res.json({
        status:200,
        msg: "La peticion es por segmento",
        q,
        nombre,
        apikey,
        page
   })
}


//Insertar User
exports.postUser = (req, res) => {
    const body = req.body;

    const {nombre, email, role, google} = body

    console.log(body);
    res.status(200).json({
        nombre,
        email,
        role,
        google
    });
}

exports.putUser = (req, res) => {
    //Parametros por segmento
    const id = req.params.id; //pendiente de la variable que viene en la ruta

    console.log(id);

    res.status(200).json({
        id
    })
}

exports.deleteUser = (req, res) => {
    res.send('La peticion es un GET (elimina)')
}