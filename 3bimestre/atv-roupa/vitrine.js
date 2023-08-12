var position_slide = 1; //posicao inicial = 1
        const all_slide = document.querySelector('#slide-both'); //variavel que mexera os slides
        const arrowL = document.querySelector('#arrow-left')
        const arrowR = document.querySelector('#arrow-right')

             arrowL.addEventListener('click', ()=>{
                position_slide -= 1;
                switch (position_slide){
                    case 1: 
                        arrowL.style.visibility = 'hidden';
                        arrowR.style.visibility = 'visible'
                        all_slide.style.translate ='0';
                    break;
                    case 2:
                        arrowL.style.visibility = 'visible';
                        arrowR.style.visibility = 'visible'
                        all_slide.style.translate ='-100vw';
                    break;
                    case 3: 
                        arrowL.style.visibility = 'visible';
                        arrowR.style.visibility = 'hidden';
                        all_slide.style.translate ='-200vw';
                    break;
                    default:
                        console.log('deu erro, a posicao do slide é diferente do esperado')
                        position_slide += 1; //cancelar a adição anterior
                    break;
                    }
                })
                
                // document.getElementById('cnpj_erro').style.visibility = "visible";
                
            arrowR.addEventListener('click', ()=>{
                position_slide += 1;
                switch (position_slide){
                    case 1: 
                        arrowL.style.visibility = 'hidden';
                        arrowR.style.visibility = 'visible'
                        all_slide.style.translate ='0';
                    break;
                    case 2:
                        arrowL.style.visibility = 'visible'
                        arrowR.style.visibility = 'visible'
                        all_slide.style.translate ='-100vw';
                    break;
                    case 3: 
                        arrowL.style.visibility = 'visible'
                        arrowR.style.visibility = 'hidden'
                        all_slide.style.translate ='-200vw';
                    break;
                    default:
                        console.log('deu erro, a posicao do slide é diferente do esperado')
                        position_slide -= 1; //cancelar a adição anterior
                    break;
                }
            })

        const allsec = document.querySelector('#allsecs') //elemento que controla os slides2
        const arrows2 = document.querySelector('.arrows2')
        const arrowright2 = document.querySelector('#arrow-right2')

        arrowright2.addEventListener('click',()=>{
            allsec.style.transform = 'translateX(-100vw)'; // faz mexer
            
            arrowright2.style.display = 'none'; //mudar visibilidade
            arrowleft2.style.display = 'block'; //mudar visibilidade
            arrows2.style.justifyContent = 'start';//muda a posição das setas
            console.log('right clicado');
        })
        const arrowleft2 = document.querySelector('#arrow-left2')
        arrowleft2.addEventListener('click',()=>{
            allsec.style.transform = 'translateX(0vw)'; //faz mexer
            //mudar visibilidade
            arrowright2.style.display = 'block'; //mudar visibilidade
            arrowleft2.style.display = 'none'; //mudar visibilidade
            arrows2.style.justifyContent = 'end'; //muda a posição das setas
            console.log('left clicado');
        })
        