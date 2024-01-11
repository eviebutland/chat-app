import { io } from "socket.io-client";
export const socket = io('http://localhost:3050/', { transports: ['websocket'] })

// DB FORMAT

// Users 
// name: Evie
// id: 1
// messageThreads: [123, 48]


// name: John
// id: 2
// messageThreads: [48]

// Message thread 
// id: 48 (each user will share with)
// users: [1, 2],
// thread: [{user: 1, message: 'hello', timestamp: 0:00:00}, {user: 1, message: 'are you there?'}, {user: 2, message: 'yes'}]}
