import express, { Request, Response } from "express";
import User from "../models/user";

const router = express.Router();

// get all users
router.get("/", async (request: Request, response: Response) => {
    const users = await User.find();
    //response.send(users)
    console.log('users: ', users);
    response.send("Fetching Users");
});

export default router;