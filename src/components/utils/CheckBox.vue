<template>
    <div class="checkbox-wrapper-3">
        <input type="checkbox" @change="handleChange"/>
        <input type="checkbox" id="cbx-3" />
        <label for="cbx-3" class="toggle"><span></span></label>
      </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    prop: ['value'],
    data() {
        return {
            content: this.value
        }
    },
    methods: {
        handleChange() {
            this.$emit('change', this.content);
        }
    }
});

</script>