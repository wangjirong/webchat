import io from 'socket.io-client'
const socket = io("ws://localhost:3000",{
    secure:true,
});
export default socket