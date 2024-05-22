<template>
  <div class="flex h-full w-full">
    <nav class="border-r h-full min-w-[20rem]">
      <ul class="min-h-screen">
        <li class="border-b p-2" :class="{ 'bg-green-100': openChatRoom === chat.user }" v-for="chat in activeChatRooms">
          <!-- <button class="w-full text-left" @click="handleEnterChat(chat.user)">
            <p class="font-bold">{{ chat.user }}</p>
            <span v-if="!!chat.messages.length">
              {{ chat.messages[chat.messages.length - 1] }}
            </span>
          </button> -->
        </li>
      </ul>
    </nav>
    <div class="w-full flex flex-1 min-h-screen flex-col justify-between">
      <section>
        <!-- <h1 class=" p-4 w-full">{{ openChatRoom }}</h1> -->
        <hr />
      </section>

      <main>
        <!-- <Chat></Chat> -->
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
import { socket } from '../server/socket'
// import { getUsers } from '../server/users/get'


const activeChatRooms = ref([
  { user: 'john', messages: ['Lets do it!'] }, { user: 'lucy', messages: [] }
])
const openChatRoom = ref()

// function handleEnterChat(chatUser: string) {
//   console.log('trigger chat with', chatUser)
//   openChatRoom.value = chatUser

//   socket.emit('enterChat', {
//     currentUser: socket.id,
//     chatUser // change this to chat user i.e Lucy
//   })
// }
async function fetchUsers() {
  try {
    // const users = await getUsers()
    // console.log(users)
  } catch (error) {
    console.log(error)
  }
}
fetchUsers()
</script>

<script lang="ts">
export default {
  name: "PageEntry"
}
</script>
