
class Pedra{
    constructor(nodeEl, posicaoXCarro, carro){
        this.pedra = nodeEl;
        this.definePosicao(posicaoXCarro);
        this.carro = carro;
        document.querySelector('#')
    }
    definePosicao(posicao){
        function random(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
        setInterval(()=>{
            let pos123 = random(1,3);
        //this.pedra.style.top = '100px';
        this.pedra.style.left = posicao + 'px';
        if(pos123===1){
            this.pedra.style.transform="translateX(-197px)";
            
        }
        if(pos123===3){
            this.pedra.style.transform = "translateX("+  (197*1.4) +"px)";
        }else{
           
        }
        
        this.pedra.classList.remove('d-none');
        if(this.pedra.style.animationName=='anima-desce'){
            this.pedra.style.animationName='';
            this.pedra.style.transform = '';
        }else{
            this.pedra.style.animationName = 'anima-desce'
        }
        
        },1000)
    }
    
}