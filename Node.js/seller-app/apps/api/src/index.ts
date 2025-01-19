import express from 'express';
import * as dotenv from 'dotenv';
import {userModel} from '@apps/db';

dotenv.config()

const app = express();

app.listen('8000',()=>console.log("api running on the port 8000"));

