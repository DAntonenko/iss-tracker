const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());

app.get('/api/iss', async (req, res) => {
  try {
    const response = await axios.get('http://api.open-notify.org/iss-now.json');
    const timestamp = new Date();
    res.json({
      ...response.data,
      lastUpdated: timestamp.toISOString(),
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch ISS data' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
