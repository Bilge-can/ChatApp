import io from "socket.io-client";

let socket;

export const init = () =>{
    console.log("Connecting...");

    socket = io('http://localhost:3000', {
        transport: ["websocket"],
    });
    socket.on("connect", () => console.log("Connected!"))
};