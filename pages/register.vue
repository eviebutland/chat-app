<template>
    <form>
        <label>Email
            <input type="email" v-model="email" />
        </label>
        <label>
            Password
            <input type="password" v-model="password" />
        </label>
        <label>
            Name
            <input type="text" v-model="name" />
        </label>
    </form>
</template>

<script setup lang="ts">
const email = defineModel('email')
const password = defineModel('password')
const name = defineModel('name')
</script>
