import { io } from "socket.io-client";

const socket = io('http://localhost:3000');

socket.emit("hello world");

socket.on("hello",(data)=>{
    console.log(data);
})