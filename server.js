const express = require('express');
const applyJob = require('./apply');

const app = express();
app.use(express.json());

app.post('/apply', async (req, res) => {
  const { url } = req.body;
  console.log("Applying to:", url);
  await applyJob(url);
  res.send('Applied');
});

app.get('/', (req, res) => {
  res.send('Job Bot Running');
});

app.listen(3000, () => console.log('Server running'));
