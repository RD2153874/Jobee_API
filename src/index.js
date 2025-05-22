import express from "express";

const app = express()

app.get("/", (req, res) => {
    res.send("jobeee_API setup files prepared and working good")
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})