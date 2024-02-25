const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//routes
const dataRoutes = require('./server/controllers/data');
const authRoutes = require('./server/controllers/auth')

//use routes
app.use('/data', dataRoutes);
app.use('/auth', authRoutes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
