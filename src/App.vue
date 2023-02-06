<template>
    <div>
        <NavBar />
    </div>
    <router-view/>
</template>

<script lang="ts">

import NavBar from '@/components/NavBar.vue';

import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        NavBar
    }
})

</script>