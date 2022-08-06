const app = new Vue({
    el: "#app",
    mounted: function () {
        this.getRec()
        this.alterBackMain()
        this.particle();
        this.musicTog();
        this.saveRec();
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, {
            duration: 400
        });

        this.help()
        var instance = M.Carousel.getInstance(elems[0]);
        
        setInterval(() => {
            instance.next()
        }, 10 * 1000);


        this.Read()


        var rd = document.querySelector('.cur')
        setInterval(() => {
            rd.classList.toggle('readToggle')
        }, 500);
        
        this.crazy()
    },

    data: {

        startStyle: {
            display: 'flex'
        },

        recorded: { // dados salvos no cache
            background_main: '0'
        },

        cardview: false,
        cardIndez: 8,


        mesage: 'Olá, Seja bem vindo!',
        gainMessage: 'vitória',
        mute: true,

        isEfect: true, // define se vai ter efeito nas cartas


        gainNum: 0,
        game_data: [
            {
                quest: 'Síndrome de Down',
                resp: 'Trissomia do cromossomo 21',
                help: 'Normalmente, essa síndrome ocorre nos bebês das gestantes acima de 40 anos de idade',
                defini: 'Também conhecida pelo nome de Trissomia do 21, a Síndrome de Down foi descoberta no ano de 1966, quando o médico britânico John Langdon Down apontou a presença extra de um cromossomo no número já previsto para uma célula normal. As características físicas de um bebê com Down são: olhos amendoados, baixa estatura, sendo as mãos e os pés pequenos e achatados, pescoço de aparência larga e achatada, e orelhas pequenas localizadas numa posição mais inferior da cabeça. Sinais como a hipotonia muscular, isto é, diminuição do tônus e da força, predisposição ao desenvolvimento de doenças cardiovasculares e problemas respiratórios e lentidão no processo de aprendizagem também são sinais da síndrome.',
            },
            {
                quest: 'Síndrome de Klinefelter',
                resp: 'Cópia extra do cromossomo X',
                help: 'é uma condição genética bem rara que só afeta homens',
                defini: 'Esta é uma condição genética extremamente rara, que só afeta homens. Trata-se de uma síndrome acarretada por uma cópia extra do cromossomo X que afeta de um a quatro indivíduos do sexo masculino nascidos em uma amostra de mil bebês. Basicamente, devido à presença de mais um cromossomo responsável pela determinação do sexo do ser humano, neste caso, do feminino, bebês portadores da síndrome apresentam baixos níveis de testosterona, o que acarreta em uma menor quantidade de pelos corporais e faciais, além do desenvolvimento incomum das mamas. Ou seja, esses meninos apresentam características sexuais secundárias pouco desenvolvidas. Além da deficiência funcional dos testículos, que causa uma produção ínfima — às vezes quase nula — de espermatozóides, pessoas com a síndrome também tendem a possuir um retardo mental leve, além de dificuldades no aprendizado. No âmbito da fertilidade, o quadro pode ser revertido com tratamentos específicos.',
            },
            {
                quest: 'Síndrome de Turner',
                resp: 'Mulher nasce com apenas um cromossomo X',
                help: 'Ela é uma condição genética que só ocorre em mulheres ',
                defini: 'A síndrome de Turner, descoberta em 1938 por Henry Turner diz respeito à uma condição genética que acomete somente mulheres, na qual o cromossomo X é ausente ou parcialmente ausente. Seu nível de ocorrência também é pequeno: a cada 2.500 nascimentos, apenas uma a apresentará, sem contar os abortos espontâneos. A baixa estatura é uma das complicações clínicas das meninas que nascem com esta condição, que também apresentam puberdade deficiente, malformações das gônadas, infertilidade e  problemas cardíacos.',
            },
            {
                quest: 'Anemia falciforme',
                resp: 'Hemoglobina em níveis abaixo do normal',
                resp_info: 'A hemoglobina é um dos principais componentes do sangue, é responsável pela coloração avermelhada e pelo transporte da molécula de oxigênio',
                help: 'faz com as hemácias produzidas tenham formato de foice',
                defini: 'A anemia falciforme é uma doença genética e hereditária causada por anormalidade de hemoglobina dos glóbulos vermelhos. Eles perdem a forma de disco, ficando enrijecidos e deformados, tomando a forma de foice - daí  vem o nome da doença. Estes glóbulos alongados não conseguem passar através dos pequenos vasos sanguíneos, bloqueando a circulação do sangue em diversas partes e tecidos do corpo humano. Como resultado, os pacientes apresentam episódios de intensa dor, suscetibilidade às infecções, lesões orgânicas e, em alguns casos, a morte precoce.',
            },
            {
                quest: 'Doença de Huntington',
                resp: 'Rompimento das células nervosas cerebrais',
                help: 'Sua principal característica é a degeneração progressiva dos neurônios e células do sistema nervoso central',
                defini: 'A doença de Huntington é um distúrbio neurodegenerativo progressivo que acomete o sistema nervoso, levando a alterações motoras, cognitivas e psiquiátricas. O início dos sintomas se dá entre os 35 e 44 anos de idade, sendo caracterizado por coreia, distonia, incoordenação, declínio cognitivo e dificuldades comportamentais.',
            },
            {
                quest: 'Fibrose cística',
                resp: 'alteração no gene CFTR',
                help: 'causa acúmulo de muco no trato respiratório, produzindo inflamações e infecções que podem destruir o tecido pulmonar e outros.',
                defini: 'Ela é também conhecida como Doença do Beijo Salgado, uma doença que faz com que o corpo produza muco de 30 a 60 vezes mais espesso que o normal. Isso leva ao acúmulo de bactérias e germes, causando inflamações e infecções recorrentes, trazendo danos (até irreversíveis) aos órgãos acometidos. Além disso, provoca alterações na digestão dos alimentos, levando a quadros de desnutrição, baixo ganho de peso e qualidade de vida ruim. É uma doença genética crônica, que causa alteração na função de uma proteína da superfície das células responsável por transportar cloretos. Apesar de ser mais comum nos pulmões e no sistema digestivo, a fibrose cística é uma doença sistêmica. Dessa forma, pode afetar também pâncreas, glândulas sudoríparas, intestino e sistema reprodutor.',
            },
            {
                quest: 'Síndrome de Patau',
                resp: 'trissomia do cromossomo 13',
                help: 'provoca deficiência mental grave e defeitos físicos',
                defini: 'Também chamada de trissomia do 13 devido a um acréscimo do cromossomo 13,  a síndrome de Patau possui este nome em homenagem ao geneticista alemão Klaus Patau, que a descobriu em 1960. Extremamente rara, estudos apontam que a incidência da síndrome corresponde a um caso para cada cinco mil nascimentos. Crianças que vem ao mundo com esta condição, geralmente, vivem de 2 a 5 dias, quando conseguem nascer, pois, geralmente, é mais comum que morram ainda dentro do útero da mãe, devido às complicações serem extremamente letais. Globo ocular pequeno, fenda do palato labial, maior número de dedos, malformações graves no sistema nervoso central e no sistema urinário-reprodutivo, retardo mental, problemas cardíacos gravíssimos e rins policísticos são alguns dos sinais mais evidentes da síndrome. Caso a criança nasça, o tratamento é feito, basicamente, para tentar controlar as complicações mais sérias.'
            },
            {
                quest: 'Síndrome de Edwards',
                resp: 'trissomia do cromossomo 18',
                help: 'Os sintomas incluem baixo peso ao nascer, cabeça pequena de formato anormal e defeitos congênitos em órgãos, muitas vezes fatais',
                defini: 'Também chamada de trissomia do 18, o nome científico se deve à existência de um cromossomo 18 extra e acomete um a cada 5 mil bebês nascidos vivos. Assim como no caso da síndrome de Down, a idade materna avançada também é um dos fatores que corroboram para o seu aparecimento. Mães com mais de 35 anos possuem maior predisposição para dar à luz bebês com a síndrome de Edwards. Algumas das implicações da síndrome são extremamente graves e, portanto, comprometem seriamente o desenvolvimento do bebê, mantendo sua expectativa de vida muito baixa. Baixo peso, cabeça pequena, má oxigenação do sangue arterial, tremores, convulsões, hérnia umbilical, fenda facial, problemas na formação do sistema digestivo, sola arredondada dos pés, defeitos congênitos graves em órgãos fundamentais como o coração são algumas delas. 95% dos bebês diagnosticados com síndrome de Edwards morrem antes mesmo de nascer e somente 5 a 10% completam o primeiro ano de vida.',
            },
            
        ],

        backgrounds: [
            'linear-gradient(to right top, #051937, #004d7a, #008793, #00bf72, #a8eb12)',
            'linear-gradient(to right, #0f2027, #203a43, #2c5364)',
        
        ],

        historic_card: [],
        cards_opened: [],
        finished: 0,
        help_instance: undefined

    },


    methods: {
        saveRec: function () {
          setInterval(() => {
            console.log('saved!')
            for (c in this.recorded) {
                localStorage.setItem(c, this.recorded[c])
            }
          }, 4000);  
        },

        getRec: function () {
          for (c in localStorage) {
            if (localStorage.getItem(c)) {
                let key = c
                let value = localStorage.getItem(c)
                this.recorded[key] = value
            }
          }  
        },

        alterBackMain: function(id) {
            if (id != undefined) this.recorded['background_main'] = id;
            let main = document.querySelector('.main')
            main.style.backgroundImage = this.backgrounds[this.recorded['background_main']]
        },


        viewCardInfo: function (key) {
          if (event.target.parentElement.classList.contains('active')){
            this.cardview = true
            if (key != 0) {
                this.cardIndez = key / 2
            }else this.cardIndez = key;
          }
        },

        rmCardEfects: function () {
            this.isEfect = false;
            let cards = document.querySelectorAll('.one')
            cards.forEach(e => {
                e.classList.remove('StartRight')
                e.classList.remove('StartLefttop')
                e.classList.remove('StartLeftbottom')
                e.classList.remove('StartRightbottom')

            })
        },

        toHome: function () {
            this.gainNum =0;

            
            let help = document.querySelector('.help')
            help.classList.remove('exithelp')

            this.alterMessage('Olá, Seja bem vindo!')

            let gainEfect = document.querySelector('.gainEfect')  
            gainEfect.style.display = 'none'

            let carrousel = document.querySelector('.carrouselin')
            carrousel.classList.remove('noCartas')

            let buttonStart = document.querySelector('.startGame')
            buttonStart.classList.remove('noCartas')

            this.musicTog()

            let cartas = document.querySelector('.cartas')
            cartas.classList.add('noCartas')

            let cards = document.querySelectorAll('.one')
            cards.forEach(e => {
                e.classList.remove('removing')
                e.classList.remove('opacityCard')
            })

            let latters = document.querySelectorAll('.gainzero')
            latters.forEach(e => {
                e.style.display = 'none'
            })
        },

        Read: function() {
            var abc = document.querySelector('.abc')
            abc.innerText = '' 
            let c = 0;
            let in_rd = setInterval(() => {
                if (this.mesage.length > c) {
                    abc.innerHTML += this.mesage[c]
                    c++
                }else {
                    clearInterval(in_rd)
                    let tm = setTimeout(() => {
                        c = 0
                        this.Read()
                    }, 4000);
                }
            }, 300);
        }, 

        particle: function () {
            let data = {
                "particles": {
                  "number": {
                    "value": 100
                  },
                  "shape": {
                    "type": "polygon"
                  },
                  "size": {
                    "value": 10,
                    "random": true
                  },
                  "line_linked": {
                    "enable": false
                  },
                  "move": {
                    "enable": true,
                    "speed": 2,
                    "direction": "bottom",
                    "straight": false
                  }
                }
            }
            let part = document.querySelector('.particlesJS');
            particlesJS('particlesJS', data); 
        },

        musicTog: function () {
            let music = document.querySelector('.music')
            if (this.mute) {
                music.pause()
                this.mute = false
            }else {
                music.play()
                this.mute = true
            } 
        },

        help: function () {
            let elems = document.querySelectorAll('.tap-target');
            let instances = M.TapTarget.init(elems, {});  

            this.help_instance = M.TapTarget.getInstance(elems[0]);
        },

        openHelp: function () {
          this.help_instance.open()  
        },

        effectgain: function () {
            
            let gainEfect = document.querySelector('.gainEfect')  
            gainEfect.style.display = 'flex'

            let latters = document.querySelectorAll('.gainzero')  
            let gain = setInterval(() => {
                latters[this.gainNum].style.display = 'initial'
                this.gainNum++;
                if (this.gainNum >= latters.length) {
                    clearInterval(gain)
                }
            }, 200);
        },

        crazy: function () {
          let ones = document.querySelectorAll('.one')
          let length = this.game_data.length

          ones.forEach(e =>{
            let i = Math.round(Math.random() * (length * 2))
            e.style.order = i
          })
        },

        closeAll: function (data) {
            setTimeout(() => {
                data.forEach(el =>{
                    let quest = el.querySelector('.carta')
                    let resp = el.querySelector('.ccontent')
    
                    quest.classList.remove('closecard')
                    resp.classList.remove('contentClosexard')
                })
            }, 800);
        },

        selAni(id) {
            if (this.isEfect) {
                let ef = Math.round(Math.random() * 3)
                if (ef ==0 )
                    return ' StartRight';
                if (ef == 1 )
                    return ' StartRightbottom';
                if (ef ==2 )
                    return ' StartLeftbottom';
                if (ef ==3 )
                    return ' StartLefttop';
            }else return '';
        },


        gain: function () {
            
            this.effectgain();
        },

        cardsound: function () {
          let ef = document.querySelector('.sound')
          if (!ef.paused == true) {
            ef.currentTime = 0
          }else {
            ef.play()
          }
        },

        closeCard: function (e) {
            let el = e.target
            e.preventDefault()
            
            this.historic_card.push(            {
                id: el.id,
                type: el.getAttribute('type')
            })

            this.cards_opened.push(el)
            this.cardsound()
            let quest = el.querySelector('.carta')
            quest.classList.toggle('closecard')

            let resp = el.querySelector('.ccontent')
            resp.classList.toggle('contentClosexard')


            let nHistiric

            if (this.historic_card.length >= 2) {
                nHistiric = this.historic_card
                this.historic_card = []
                

                setTimeout(() => {
                    if ((nHistiric[0]['type'] != nHistiric[1]['type']) && (nHistiric[0]['id'] == nHistiric[1]['id'])) {

                        this.finished++
                        let cards = document.querySelectorAll('#' + el.id)
                        cards[0].classList.add('removing')
                        cards[1].classList.add('removing')

                        setTimeout(() => {
                            cards[0].classList.add('opacityCard')
                            cards[1].classList.add('opacityCard')
                            if (this.finished >= this.game_data.length) {
                                this.gain()
                            }
                        }, 800);
                    }
                }, 800);

                
                this.closeAll(this.cards_opened)
                this.cards_opened = []
            }
        },

        alterMessage: function (txt) {
            let abc = document.querySelector(".abc");
            abc.innerHTML = ''
            this.mesage = txt  
        },

        startGame: function () {
            this.isEfect = true
            this.alterMessage('Bom jogo...')
            let carrousel = document.querySelector('.carrouselin')
            carrousel.classList.add('noCartas')

            let buttonStart = document.querySelector('.startGame')
            buttonStart.classList.add('noCartas')

            this.musicTog()


            let cartas = document.querySelector('.cartas')
            cartas.classList.remove('noCartas')

            let help = document.querySelector('.help')
            help.classList.add('exithelp')

            setTimeout(() => {
                this.rmCardEfects()
            }, 4000);
        }
    }
})
