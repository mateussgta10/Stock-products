const express = require('express');
const cors = require('cors')
const routes = require('./routes')

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


app.listen(3333, () => {
  console.log("🚀️ Backend start on port 3000")
})



/**
 * Query Params ==>  na rota get - nomeados após o "?" (servem para filtros e páginação)
 * Route Params ==> ultilizado para indentificar recuros /user/:id 
 * Request body => é o corpo, criar ou altera recursos
 */

 /**
  * SQL: MySQL, POSTGRESS, ORACLE, MariaDB SQLite;
  * NoSQL: MongoDB;
  * 
  */
 

  /**
   * Driver: SELECT * FROM users
   * Query Bulder: table('user').select('*').where('id' == );
   */