//Interface para la informacion que se maneja en cada metodo
interface ParamsData {
  table: string;
  id?: string;
  data?: any;
  idvalue?: any;
}

class database {
  cnn: any;

  host: string;
  user: string;
  pass: string;
  database: string;

  constructor() {
    this.host = process.env.MYSQL_SERVER || 'localhost';
    this.pass = process.env.MYSQL_PW || 'S3cret';
    this.user = process.env.MYSQL_USER || 'root';
    this.database = process.env.MYSQL_DB || 'shop';
  }

  async conectDB() {
    const mysql = require('mysql2/promise');

    this.cnn = mysql.createPool({
      host: this.host,
      user: this.user,
      database: this.database,
      password: this.pass,
      waitForConnections: true,
      connectionLimit: 10,
      queueLimit: 0,
    });

    try {
      let testconection = await this.cnn.query(`use ${this.database};`);
      console.log(`Database ${this.database} conected!`);
    } catch (error) {
      console.log(`ERROR database conection!: ${error} `);
    }
  }

  getC() {
    return this.cnn;
  }

  public desconectarDB() {
    this.cnn.end(() => {
      console.log('desconectado!');
    });
    this.cnn = null;
  }

  async querySelect(sql: string, data?: any) {
    let result: any = null;
    if (!data) {
      result = await this.cnn.query(sql);
    } else {
      result = await this.cnn.query(sql, data);
    }
    return result;
  }

  async save(param: ParamsData) {
    const { table, data } = param;
    if (!table && !data) {
      return { error: 'Incomplete Data!!!' };
    }
    try {
      const result = await this.cnn.query(`INSERT INTO ${table} SET ? `, data);
      return result[0];
    } catch (error) {
      return error;
    }
  }

  async update(param: ParamsData) {
    const { table, data, id } = param;
    if (!data) {
      return { error: 'Incomplete Parameters!!!' };
    }
    try {
      const result = await this.cnn.query(`UPDATE ${table} SET ? WHERE ${id} = ? `, [
        data,
        data[id || ''],
      ]);
      return result[0];
    } catch (error) {
      return error;
    }
  }

  async remove(param: ParamsData) {
    const { table, data, id } = param;
    if (!data && !id) {
      return { error: 'Incomplete Parameters!!!' };
    }
    try {
      const result = await this.cnn.query(`DELETE FROM ${table} WHERE ${id} = ? `, data[id || '']);
      return result;
    } catch (error) {
      return error;
    }
  }

  async findAll(param: ParamsData) {
    const { table, id, idvalue } = param;
    try {
      const result = await this.cnn.query(`SELECT * FROM ${table}`);
      // console.log('result', result);
      return result[0];
    } catch (error) {
      return error;
    }
  }

  async findOne(param: ParamsData) {
    const { table, id, idvalue } = param;
    if (!idvalue && !id) {
      return { error: 'Incomplete Parameters!!!' };
    }
    try {
      const result = await this.cnn.query(`SELECT * FROM ${table} WHERE ${id} = ? `, idvalue);
      return result[0];
    } catch (error) {
      return error;
    }
  }
}

const db = new database();

export default db;
