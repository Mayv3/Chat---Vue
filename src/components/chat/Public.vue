<script>
import Lista from './MessagesChatList.vue'
import Form from './ChatForm.vue'
import { savePublicChatMessage, suscribePublicChatMessage } from '../../services/public-chat.js';

export default {
    name: 'Public',
    components: { Lista, Form },
    data() {
        return {
            messages: []
        }
    },
    methods: {
        addMessage(newMessage) {
            savePublicChatMessage(newMessage)
        }
    },
    async mounted() {
        suscribePublicChatMessage(newMessages => this.messages = newMessages)
    }
}

</script>

<template>
    <div class="flex gap-4">
        <section class="w-9/12">
            <h2 class="sr-only">Mensajes</h2>
            <div class="border rounded p-4">
                <lista :messages="messages" />
            </div>
        </section>
        <section class="w-3/12">
            <Form @new-message="addMessage" />
        </section>
    </div>
</template>