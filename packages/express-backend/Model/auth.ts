import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();
const creds: { username: any; hashedPassword: string; }[] = [];
if (!process.env.TOKEN_SECRET) {
    console.error("FATAL ERROR: TOKEN_SECRET is not defined.");
    process.exit(1);
  }
  const TOKEN_SECRET: string = process.env.TOKEN_SECRET;
  

  export async function registerUser(req: Request, res: Response): Promise<void> {
    const { username, pwd } = req.body;
  
    if (!username || !pwd) {
      res.status(400).send("Bad request: Invalid input data.");
      return;
    }
    
    const existingUser = creds.find(c => c.username === username);
    if (existingUser) {
      res.status(409).send("Username already taken");
      return;
    }
  
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(pwd, salt);
      const token = await generateAccessToken(username);
      creds.push({ username, hashedPassword });
      res.status(201).send({ token });
    } catch (error) {
      console.error(error);
      res.status(500).send("Internal server error");
    }
  }
  

function generateAccessToken(username: string): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { username },
        TOKEN_SECRET, // Use the validated TOKEN_SECRET
        { expiresIn: '1d' },
        (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token!); // Assure TypeScript that token is not null
          }
        }
      );
    });
  }
  

  export function authenticateUser(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    //Getting the 2nd part of the auth header (the token)
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      console.log("No token received");
      res.status(401).end();
    } else {
      jwt.verify(
        token,
        process.env.TOKEN_SECRET,
        (error, decoded) => {
          if (decoded) {
            next();
          } else {
            console.log("JWT error:", error);
            res.status(401).end();
          }
        }
      );
    }
  }


  export function loginUser(req: Request, res: Response) {
    const { username, pwd } = req.body; // from form
    const retrievedUser = creds.find(
      (c) => c.username === username
    );
  
    if (!retrievedUser) {
      // invalid username
      res.status(401).send("Unauthorized");
    } else {
      bcrypt
        .compare(pwd, retrievedUser.hashedPassword)
        .then((matched) => {
          if (matched) {
            generateAccessToken(username).then((token) => {
              res.status(200).send({ token: token });
            });
          } else {
            // invalid password
            res.status(401).send("Unauthorized");
          }
        })
        .catch(() => {
          res.status(401).send("Unauthorized");
        });
    }
  }
