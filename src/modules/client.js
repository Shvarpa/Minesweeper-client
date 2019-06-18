import io from 'socket.io-client'
const port = 3000
const socket = io(`http://localhost:${port}`);

socket.on('connect', () => { console.log("connected"); });
socket.on('event', (data) => { console.log("event happend, data:", data) });
socket.on('disconnect', () => { console.log("disconnected") });

export default socket