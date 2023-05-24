// Middleware que seencargara de la gestion de errores

function errorLogs(err, req, res, next){
    console.log("ErrorLog");
    console.error(err);
    next();
}

function handleError(err,req, res, next){
    console.log("handleError");
    res.status(501).json ({
        message: err.message,
        stack: err.stack
    });
}

module.export={
    errorLogs,
    handleError
}