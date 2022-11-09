const express = require("express");
const PORT = process.env.PORT || 6000;

const app = express();

app.listen(PORT, () => {
    console.log(`File-Sorting app listening on port ${PORT}`);
})