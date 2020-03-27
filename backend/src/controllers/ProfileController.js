const connection = require('../database/connection');

module.exports = {
    //list INCIDENTS for ongs
    async index(request, response){
        const ong_id = request.headers.authorization;
        const incidents = await connection('incidents')
        .whereWrapped('ong_id', ong_id)
        .select('*');
        return response.json(incidents);
    },

};