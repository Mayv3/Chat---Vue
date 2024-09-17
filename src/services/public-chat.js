import { addDoc, collection, getDocs, onSnapshot, orderBy, query, serverTimestamp } from "firebase/firestore";
import { db } from '../services/firebase.js';

export async function savePublicChatMessage(newMessage){
    const refChat = collection(db, 'public-chat');
    await addDoc(refChat, {
        date: serverTimestamp(),
        ...newMessage,
    })
}

export function suscribePublicChatMessage(callback){
        const refChat = collection(db, 'public-chat');
        const chatQuery = query(refChat, orderBy('date', 'asc'));
        const snapshot = getDocs(refChat);
        const docs = snapshot.docs

        onSnapshot(chatQuery, snapshot => {
            const messages = snapshot.docs.map(doc => ({
                id: doc.id,
                email: doc.data().email,
                text: doc.data().text,
            }));
            callback (messages);
        });
}