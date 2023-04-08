import express, { Express, Request, Response } from "express";
import { connectToDB } from "./database";
import { config } from "dotenv";
import usersRouter from "./routes/users.routes";

config();

const PORT = process.env.PORT;
const app: Express = express();

connectToDB();

// middleware - transform request body to JSON
//app.use(express.json());


// routes
app.get('/', (request: Request, response: Response) => {
    console.log("Someone pinged!");
    response.send("WooHoo");
});

app.use("/api/users", usersRouter);

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
});