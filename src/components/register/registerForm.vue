<script>
import { auth } from '../../services/firebase';
import { createUserWithEmailAndPassword } from "firebase/auth";
import BaseButton from '../chat/BaseButton.vue';

export default {
    name: 'registerForm',
    components: { BaseButton },
    data() {
        return {
            email: '',
            password: '',
            emailError: '',
            passwordError: '',
            createdUser: ''
        };
    },
    watch: {
        email(value) {
            if (this.emailError && value) {
                this.emailError = '';
            }
        },
        password(value) {
            if (this.passwordError && value.length >= 6) {
                this.passwordError = '';
            }
        }
    },
    methods: {
        async createUser() {
            try {
                await createUserWithEmailAndPassword(auth, this.email, this.password);
                console.log('Usuario creado correctamente');
            } catch (error) {
                const errorCode = error.code;
                if (errorCode === 'auth/email-already-in-use') {
                    this.emailError = 'El correo ya está en uso';
                } else if (errorCode === 'auth/invalid-email') {
                    this.emailError = 'El correo electrónico no es válido';
                } else if (errorCode === 'auth/weak-password') {
                    this.passwordError = 'La contraseña debe tener al menos 6 caracteres';
                } else {
                    this.emailError = 'Error al crear el usuario: ' + error.message;
                }
            }
        }
    }
}
</script>

<template>
    <h1 class="text-4xl mb-4">Registrarse</h1>
    <form @submit.prevent="createUser">
        <div class="mb-4">
            <label for="email" class="block mb-2">Email</label>
            <input type="email" id="email" class="w-full border rounded p-2" v-model="email">
            <p v-if="emailError" class="text-red-500 mt-2">{{ emailError }}</p>
        </div>
        <div class="mb-4">
            <label for="password" class="block mb-2">Contraseña</label>
            <input type="password" id="password" class="w-full border rounded p-2" v-model="password">
            <p v-if="passwordError" class="text-red-500 mt-2">{{ passwordError }}</p>
        </div>
        <p v-if="createdUser" class="text-green-500 my-2">{{ passwordError }}</p>
        <BaseButton />
    </form>
</template>
