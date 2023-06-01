const app = require('./app');

const hostname = process.env.HOSTNAME;
const port = process.env.PORT;

app.listen(port, () => console.log(`Server running at\nhttp://${hostname}:${port}/`));
