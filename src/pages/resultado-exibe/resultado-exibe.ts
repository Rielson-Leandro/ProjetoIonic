import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-resultado-exibe',
  templateUrl: 'resultado-exibe.html',
})
export class ResultadoExibePage {

  diseases = [
    { title: "Resumo", description: "Objetivo: Avaliar os resultados obtidos com o protocolo de reabilitação acelerada, adaptado às condições de clínica, em pacientes submetidos à operação de reconstrução do ligamento cruzado anterior. Métodos: Foram incluídos 30 pacientes, praticantes de atividade esportiva recreacional, submetidos à operação de reconstrução do ligamento cruzado anterior por meio do tendão patelar. Todos fizeram a reabilitação com o mesmo protocolo de tratamento e no mesmo local. A avaliação isocinética em diferentes ângulos foi realizada antes da operação e no 4° mês de pós-operatório utilizando dinamômetro isocinético computadorizado da marca Cybex Norm. Resultados: As avaliações no pré-operatório em média demonstraram: pico de torque flexor 93% a 60°/s e 97,3% a 180°/s; extensor 87,3% a 60°/s e 94,7% a 180°/s; potência nos músculos flexores de 93,3% e nos extensores de 96,7%; trabalho muscular dos flexores de 91,7% e nos extensores de 90,3%; o ângulo do pico de torque flexor de 28,7°, na musculatura extensora o ângulo foi de 62,2°; pico de torque excêntrico nos flexores de 78,3% e nos extensores de 12,8%. Com quatro meses de pós-operatório os resultados obtidos em média foram: pico de torque flexor 95,4% a 60°/s e 97,1% 180°/s; extensor 70% a 60°/s e 75,7% a 180°/s; potência nos músculos flexores de 97,1% e nos extensores de 79,8%; trabalho muscular dos flexores de 94,2% e nos extensores de 94,2%; pico de torque excêntrico dos flexores de 84% e nos extensores de 24,2%; o ângulo do pico de torque flexor foi a 27,3°; na musculatura extensora o ângulo foi de 61,7°. Conclusão: Os resultados demonstraram que os pacientes tratados com o protocolo adaptado apresentam resultados semelhantes aos obtidos com o protocolo original em relação às condições musculares."},
    { title: "Introdução", description: "O ligamento cruzado anterior (LCA) é responsável por 86% da restrição do deslocamento anterior da tíbia. A ruptura deste ligamento causa instabilidade crônica do joelho, a qual se não tratada pode evoluir para lesão meniscal, degeneração articular e modificações artríticas 1. A lesão deste ligamento é bastante comum no meio esportivo, principalmente nos esportes coletivos, a instabilidade causada pela sua ruptura impossibilita a prática de atividades esportivas que façam o movimento de pivot (giro sobre o próprio eixo). Dentre as várias técnicas cirúrgicas de reconstrução para recuperar a estabilidade, a operação utilizando o tendão patelar tem a preferência dos cirurgiões, sendo a mais utilizada na atualidade. Nessa técnica cirúrgica o ligamento rompido é substituído pelo 1/3 médio do tendão patelar, sendo fixado em suas extremidades por dois parafusos de interferência. A revascularização deste neoligamento inicia-se na 2ª semana e o processo de “ligamentização” prolonga-se até dois anos de pós-opera-tório³. Em estudo animal observou-se que o neo-liga-mento passava por processo de necrose avascular o qual só atingiria a fase de ligamentização aos seis meses estando portanto mais suscetível à rupturas nesta fase. Assim sen-do os protocolos de reabilitação eram bastante conserva-dores em relação ao tempo de recuperação do movimento de extensão do joelho, exercícios com carga, apoio e libe-ração para atividade esportiva. Mas os achados de Rougraff et al.  através de análise histológica do neoligamento em humanos, demonstraram que, diferente dos estudos em animais, o enxerto em humanos não apresenta estágio de necrose completa. Existe sim, necrose da porção central do enxerto, porém a porção superficial encontra-se claramente viável, o que é observado pela proliferação celular e a neovascularização proeminente. O que permite concluir que o enxerto está parcialmente viável a partir da 3ª semana de pós-operató-rio. A retirada do 1/3 médio do tendão patelar, a presença de dor, a própria intervenção cirúrgica, entre outros fatores, levam à atrofia muscular pós-operatória, aco-metendo principalmente o grupo extensor do joelho 5 . A força do quadríceps apresenta correlação significativa com a estabilidade funcional do joelho, antes e após a operação. Por isso, a recuperação da condição muscular tem sido uma grande preocupação pós-operató-ria. Muitos protocolos de reabilitação têm sido pro-postos para evitar as complicações pós-cirúrgicas e recuperar a condição funcional pré-operatória dos pacientes. Em 1992, Shelbourne e Nitz faziam a reabilitação de um modo conservador onde no pós-operatório era feita a  imobilização por um período de seis a oito semanas. A partir de 1993 o programa de reabilitação foi modificado e a imobilização foi substituída pelo uso imediato do CPM (continuos passive motion). Nos dois anos seguintes o programa de reabilitação sofreu algumas pequenas modificações, pois observou-se que os pacientes mais ousados, e que não respeitaram os prazos determinados pelo progra-ma, evoluíram de maneira mais precoce e recuperaram a função normal do joelho em menor tempo e sem adquirir instabilidade. Baseados nestas observações Shelbourne e Nitz, fizeram um estudo comparando dois tipos de protocolo de reabilitação, um mais conservador e outro acelerado. O grupo de pacientes submetidos ao programa acelerado recuperou a extensão do joelho mais rapidamente, com isso houve menos casos de complicação onde a perda da extensão levava a nova intervenção cirúrgica. Os exercícios em cadeia cinética fechada utilizados no protocolo acelerado também diminuíram as dores anteriores do joelho e aumentaram a estabilidade subjetiva, além de recuperar a força do quadríceps mais rapidamente. Shelbourne e Gray também observaram as vantagens da mobilização e o fortalecimento precoce no pós-operatório imediato. O objetivo deste trabalho foi verificar os benefícios do protocolo de reabilitação acelerada em pacientes submetidos à operação de reconstrução do ligamento cru-zado anterior, por meio do tendão patelar, através da avaliação isocinética aplicada no pré-operatório e com quatro meses de pós-operatório." },
    { title: "Métodos", description: "Após assinatura do termo de consentimento fo-ram avaliados 30 pacientes, praticantes de atividade es-portiva recreacional, submetidos à operação de reconstrução do ligamento cruzado anterior por meio do tendão patelar, entre 2002 e 2004. Todos os pacientes fizeram a reabilitação com o mesmo protocolo de tratamento e no mesmo local. A avaliação isocinética foi realizada antes da cirurgia e no 4° mês de pós operatório. Neste protocolo (Tabela 1), a primeira semana teve o objetivo de atingir  90° de flexão, controlar a dor e o derrame articular. No primeiro mês iniciou-se propriocepção em apoio bipodal com o objetivo de normalização da marcha. A hidroterapia foi incluída a partir da retirada dos pon-tos e da cicatrização completa dos tecidos. Com dois meses foi realizada a avaliação isocinética utilizando as velocidades angulares de 180 e 240°/s e para aqueles que obtiveram déficit não superior a 35% iniciaram-se os exercícios com trote em linha reta, evoluindo para trote com mudança de direção e em seguida exercícios com bola. No terceiro mês foi iniciada a musculação com ângulo articular e cargas controladas. Ao final do quarto mês foi feita nova avaliação isocinética, com velocidade angular de 60, 180 e 240°/s no modo concêntrico e 60°/s no modo excêntrico. Manteve-se a musculação e se o déficit muscular do grupo extensor não fosse superior a 35% na velocidade angular de 60°/s, iniciava-se o retorno progressivo as atividades esportivas. Os pacientes avaliados eram do sexo masculino, com idade média de 30,9 +/- 9,4 anos, peso médio 79,3 +/ - 8,8 kg, altura média 1,76 +/- 0,06 m, e índice de massa muscular 25,5 +/- 2,2. Os pacientes foram avaliados em um dinamômetro isocinético computadorizado da marca Cybex Norm (Lumex Inc., Ronkokoma, NY, USA). A posição de avaliação foi sentado com banco reclinado a 5°, o tronco e coxa firmemente fixadas através de tiras próprias. O eixo de rotação do braço de alavanca do dinamômetro alinhado de maneira visual ao côndilo lateral femoral e o membro inferior fixado ao braço de ala-vanca do dinamômetro na região maleolar. As velocidades angulares utilizadas foram de 60°/ s, 180°/s e 240°/s no modo concêntrico e 60°/s no modo excêntrico. Os pacientes executaram algumas repetições dos movimentos para a familiarização com o aparelho. Na avaliação propriamente dita, foram feitos cinco movimentos de flexo-extensão do joelho em cada velocidade angular. Ambos os membros foram avaliados e comparados. A avaliação foi precedida de exercício de bicicleta (10 minutos) e exercícios de alongamentos para os músculos avaliados." },
  ];

  tabela = [
    { title: "Resultados", description: "Os resultados obtidos na avaliação isocinética são referentes ao membro operado em relação ao membro contralateral não lesionado. Na tabela 2 estão listados os resultados do pico máximo flexor pré e pós-operatório nas velocidades angu-lares de 60°/s e 180º/s; da avaliação pré e pós-operatória do pico máximo extensor nas velocidades de 60º/s e 180º/s; da avaliação da potência pré e pós-operatória nos músculos flexores e extensores; do trabalho muscular a 60/°s na melhor repetição executada nos músculos flexores e extensores no pré e pós-operatório; dos ângulos do pico de torque flexor e extensor no pré e no pós-operatório; do Protocolo de reabilitação adaptado às condições clínicas.", 
    tabela: "1ª SEMANA", descricaoTabela: "Controle do edema e derrame articular Controle da dor Controle do quadríceps ADM = 90", 
    tratamento:"Tratamento", descricaoTrat: "Crioterapia Exercícios de ADM passiva e ativa para flexão e hiperextensão Mobilização de patela Flexo/extensão tornozelo ativa Contração isométrica do quadríceps Exercícios de controle do quadríceps Mini agachamentos Heel prop extension Marcha com 2 muletas",
    
    tabela1: "1ª MÊS", descricaoTabela1: "adM = 0 a 120° atividades limitadas Prevenir derrame articular Padrão de marcha normal", 
   
    tabela2:"2ª SEMANA", descricaoTabela2: "Propriocepção na bola Elevação da perna com peso Bicicleta Treino de marcha Alongamentos",
    tabela3:"3ª SEMANA", descricaoTabela3: "Iniciar hidroterapia Esteira",
    tabela4:"4ª SEMANA", descricaoTabela4: "semana Propriocepção em apoio bipodal – dynadisc",
    tabela5:"5 A 8 SEMANAS", descricaoTabela5: "Mobilidade = Membro oposto Controle de derrame articular Recuperação da força muscular",
    tratamento1:"Tratamento", descricaoTrat1: "Propriocepção em apoio monopodal Exercícios extensão terminal – CCA Exercícios em cadeia cinética fechada ",
   
    tabela6:"2 MESES", descricaoTabela6: "Déficit de pico de torque = 35% Avaliação isocinética com velocidade angular 180°/s",
    tratamento2:"Tratamento", descricaoTrat2: "Intensificar exercícios de força e alongamentos Iniciar trote em linha reta Trote com mudança de direção Exercícios com bola",
    tabela7:"3 MESES", descricaoTabela7: "Recuperar força muscular Melhora da propriocepção",
    tratamento3:"Tratamento", descricaoTrat3: "Iniciar musculação Intensificar exercícios proprioceptivos Intensificar exercícios específicos do esporte praticado",
    tabela8:"4 MESES", descricaoTabela8: "Avaliação isocinética com déficit de força muscular máx. de 25 a 35%",
    tratamento4:"Tratamento", descricaoTrat4: "Retorno progressivo ao esporte",
    },

  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  shownGroup = null;

  toggleGroup(group) {
    if (this.isGroupShown(group)) {
        this.shownGroup = null;
    } else {
        this.shownGroup = group;
    }
};
isGroupShown(group) {
    return this.shownGroup === group;
};


  ionViewDidLoad() {
    console.log('ionViewDidLoad ResultadoExibePage');
  }

}
