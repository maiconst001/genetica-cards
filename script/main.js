const app = new Vue({
    el: "#app",
    mounted: function () {
        this.particle();
        this.musicTog()
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
        mesage: 'Olá, Seja bem vindo!',
        gainMessage: 'vitória',
        mute: true,

        gainNum: 0,
        game_data: [
            {
                quest: 'Síndrome de Down',
                resp: 'Trissomia do cromossomo 21',
                help: 'Normalmente, essa síndrome ocorre nos bebês das gestantes acima de 40 anos de idade'
            },
            /*{
                quest: 'Síndrome de Klinefelter',
                resp: 'Cópia extra do cromossomo X',
                help: 'é uma condição genética bem rara que só afeta homens'
            },
            {
                quest: 'Síndrome de Turner',
                resp: 'Mulher nasce com apenas um cromossomo X',
                help: 'Ela é uma condição genética que só ocorre em mulheres '
            },
            {
                quest: 'Anemia falciforme',
                resp: 'Hemoglobina em níveis abaixo do normal',
                resp_info: 'A hemoglobina é um dos principais componentes do sangue, é responsável pela coloração avermelhada e pelo transporte da molécula de oxigênio',
                help: 'faz com as hemácias produzidas tenham formato de foice'
            },
            {
                quest: 'Doença de Huntington',
                resp: 'Rompimento das células nervosas cerebrais',
                help: 'Sua principal característica é a degeneração progressiva dos neurônios e células do sistema nervoso central'
            },
            {
                quest: 'Fibrose cística',
                resp: 'alteração no gene CFTR',
                help: 'causa acúmulo de muco no trato respiratório, produzindo inflamações e infecções que podem destruir o tecido pulmonar e outros.'
            },
            {
                quest: 'Síndrome de Patau',
                resp: 'trissomia do cromossomo 13',
                help: 'provoca deficiência mental grave e defeitos físicos'
            },
            {
                quest: 'Síndrome de Edwards',
                resp: 'trissomia do cromossomo 18',
                help: 'Os sintomas incluem baixo peso ao nascer, cabeça pequena de formato anormal e defeitos congênitos em órgãos, muitas vezes fatais'
            },*/
        ],

        historic_card: [],
        cards_opened: [],
        finished: 0,
        help_instance: undefined

    },


    methods: {

        toHome: function () {
            this.gainNum =0;

            
            let help = document.querySelector('.help')
            help.hidden = false

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
            let ef = Math.round(Math.random() * 3)
            if (ef ==0 )
                return ' StartRight';
            if (ef == 1 )
                return ' StartRightbottom';
            if (ef ==2 )
                return ' StartLeftbottom';
            if (ef ==3 )
                return ' StartLefttop';
            
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
            this.alterMessage('Bom jogo...')
            let carrousel = document.querySelector('.carrouselin')
            carrousel.classList.add('noCartas')

            let buttonStart = document.querySelector('.startGame')
            buttonStart.classList.add('noCartas')

            this.musicTog()


            let cartas = document.querySelector('.cartas')
            cartas.classList.remove('noCartas')

            let help = document.querySelector('.help')
            help.hidden = true
        }
    }
})