function Titulo(){
    const Hoje = new Date()
    const Agora = Hoje.getDay()
    let mensagem

    if (Agora % 2 == 0){
        mensagem = 'Hoje é par! ~Mayumi'
        console.log("par")
    }else{
        mensagem = 'Hoje é impar! ~Mayumi'
        console.log("impar")
    }
    document.title = mensagem
}
var titleActive = false
setInterval(()=>{
    if (titleActive == true){
        document.title = 'Dia das Crianças 12/10'
        titleActive = false
    }else{
        Titulo()
        titleActive = true
    }
},2000)