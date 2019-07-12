import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        principal : 
            {   
                tituloNegrito: 'Barbosa', 
                tituloComum: 'systems', 
                tags: ['Solução', 'Entrega', 'Compartilhamento']
            },
        sobre:
            {
                foto: 'https://static.quizur.com/i/b/575378c0be3298.40989163download.jpg',
                descricao: 'Me chamo Leonardo Barbosa de Oliveira, tenho 30 anos. Formei em 2018 no curso de sistema de informação.',
                Habilidades: [
                    {
                        imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/200px-HTML5_logo_and_wordmark.svg.png',
                        imagem_titulo: 'HTML 5',
                        nivel_habilidade: 5
                    }
                ]
            }
        ,
        portifolio: [
            {
                codigo: 1,
                imagem_empresa: 'http://escolapios.org.br/images/noticias/capa_itaka_novo_jeito.jpg',
                nome_empresa: 'Itaka',
                descricao_empresa: 'Unidade Governador Valadares'
            },
            {
                codigo: 2,
                imagem_empresa: 'http://escolapios.org.br/images/noticias/capa_itaka_novo_jeito.jpg',
                nome_empresa: 'Itaka',
                descricao_empresa: 'Unidade Governador Valadares'
            }
        ],
        contato:[
            {
                nome: 'Leonardo Barbosa',
                email: 'leobo@hotmail.com',
                telefone: '(33)987013525',
                tipo_contato: 'Orçamento',
                mensagem: 'Quero adquirir seu sistema'
            }
        ]
    },
    mutations: {

    },
    actions: {
    },
    getters: {
        getContato (state){
            return state.contato
        },
        getPrincipal (state){
            return state.principal
        },
        getPortifolio (state){
            return state.portifolio
        },
        getSobre (state){
            return state.sobre
        }
    }

})