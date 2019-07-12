<template>
    <section class="header">
        <div class="container">
            <h1><strong>{{ getPrincipal.tituloNegrito }} </strong><strong>{{getPrincipal.tituloComum}}</strong></h1>
            <p class="espaco">
                <span  v-for="(tag, index) in getPrincipal.tags" :key="index">
                    #{{tag}}
                </span>
                <!-- #Code - #Technology - #Share -->
            </p>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            principal: []
        }
    },
    computed: {
        ...mapGetters(['getPrincipal']),
    }
}
</script>
