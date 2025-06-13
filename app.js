const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const path = require('path');


const userRoutes = require('./routes/userRoutes');
const footballRoutes = require('./routes/football');
const playerController = require('./controllers/playerController');


const app = express();
// Middleware để đọc dữ liệu từ form HTML
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route prefix
app.use('/user', userRoutes);
app.use('/football', footballRoutes);


// Cấu hình EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));





// Kết nối DB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ MongoDB connected'))
  .catch(err => console.error('❌ DB connection error:', err));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
