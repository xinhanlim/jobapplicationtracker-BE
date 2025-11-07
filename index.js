const express = require('express');
const cors = require('cors')
require('dotenv').config();
const PORT = process.env.PORT;

const userRouter = require('./routes/userRoute')
const jobRouter = require('./routes/jobRoute')

const app = express();
app.use(express.json())
app.use(cors());
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the API" });
});

app.use('/api/users', userRouter)
app.use('/api/jobs', jobRouter)

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});