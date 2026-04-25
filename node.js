const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Node.js!');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.post('/api/error', (req, res) => {
  const { type, message, stack, file, line, column, url, userAgent, timestamp, repo } = req.body;
  console.log(`[error-received] ${type}: ${message}`);
  if (stack) console.log(`Stack: ${stack}`);
  if (file) console.log(`File: ${file}:${line}:${column}`);
  if (url) console.log(`URL: ${url}`);
  if (userAgent) console.log(`UA: ${userAgent}`);
  if (repo) console.log(`Repo: ${repo}`);
  res.status(200).json({ status: 'logged' });
});

app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ error: 'Internal server error' });
});

app.listen(port, () => {
  console.log(`Node.js server running on port ${port}`);
});
