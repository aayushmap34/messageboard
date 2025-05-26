const express = require('express');
const cors = require('cors');
const postsRouter = require('./routes/posts');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/posts', postsRouter);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
