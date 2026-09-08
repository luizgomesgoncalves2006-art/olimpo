// ========================================
// CT OLIMPO
// ANIMAÇÃO AO ROLAR A PÁGINA
// ========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // ========================================
        // ELEMENTOS QUE SERÃO ANIMADOS
        // ========================================

        const elementos =
            document.querySelectorAll(

                ".sobre h2, " +
                ".sobre p, " +

                ".treinos h2, " +
                ".card, " +

                ".horarios h2, " +
                ".horarios .secao-subtitulo, " +
                ".horario-card, " +

                ".feedbacks h2, " +
                ".feedbacks .secao-subtitulo, " +
                ".feedback-card, " +

                ".diferenciais h2, " +
                ".diferencial, " +

                ".comunidade-imagem, " +
                ".comunidade-texto, " +

                ".contato h2, " +
                ".contato > p, " +
                ".btn-contato"

            );


        // ========================================
        // PREPARA OS ELEMENTOS
        // ========================================

        elementos.forEach(
            function (elemento) {

                elemento.classList.add(
                    "revelar"
                );

            }
        );


        // ========================================
        // OBSERVADOR
        // ========================================

        const observador =
            new IntersectionObserver(

                function (entradas) {

                    entradas.forEach(
                        function (entrada) {

                            if (
                                entrada.isIntersecting
                            ) {

                                entrada.target
                                    .classList
                                    .add("ativo");


                                /*
                                PARA DE OBSERVAR
                                DEPOIS DA ANIMAÇÃO
                                */

                                observador.unobserve(
                                    entrada.target
                                );

                            }

                        }
                    );

                },

                {
                    threshold: 0.12
                }

            );


        // ========================================
        // COMEÇA A OBSERVAR
        // ========================================

        elementos.forEach(
            function (elemento) {

                observador.observe(
                    elemento
                );

            }
        );


    }
);