import { Socket } from "socket.io";
import express from "express";

const socket = Socket.io;
const app = express();

socket.on('connect' , () => {
    console.log('connected');
})

app.get('/' , (req,res) => {
    res.json('Get Requested');
})

app.listen('3000',() => {
    console.log('HeeHee connected');
})