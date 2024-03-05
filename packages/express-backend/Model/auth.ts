import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import * as dotenv from 'dotenv';
import { Request, Response, NextFunction } from 'express';

dotenv.config();
const creds: { username: any; hashedPassword: string; }[] = [];
  

  export function registerUser(req: Request, res: Response) {
    const { username, pwd } = req.body; // from form
  
    if (!username || !pwd) {
      res.status(400).send("Bad request: Invalid input data.");
    } else if (creds.find((c) => c.username === username)) {
      res.status(409).send("Username already taken");
    } else {
      bcrypt
        .genSalt(10)
        .then((salt) => bcrypt.hash(pwd, salt))
        .then((hashedPassword) => {
          generateAccessToken(username).then((token) => {
            console.log("Token:", token);
            res.status(201).send({ token: token });
            creds.push({ username, hashedPassword });
          });
        });
    }
  }
  

function generateAccessToken(username: string): Promise<string> {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { username },
        process.env.TOKEN_SECRET as string,
        { expiresIn: '1d' },
        (err, token) => {
          if (err) {
            reject(err);
          } else {
            resolve(token!);
          }
        }
      );
    });
  }
  

  export function authenticateUser(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
  
    if (!token) {
      console.log("No token received");
      res.status(401).end();
    } else {
      jwt.verify(
        token,
        process.env.TOKEN_SECRET as string,
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
    const { username, pwd } = req.body;
    const retrievedUser = creds.find(
      (c) => c.username === username
    );
  
    if (!retrievedUser) {
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
            res.status(401).send("Unauthorized");
          }
        })
        .catch(() => {
          res.status(401).send("Unauthorized");
        });
    }
  }
