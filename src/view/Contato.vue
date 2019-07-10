<template>
    <section class="contato">
        <div class="container">
            <div class="tire-duvidas">
                  <div class="imagem-contato">
                      <img src="../images/tira-duvidas-01.png" alt="">
                  </div>
                  <p>Entre em contato:</p>
              </div>
            <!-- <div class="tire-duvidas">
                <img src="../images/tira-duvidas-01.png" alt="">
                <p>Dúvidas?</p>
                <p>Entre em contato:</p>
            </div> -->
            <div class="formulario">
                <!-- <h1>Preencha o formulário:</h1> -->
                <form>
                    <div class="form-input">
                        <input class="form-control" type="text" placeholder="Nome" autocomplete="off" required>
                    </div>
                    <div class="form-input">
                        <input class="form-control" type="email" placeholder="E-mail">
                    </div>
                    <div class="form-input">
                        <input class="form-control" placeholder="Telefone" type="number">
                    </div>
                    <div class="form-input">
                        <select class="form-control">
                            <option>Tipo de contato</option>
                            <option>Orçamento</option>
                            <option>Sugestão</option>
                            <option>Outras Informações</option>
                        </select>
                    </div>
                    <div class="form-text">
                        <textarea class="form-control" placeholder="Deixe sua mensagem..." rows="3"></textarea>
                    </div>

                    <div class="form-button">
                        <button class="botao medio"><i class="fa fa-arrow-right"></i> Enviar Contato</button>
                    </div>
                </form>
                <div class="form-result" style="display: none">
                    <div class="sucesso">
                        <i class="fa fa-info-circle"></i>
                        <p>Seu contato foi enviado com sucesso.</p>
                    </div>
                    <div class="error">
                        <i class="fa fa-info-circle"></i>
                        <p>Preencha todos os campos obrigatórios.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>
