require("dotenv").config();
const app = require('./app');

console.log(process.env.MYSQL_PASSWORD);
console.log(process.env.MYSQL_ROOT_PASSWORD);
console.log(process.env.MYSQL_DATABASE);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_HOST);
console.log(process.env.SERVER_PORT);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_PASSWORD);
console.log(process.env.MYSQL_DATABASE);
console.log(process.env.MYSQL_USER);
console.log(process.env.MYSQL_PASSWORD);
console.log(process.env.MYSQL_DATABASE);
console.log(process.env.MYSQL_HOST);
const port = process.env.SERVER_PORT || 8080

app.listen(port, () => console.log(`app listening at http://localhost:${port}`));