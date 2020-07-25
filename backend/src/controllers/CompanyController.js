const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = { 
  async index(request, response)  {
    const companies = await connection('companies').select('*');
  
    return response.json(companies);
  },

  async create(request, response) {
    const { name, email, whatsapp, city, uf } = request.body;

    const id = crypto.randomBytes(4).toString('hex')//Criando o id

    await connection('companies').insert({
      id,
      name,
      email, 
      whatsapp, 
      city, 
      uf
    })

    return response.json({ id });
  }
}