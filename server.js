const express = require('express');
const app = express();
app.use(express.json());

// POST endpoint for /bfhl
app.post('/bfhl', (req, res) => {
  try {
    const data = req.body.data;
    
    if (!Array.isArray(data)) {
      return res.status(400).json({ is_success: false, error: 'Invalid input format' });
    }

    const numbers = data.filter(item => !isNaN(item));
    const alphabets = data.filter(item => /^[a-zA-Z]$/.test(item));
    const highestAlphabet = alphabets.length > 0 ? 
      [alphabets.reduce((a, b) => a.toLowerCase() > b.toLowerCase() ? a : b)] : [];

    const response = {
      is_success: true,
      user_id: 'dipanshu_dangi_20112003',
      email: 'dipanshudangi2003@gmail.com',
      roll_number: '22BCS16357',
      numbers: numbers,
      alphabets: alphabets,
      highest_alphabet: highestAlphabet
    };

    res.status(200).json(response);
  } catch (error) {
    console.error('Error in POST /bfhl:', error);
    res.status(500).json({ is_success: false, error: 'Internal server error' });
  }
});

// GET endpoint for /bfhl
app.get('/bfhl', (req, res) => {
  try {
    const response = {
      operation_code: 1
    };
    res.status(200).json(response);
  } catch (error) {
    console.error('Error in GET /bfhl:', error);
    res.status(500).json({ is_success: false, error: 'Internal server error' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
