<template>
  <div>
    <section class="p-4">
      <!-- name of other person you are talking too -->
      <h1>John</h1>
    </section>
    <hr />
    <main>
      <Chat></Chat>
    </main>
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
