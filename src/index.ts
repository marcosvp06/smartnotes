import express, { type Request, type Response } from "express";

const app = express();
const PORT = 3333;

app.get("/", (req: Request, res: Response) => {
    res.send("Hello world!");
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}.`);
});