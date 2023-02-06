<template>
    <img src="@/assets/images/logo.png" />
    <h2 class="text-center w-25 mb-3">
        Visualiser rapidement les données de France
    </h2>
    <div class="border center-div w-50 p-2">
        <div class="d-flex justify-content-center">
            <BIconLightningCharge  style="width: 20%; height: 40px; color: #ECBA1D"/>
        </div>
        <div class="center-div">
            <h4 class="text-center">Rapidité d'accès</h4>
            <p class="text-center w-25 center-div">Cette application permet à l'utilisateur de rapidement
                accèder à différentes données. Leurs source se trouve sur le site du gouvernement français.
            </p>
        </div>
    </div>

    <div class="border center-div w-50 p-2 mt-4">
        <div class="d-flex justify-content-center">
            <BIconLightningCharge  style="width: 20%; height: 40px; color: #ECBA1D"/>
        </div>
        <div class="center-div">
            <h4 class="text-center">Rapidité d'accès</h4>
            <p class="text-center w-25 center-div">Cette application permet à l'utilisateur de rapidement
                accèder à différentes données. Leurs source se trouve sur le site du gouvernement français.
            </p>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

import { BIconLightningCharge } from 'bootstrap-icons-vue';

export default defineComponent({
    components: {
        BIconLightningCharge
    }
});

</script>

<style>
    h2 {
        margin: auto;
    }

    img {
        width: 10%;
        display: block;
        margin: auto;
    }

    .center-div{ 
        width: 100%;
        margin: auto;
    }
</style>