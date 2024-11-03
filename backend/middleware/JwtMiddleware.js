const MeuTokenJWT = require("../modelo/MeuTokenJWT");


module.exports = class JwtMiddleware {

    validar_token_acesso = (request, response, next) => {
        const authorizarion = request.headers.authorization;

        const jwt = new MeuTokenJWT();

        const autorizado = jwt.validarToken(authorizarion);
        console.log("autorizado", autorizado);

        if (autorizado === true) {

            const paytload = jwt.payload;
            const obj = {
                email: paytload.email,
                role: paytload.role,
                name: paytload.name,
            }
            request.headers.authorization = jwt.gerarToken(obj);
            next();

        } else {
            const objResposta = {
                status: false,
                msg: "token inválido"
            }
            response.status(401).send(objResposta);
        }
    }
}