import router from './routes/index';

const express = require('express');

const port = process.env.PORT || 5000;
const app = express();

router(app);

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});