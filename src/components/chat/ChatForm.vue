<script>
import BaseButton from './BaseButton.vue'
export default {
    name: 'Form',
    emits: ['new-message'],
    components: { BaseButton },
    data() {
        return {
            newMessage: {
                email: '',
                text: '',
            }
        }
    },
    methods: {
        handleSubmit() {
            this.$emit('new-message', { ...this.newMessage })
            this.newMessage.text = '';
        }
    }
}
</script>
<template>

    <h2 class="mb-4">Mensajes</h2>
    <form action="#" @submit.prevent="() => handleSubmit()">
        <div class="mb-4">
            <label for="email" class="block mb-2">Email</label>
            <input type="email" id="email" class="w-full border rounded p-2" v-model="newMessage.email">
        </div>
        <div class="mb-4">
            <label for="textarea" class="block mb-2">Mensaje</label>
            <input type="text" id="text" class="w-full min-h-20 border rounded p-2" v-model="newMessage.text">
        </div>
        <BaseButton />
    </form>

</template>
