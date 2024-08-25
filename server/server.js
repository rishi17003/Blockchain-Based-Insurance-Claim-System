// server/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const verifyRoute = require('./routes/verifyRoute');

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'  
  }));
app.use(express.json());


mongoose.connect('mongodb+srv://Cluster50304:rishi271@cluster0.yxvgaib.mongodb.net/insuranceDB?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log(`Connected to MongoDB successfully`))
.catch(err => console.error('Could not connect to MongoDB:', err));

app.use('/api', verifyRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
