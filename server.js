// Load environment variables FIRST before anything else
require('dotenv').config();

const connectDB = require('./src/config/dbConfig');
const app = require('./src/app');

const cors = require('cors');

const PORT = process.env.PORT || 3000;




app.use(cors());
connectDB();
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
