<template>
  <div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="2000">
    <!-- Indicators -->
    <!--<ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
       <li data-target="#myCarousel" data-slide-to="2"></li> 
    </ol>-->

    <!-- Wrapper for slides -->
    <div class="carousel-inner">
      <div class="item" v-for="(port, index) in getPortifolio" :key="index">
        <img :src="port.imagem_empresa" alt="Los Angeles" />
        <div class="carousel-caption">
          <h3>{{port.nome_empresa}}</h3>
          <p>We love the Big Apple!</p>
        </div>
      </div>
      <!-- <div class="item">
        <img src="../images/itaka.jpg" alt="Los Angeles" />
        <div class="carousel-caption">
          <h3>New York 1.2</h3>
          <p>We love the Big Apple!</p>
        </div>
      </div> -->
    </div>

    <!-- Left and right controls -->
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getPortifolio']),
    },
    filters: {
        portcentagem: function(name) {
            let valor = name * 10
            return valor.toString()+'%'
        }
    }
}
</script>