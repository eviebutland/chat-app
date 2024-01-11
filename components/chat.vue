<template>
    <div>
        <ul class="p-4">
            <li class="list-none border-b border-gray-50 p-2 hover:bg-gray-50" v-for="chat of chatMessages">
                <div class="flex space-x-2 items-center">
                    <span>
                        <FontAwesomeIcon :icon="faUserNinja" />
                    </span>
                    {{ chat.user }}: {{ chat.msg }}
                </div>
            </li>
        </ul>
        <!-- fixed bottom-0 -->
        <form class="p-4">
            <div class="flex space-x-2">
                <input class="flex-1 border rounded-sm" @keypress="handleInput" type="text" v-model="message"
                    placeholder="Send a message" />
                <button class="flex-1 max-w-[200px] border-green bg-green-600 rounded-sm px-4 py-2 text-white"
                    @click="handleSend">Send</button>
            </div>

            <p v-if="userTyping"><i>{{ userTyping }} is typing</i></p>
        </form>
    </div>
</template>

<script setup lang="ts">

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faUserNinja } from '@fortawesome/free-solid-svg-icons'
import { socket } from '../server/socket'

const message = ref()

socket.on("connect_error", (err) => {
    console.log(`connect_error due to ${err.message}`);
})

const chatMessages = ref([])
const userTyping = ref()

async function handleSend(e: Event) {
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
    } finally {
        message.value = null
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


<script lang="ts">
export default {
    name: 'Chat'
}

</script>