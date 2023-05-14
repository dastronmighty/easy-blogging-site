import mysql, { Connection } from 'mysql2';

const connection: Connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  database: 'blog'
});

connection.connect((err: Error | null) => {
  if (err) throw err;
  console.log('Connected to the database.');
});

export default connection;
