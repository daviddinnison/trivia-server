const express = require('express');
const app = express();
const questions = require('./routes/questions');
const morgan = require('morgan');

app.use(express.json());
app.use(morgan('tiny'));

app.use('/api/questions', questions);


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
