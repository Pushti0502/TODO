const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./route')
const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb+srv://pushtishah:Pushti0501@cluster0.17srzft.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Routes
app.use('/api/todos',routes);

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
