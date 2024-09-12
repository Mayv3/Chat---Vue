<script>

export default {
    name: 'Lista',
    props: {
        messages: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<template>

    <ul>
        <li v-for="message in messages" :key="message.id" class="mb-4">
            <b>{{ message.email }}</b>
            <div>{{ message.text }}</div>
        </li>
    </ul>

</template>