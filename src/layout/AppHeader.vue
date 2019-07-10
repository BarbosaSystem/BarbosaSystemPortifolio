<template>
    <div class="menu-fixo">
        <div class="container">
            <div class="lista-menu">
                <input type="checkbox" class="drop_input">
                <div class="menu1">
                    <!-- <span>home</span> -->

                    <router-link to="/home">
                    <span class="home">Home</span>
                        <i class="fas fa-home"></i>
                    </router-link>
                   <!--  <a href="/home">
                        
                    </a> -->
                </div>
                <div class="menu2">
                    <router-link to="/sobre">
                    <span class="sobre">Sobre</span>
                        <i class="fas fa-portrait"></i>
                    </router-link>
                    <!-- <a href="Portifolio">
                        <span class="portifolio">Portifólio</span>
                        <i class="fas fa-portrait"></i>
                    </a> -->
                </div>
                <div class="menu3">
                    <router-link to="/portifolio">
                    <span class="portifolio">Portifólio</span>
                        <i class="fas fa-briefcase"></i>
                    </router-link>
                    <!-- <a href="/Sobre">
                        <span class="sobre">Sobre</span>
                        <i class="fas fa-briefcase"></i>
                    </a> -->
                </div>
                <div class="menu4">
                    <router-link to="/contato">
                    <span class="contato">Contato</span>
                        <i class="fas fa-at"></i>
                    </router-link>
                    <!-- <a href="/Contato" alt="Contato">
                        <span class="contato">Contato</span>
                        <i class="fas fa-at"></i>
                    </a> -->
                </div>
            </div>
            <div class="logo">
                <router-link to="/home">
                    <img src="../images/Logo-Topo.png" alt="Logo">
                </router-link>
                
            </div>
            <div class="links">
                <nav>
                    <ul class="links_tabs">
                        <router-link tag="li" to="/home" replace active-class="ativo">
                            <a>Inicio</a>
                        </router-link>
                        <router-link tag="li" to="/sobre" replace active-class="ativo">
                            <a>Sobre</a>
                        </router-link>
                        <router-link tag="li" to="/portifolio" replace active-class="ativo">
                            <a>Portifólio</a>
                        </router-link>
                        <router-link tag="li" to="/contato" replace active-class="ativo">
                            <a>Contato</a>
                        </router-link>
                        <!-- <li><a href="/home">Inicio</a></li>
                        <li><a href="/sobre">Sobre</a></li>
                        <li><a href="/portifolio">Portifólio</a></li>
                        <li><a href="/contato">Contato</a></li> -->
                    </ul>
                </nav>

                <ul class="social">
                    <li>
                        <a href="#"><i class="fab fa-linkedin"></i></a>
                    </li>
                </ul>

            </div>
        </div>
    </div>
</template>