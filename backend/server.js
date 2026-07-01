import express from 'express';

const app = express();

//if the GET request is made to /api/notes, send back a response with a status code of 200 and a message "you got 5 notes"
app.get("/api/notes", (req, res) => {
    res.status(200).send("you got 10 notes");
});

app.listen(5001, () => {
    console.log('Server is running on port 5001');
});