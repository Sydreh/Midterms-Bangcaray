const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;


app.use(express.json());


app.get('/api/message', (req, res) => {
    res.json({ message: 'Midterm Exam ITP 314' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
