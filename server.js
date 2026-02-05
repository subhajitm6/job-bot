const express = require('express');
const fs = require('fs');

const app = express();
app.use(express.json());

app.post('/apply', (req, res) => {
  const { url } = req.body;

  let jobs = [];
  if (fs.existsSync('jobs.json')) {
    jobs = JSON.parse(fs.readFileSync('jobs.json'));
  }

  jobs.push(url);
  fs.writeFileSync('jobs.json', JSON.stringify(jobs, null, 2));

  res.send('Saved');
});

app.get('/jobs', (req, res) => {
  if (fs.existsSync('jobs.json')) {
    res.json(JSON.parse(fs.readFileSync('jobs.json')));
  } else {
    res.json([]);
  }
});

app.get('/', (req, res) => {
  res.send('Server running');
});

app.listen(3000, () => console.log('Server running'));
