<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
            <router-link to="/">Accueil</router-link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item dropdown">
                    <router-link class="nav-link dropdown-toggle" to="/energy" id="energie-dropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Energies
                    </router-link>
                    <ul class="dropdown-menu" aria-labelledby="energie-dropdown">
                    <li>
                        <router-link to="/energy/price-electricity-gas" class="dropdown-item">Prix Gaz/Electricité</router-link>
                    </li>
                    <li>
                        <router-link to="/energy/edf-production" class="dropdown-item">Production énergie EDF</router-link>
                    </li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                </ul>
                <form class="d-flex">
                <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success" type="submit">Search</button>
                </form>
          </div>
        </div>
      </nav>
</template>

<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    
})

</script>

<style>
nav a.router-link-exact-active {
    color: #42b983;
}

nav a {
    text-decoration: none;
}
</style>