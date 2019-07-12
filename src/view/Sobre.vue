<template>
    <section class="sobre" >
        <div class="container">
            <div class="flipcard v foto">
                <div class="foto">
                    <div class="front">
                        <!-- <img src="../images/foto-elipse.jpg" alt=""> -->
                        <img v-bind:src="getSobre.foto" alt="">
                    </div>
                    <!-- <div class="back">
                      <img src="images/foto-elipse_old.png" alt="">
                    </div> -->
                </div>
            </div>
            <!--<div class="itens">
                <div class="imagem">
                    <img src="images/foto-elipse.jpg" alt="Foto-Miolo">
                </div>
                 <div class="icone-lapis">
                    <i class="fa fa-heart"></i>
                </div>
                <div class="icone-codigo">
                    <i class="fa fa-code"></i>
                </div>
            </div>-->
            <div class="sobre-mim">
                <div class="textos">
                    <p class="text-titulo">Um pouco sobre mim...</p>
                    <!-- <p><strong>Lorem Ipsum</strong> é simplesmente uma simulação de texto da indústria tipográfica
                        e de impressos,
                        e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma
                        bandeja
                        de tipos e os embaralhou para fazer um livro de modelos de tipos. </p> -->
                        <p>{{getSobre.descricao}}</p>
                    <!--<a href="#" class="botao medio">
                        <i class="fa fa-eye"> Continue Lendo</i>
                    </a>-->
                </div>
            </div>
            <div class="tecnico">
                <div class="habilidades" v-for="(habil, index) in getSobre.Habilidades" :key="index">
                    <div class="icon">
                        <!-- <i class="html5 fab fa-html5"></i> -->
                        <img class="icon-image" :src="habil.imagem">
                    </div>
                    <div class="icon-name">
                        <!-- <p>Html 5 - 50%</p> -->
                        <p>{{habil.imagem_titulo}} - {{ habil.nivel_habilidade | portcentagem}}</p>
                    </div>
                    <div class="barra">
                        <span :class="`habilidade-`+habil.nivel_habilidade" alt="50%"></span>
                    </div>
                </div>
                <!-- <div class="habilidades">
                    <div class="icon">
                        <i class="html5 fab fa-html5"></i>
                    </div>
                    <div class="icon-name">
                        <p>Html 5 - 50%</p>
                    </div>
                    <div class="barra">
                        <span class="habilidade-5" alt="40%"></span>
                    </div>
                </div> -->
                <div class="habilidades">
                    <div class="icon">
                        <i class="css3 fab fa-css3"></i>
                    </div>
                    <div class="icon-name">
                        <p>CSS3 - 50%</p>
                    </div>
                    <div class="barra">
                        <span class="habilidade-5"></span>
                    </div>
                </div>
                <div class="habilidades">
                    <div class="icon">
                        <i class="aspnet fab fa-windows"></i>
                    </div>
                    <div class="icon-name">
                        <p>Asp.Net - 60%</p>
                    </div>
                    <div class="barra">
                        <span class="habilidade-6"></span>
                    </div>
                </div>
                <div class="habilidades">
                    <div class="icon">
                        <i class="git fab fa-git"></i>
                    </div>
                    <div class="icon-name">
                        <p>GitHub - 30%</p>
                    </div>
                    <div class="barra">
                        <span class="habilidade-3"></span>
                    </div>
                </div>
                <div class="habilidades">
                    <div class="icon">
                        <i class="js fab fa-js"></i>
                    </div>
                    <div class="icon-name">
                        <p>JavaScript - 40%</p>
                    </div>
                    <div class="barra">
                        <span class="habilidade-4"></span>
                    </div>
                </div>
                <div class="habilidades">
                    <div class="icon">
                        <img class="icon-image" src="../images/xamarin.png">
                    </div>
                    <div class="icon-name">
                        <p>Xamarin - 20%</p>
                    </div>
                    <div class="barra">
                        <span class="habilidade-2"></span>
                    </div>
                </div>
                <div class="habilidades">
                    <div class="icon">
                        <img class="icon-image" src="../images/Delphi.png">
                    </div>
                    <div class="icon-name">
                        <p>Delphi - 40%</p>
                    </div>
                    <div class="barra">
                        <span class="habilidade-4"></span>
                    </div>
                </div>
                <div class="habilidades">
                    <div class="icon">
                        <img class="icon-image" src="../images/sass.png">
                    </div>
                    <div class="icon-name">
                        <p>Sass - 30%</p>
                    </div>
                    <div class="barra">
                        <span class="habilidade-3"></span>
                    </div>
                </div>
                <div class="habilidades">
                  <div class="icon">
                      <img class="icon-image" src="../images/vue.png">
                  </div>
                  <div class="icon-name">
                      <p>VueJs - 40%</p>
                  </div>
                  <div class="barra">
                      <span class="habilidade-4"></span>
                  </div>
              </div>
            </div>
        </div>
    </section>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getSobre']),
    },
    filters: {
        portcentagem: function(name) {
            let valor = name * 10
            return valor.toString()+'%'
        }
    }
}
</script>
