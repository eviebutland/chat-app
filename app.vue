<template>
  <div>
    <form>
      <input type="text" v-model="message" placeholder="send a message" />
      <button @click="handleSend">Send</button>
    </form>
    <ul>
      {{ chatMessages }}
    </ul>
  </div>
</template>

<script setup>

import { io } from "socket.io-client";

const socket = io('http://localhost:3050/', { transports: ['websocket'] })

const message = ref()
socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
});
const chatMessages = ref([])

function handleSend(e) {
  console.log(socket)
  e.preventDefault()

  console.log(message.value)
  socket.emit('message', { user: socket.id, msg: message.value })

}

socket.on('message', (data) => {
  console.log(data)
  chatMessages.value.push(data)
})
</script>

