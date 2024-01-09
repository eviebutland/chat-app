<template>
  <div class="flex h-full w-full">
    <nav class="border-r h-full min-w-[20rem]">
      <ul class="min-h-screen">
        <li class="border-b p-2">
          <p class="font-bold">John</p>
          <span>
            <!-- display last message -->
            You: lets do it!
          </span>
        </li>
        <li class="border-b p-2">
          <p class="font-bold">Lucy</p>
          <span><i>Lucy is typing</i></span>
        </li>
      </ul>
    </nav>
    <div class="w-full flex flex-1 min-h-screen flex-col justify-between">
      <section>
        <!-- name of other person you are talking too -->
        <h1 class=" p-4 w-full">John</h1>
        <hr />
      </section>
      <main>
        <Chat></Chat>
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Chat App',
  meta: [
    { name: 'Instant messaging chat app', content: 'Chat app' }
  ]
})

</script>

<script lang="ts">
export default {
  name: "index"
}
</script>
