class ControlaCarro{
    constructor(carro){
        this.carro = carro;
        console.log(carro);
        this.adicionaEventos();
    }
    adicionaEventos(){
        document.addEventListener('keydown',(e)=>{
            // movimentos só funcionam se o carro não tiver o display: none;
            const key = e.key;
            console.log(key)
            if(key === 'd' ||key === 'ArrowRight' &&!this.carro.classList.contains('d-none') ){
                this.moveDireita()
            }
            if(key === 's' ||key === 'ArrowDown' &&!this.carro.classList.contains('d-none') ){
                this.moveMeio()
            }
            if(key === 'a' ||key === 'ArrowLeft' &&!this.carro.classList.contains('d-none') ){
                this.voltaEsquerda()
            }
            console.log(this.dizPosicao());
        })
    }
    dizPosicao(){
        let coordenadas = {
            
            y: Math.round(this.carro.getBoundingClientRect().y),
            x: Math.round(this.carro.getBoundingClientRect().x),

        }
        
        return coordenadas;
    }
    tiraDisplayNone(){
        this.carro.classList.remove('d-none');
        let pedra = new Pedra(document.querySelector('#pedra'), this.dizPosicao().x, this);
        console.log(pedra);
    }
    moveDireita(){
        this.carro.className = 'moveDireita'
    }
    moveMeio(){
        this.carro.className = 'moveMeio'
    }
    voltaEsquerda(){
        this.carro.className = '';
    }
}
let carro = new ControlaCarro(document.querySelector('#carro'));

let timer = document.querySelector('#contador');



controlatimer = setInterval(()=>{
    //console.log(timer.innerText)
    timer.innerText--
    if(timer.innerText == "GO!!!"){
        
    }
    if(timer.innerText==0){
        timer.innerText = "GO!!!";
        clearInterval(controlatimer);
        setTimeout(function(){
            timer.classList = 'd-none';
            carro.tiraDisplayNone();
        },1000)

        
    }
},1500);



