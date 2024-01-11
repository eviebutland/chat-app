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
        <p></p>
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

async function handleSend(e) {
    e.preventDefault()
    userTyping.value = null

    try {
        const { data } = await useFetch('https://api.sightengine.com/1.0/text/check.json', {
            method: 'POST',
            query: {
                'text': message.value,
                'api_user': '248307845',
                'mode': 'rules',
                'lang': 'en',
                'api_secret': '6Yra9zPcayedhY9GUVVk4zDdgvMt9fSe',
            }
        })

        if (!passModeration(data.value)) {
            // Display error 
            return
        } else {
            socket.emit('message', { user: socket.id, msg: message.value })
        }

    } catch (error) {
        console.log(error)
    }
}


function passModeration(data) {
    if (data.profanity.matches.length) {
        console.log('FAILED PROFANITY')
        return false
    }

    if (data.link.matches.length) {
        console.log('FAILED LINK')
        return false
    }

    if (data.personal.matches.length) {
        console.log('FAILED PERSONAL')
        return false
    }

    return true
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


<script>
export default {
    name: 'Chat'
}
</script>