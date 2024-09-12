<script>
import Lista from './MessagesChatList.vue'
import Form from './ChatForm.vue'
import { query, orderBy, addDoc, collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '../../services/firebase.js';
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
            const refChat = collection(db, 'public-chat');
            addDoc(refChat, {
                date: new Date(),
                ...newMessage,
            })
        }
    },
    async mounted() {
        const refChat = collection(db, 'public-chat');
        const chatQuery = query(refChat, orderBy('date', 'asc'));
        const snapshot = await getDocs(refChat);
        const docs = snapshot.docs

        onSnapshot(chatQuery, snapshot => {
            this.messages = snapshot.docs.map(doc => ({
                id: doc.id,
                email: doc.data().email,
                text: doc.data().text,
            }));
        });
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