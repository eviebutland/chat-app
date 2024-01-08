<template>
  <div>
    <form>
      <input @keypress="handleInput" type="text" v-model="message" placeholder="send a message" />
      <button @click="handleSend">Send</button>
    </form>
    <ul>
      <li v-for="chat of chatMessages">
        {{ chat.user }}: {{ chat.msg }}
      </li>
      <p v-if="userTyping"><strong>{{ userTyping }} is typing</strong></p>
    </ul>
  </div>
</template>

<script setup>
import { io } from "socket.io-client";

const socket = io('http://localhost:3050/', { transports: ['websocket'] })

const message = ref()

socket.on("connect_error", (err) => {
  console.log(`connect_error due to ${err.message}`);
})

const chatMessages = ref([])
const userTyping = ref()

function handleSend(e) {
  userTyping.value = null
  e.preventDefault()
  socket.emit('message', { user: socket.id, msg: message.value })
}


function handleInput() {
  socket.emit('activity', { user: socket.id })
}

socket.on('message', (data) => {
  chatMessages.value.push(data)
})

const activityInactiveTimer = ref()
socket.on('activity', ({ user }) => {

  clearTimeout(activityInactiveTimer)
  userTyping.value = user

  activityInactiveTimer.value = setTimeout(() => {
    userTyping.value = null
  }, 2000);
})
</script>

