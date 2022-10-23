/**
 * To do
 * 
 * Terminar bandeira: EUA, Brasil
 * Fazer bandeiras se adaptarem dinamicamente ao tamanho do Canvas
 */

////////CONSTANTS AND AMBIENT VARIABLES

/**@type {HTMLCanvasElement} */
const canvasHTML = document.getElementById("canvas");



//Fallback to get canvas context, recommended by Mozilla Docs
if (canvasHTML.getContext("2d")) {
    //var NOT reccomended. im using because scopes and i dont want everything inside a single if right now
    var ctx = canvasHTML.getContext("2d");
}
else {
    alert("Seu navegador não suporta Canvas :[");
}

//Main code
/**@type {HTMLDivElement} */

function Start()
{
    buttonListHTML = document.getElementById("button_list");
    buttonList = Array.from(buttonListHTML.getElementsByTagName("button"));

    //Tenho que chamar uma funcao anonima para chamar uma funcao normal com parametros... que besteira
    //buttonList[0].addEventListener("click", ()=>{DrawFlag(buttonList[0].value)});
    
    buttonList.forEach(button => {
        console.log(button, button.value);
        button.addEventListener("click",()=>{DrawFlag(button.value)} );
    });
    
}




/**
 * @param {string} flag A bandeira do país;
 * Efetivamente desenha a bandeira do país desejado.
 * NÃO use acentuação
 */
function DrawFlag(flag) {
    //Clear canvas for next flag
    ClearCanvas();

    flag = flag.toUpperCase();

    for (let i = 0; i < flagDrawPaths.length; i++) {
        if(flagDrawPaths[i][flag] != undefined)
        {
            console.log("Desenhando bandeira: ", flag)
            flagDrawPaths[i][flag].draw();        
        }        
    }
    

    
}

/**
 * @type {Array}
 * Este Array carrega consigo uma seqência de objetos.
 * Cada objeto possui um "ID", nomeado pelo nome do país/bandeira, que também é um objeto. 
 * Os países, que são objetos, carregam consigo (até então), apenas a função de desenhar, o 'draw'
 */
flagDrawPaths = [
    {"JAPAO" :
        {
            //Japao
            "draw" : () => {
                ctx.beginPath();
                ctx.arc(canvasHTML.width / 2, canvasHTML.height / 2, canvasHTML.height / 4, 0, Math.PI * 2, true);
                ctx.fillStyle = "#ff0000";
                ctx.fill();
                ctx.closePath();
            }
        }
    },
    {"FRANCA" :
        {
            //França
            "draw" : () => {
                ctx.beginPath();
                
                ctx.fillStyle = "#0055A4";
                ctx.fillRect(0, 0, canvasHTML.width / 3, canvasHTML.height);
                ctx.fill();

                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(canvasHTML.width / 3, 0, canvasHTML.width / 3, canvasHTML.height);
                ctx.fill();

                ctx.fillStyle = "#EF4135";
                ctx.fillRect(2 * canvasHTML.width / 3, 0, canvasHTML.width / 3, canvasHTML.height);
                ctx.fill();

                ctx.closePath();
            }
        }
    },
    {"COSTA RICA" :
        {
            //Costa Rica
            "draw" : () => {
                ctx.beginPath();
                
                ctx.fillStyle = "#001489";
                ctx.fillRect(0, 0, canvasHTML.width, canvasHTML.height / 6);
                ctx.fill();

                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, 1 * canvasHTML.height / 6, canvasHTML.width, canvasHTML.height / 6);
                ctx.fill();

                ctx.fillStyle = "#DA291C";
                ctx.fillRect(0, 2 * canvasHTML.height / 6, canvasHTML.width, canvasHTML.height / 6);
                ctx.fill();

                ctx.fillStyle = "#DA291C";
                ctx.fillRect(0, 3 * canvasHTML.height / 6, canvasHTML.width, canvasHTML.height / 6);
                ctx.fill();

                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, 4 * canvasHTML.height / 6, canvasHTML.width, canvasHTML.height / 6);
                ctx.fill();

                ctx.fillStyle = "#001489";
                ctx.fillRect(0, 5 * canvasHTML.height / 6, canvasHTML.width, canvasHTML.height / 6);
                ctx.fill();
                
                ctx.closePath();
            }
        }
    },
    {"INGLATERRA" :
        {
            //Inglaterra
            "draw" : () => {
                ctx.beginPath();
                
                ctx.fillStyle = "#CF081F";
                ctx.fillRect((canvasHTML.width / 2) - (canvasHTML.height / 12), 0, canvasHTML.width / 6, canvasHTML.height);
                ctx.fill();

                ctx.fillStyle = "#CF081F";
                ctx.fillRect(0, (canvasHTML.height / 2) - (canvasHTML.height / 12), canvasHTML.width, canvasHTML.height / 6);
                ctx.fill();

                ctx.closePath();
            }
        }
    },
    {"BRASIL" :
        {
            //Brasil
            "draw" : () => {
                let centerX =  canvasHTML.width / 2;
                let centerY = canvasHTML.height / 2;

                ctx.beginPath();

                ctx.fillStyle = "#009c3b";
                ctx.fillRect(0, 0, canvasHTML.width, canvasHTML.height);
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                
                ctx.fillStyle = "#ffdf00";
                ctx.moveTo(20, centerY);
                ctx.lineTo(centerX, 40);
                ctx.lineTo(canvasHTML.width - 20, centerY);
                ctx.lineTo(centerX, canvasHTML.height - 40);
                ctx.fill();
                ctx.closePath();

                ctx.beginPath();
                ctx.fillStyle = "#002776";
                ctx.arc(centerX, centerY, canvasHTML.height / 4, 0, 2 * Math.PI, true);
                ctx.fill();

                /*
                ctx.strokeStyle = "#FFFFFF";
                ctx.lineWidth = 10;
                ctx.arcTo(centerX, centerY - 50, centerX + 50, centerY + 50,   canvasHTML.height / 4)
                ctx.stroke();
                ctx.closePath();
                */
            }
        }
    },
    {"ISRAEL" :
        {
            //Israel
            "draw" : () => {
                //THIS flag units
                let flagWUnit = canvasHTML.width / 160;
                let flagHUnit = canvasHTML.height / 160;
                let aspectRatio = flagWUnit / flagHUnit;

                //Center reference
                let centerX =  canvasHTML.width / 2;
                let centerY = canvasHTML.height / 2;

                //Symbol Stroke ('t' = official notation. Check Wikipedia)
                let t = 5.5;
                //Diameter of symbol
                let d = 12 * t;
                //Width of circonscrit triangle where it touches the "circle". Check Wikipedia
                let w = (d * Math.sqrt(3)) / 2;


                ctx.beginPath();

                ctx.fillStyle = "#0038b8";
                ctx.fillRect(0, (15 * flagHUnit), canvasHTML.width, 25 * flagHUnit);
                ctx.fill();

                ctx.fillStyle = "#0038b8";
                ctx.fillRect(0, (120 * flagHUnit), canvasHTML.width, 25 * flagHUnit);
                ctx.fill();
                ctx.closePath();


                ctx.beginPath();

                ctx.lineWidth = t;
                ctx.strokeStyle = '#0038b8';

                ctx.moveTo(centerX, centerY - (d / 2 * flagHUnit));

                ctx.lineTo(centerX + (w / 2 * flagWUnit), centerY + 12 * flagHUnit);
                ctx.lineTo(centerX - (w / 2 * flagWUnit), centerY + 12 * flagHUnit);
                ctx.lineTo(centerX, centerY - (d / 2) * flagHUnit);

                
                ctx.moveTo(centerX, centerY + (d / 2 * flagHUnit));
                
                ctx.lineTo(centerX + (w / 2 * flagWUnit), centerY - 12 * flagHUnit);
                ctx.lineTo(centerX - (w / 2 * flagWUnit), centerY - 12 * flagHUnit);
                ctx.lineTo(centerX, centerY + (d / 2) * flagHUnit);
                

                ctx.stroke();
                ctx.closePath();
            }
        }
    },
    {"ESTADOS UNIDOS" :
        {
            //Estados Unidos
            "draw" : () => {
                ctx.beginPath();
                
                ctx.fillStyle = "#B31942";
                ctx.fillRect(0, 0, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, 1 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                ctx.fillStyle = "#B31942";
                ctx.fillRect(0, 2 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, 3 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                ctx.fillStyle = "#B31942";
                ctx.fillRect(0, 4 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, 5 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                ctx.fillStyle = "#B31942";
                ctx.fillRect(0, 6 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, 7 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                ctx.fillStyle = "#B31942";
                ctx.fillRect(0, 8 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, 9 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                ctx.fillStyle = "#B31942";
                ctx.fillRect(0, 10 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();
                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, 11 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                ctx.fillStyle = "#B31942";
                ctx.fillRect(0, 12 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                ctx.fillStyle = "#FFFFFF";
                ctx.fillRect(0, 13 * canvasHTML.height / 13, canvasHTML.width, canvasHTML.height / 13);
                ctx.fill();

                //Blue Stripe
                ctx.fillStyle = "#0A3161";
                ctx.fillRect(0, 0, 2 * canvasHTML.width / 5, 7 * canvasHTML.height / 13);
                ctx.fill();

                ctx.closePath();

                //Stars
                let currWidth = 30;
                let currHeight = 30;
                let distStars = 50;

                /**
                 * @todo Fazer as estrelas alinharem dinamicamente
                 */

                //drawStar(30, 30, 5, 15, 8);

                for (let i = 1; i <= 6; i++) {
                    for(let j = 1; j <= 5; j++){
                        drawStar(currWidth, currHeight, 5, 15, 8);
                        currWidth += distStars;
                    }
                    currWidth = 30;
                    currHeight += distStars;
                    
                }
                
                
            }
        }
    },
    {"TEST" :
        {
            "draw" : () => {
                //Test
                ctx.beginPath();
                ctx.arc(canvasHTML.width / 2, canvasHTML.height / 2, canvasHTML.height / 4, 0, Math.PI * 2, true);
                ctx.fillStyle = "#00ff00";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
];

function ClearCanvas()
{
    ctx.clearRect(0, 0, canvasHTML.width, canvasHTML.height);
}


//ESTE CÓDIGO FOI CRIADO POR markE no stackOverflow (e ligeiramente modificado para adequar ao meu codigo)
function drawStar(cx,cy,spikes,outerRadius,innerRadius){
    let rot = Math.PI/2*3;
    let x = cx;
    let y = cy;
    let step = Math.PI/spikes;

    ctx.beginPath();
    ctx.moveTo(cx,cy-outerRadius)
    for(i = 0; i < spikes; i++){
      x = cx+Math.cos(rot) * outerRadius;
      y = cy+Math.sin(rot) * outerRadius;
      ctx.lineTo(x,y)
      rot += step

      x = cx+Math.cos(rot) * innerRadius;
      y = cy+Math.sin(rot) * innerRadius;
      ctx.lineTo(x,y)
      rot += step
    }
    ctx.lineTo(cx,cy-outerRadius);
    ctx.closePath();

    //Estilização
    ctx.lineWidth = 5;
    ctx.strokeStyle = '#ffffff';
    ctx.stroke();
    ctx.fillStyle = '#ffffff';
    ctx.fill();
  }


/*
Reference canvas codes

fillStyle   --Enche o retangulo com algum estilo (cor)
fillRect    --Desenha o retangulo
clearRect   --"Apaga" onde deseja do retangulo
strokeRect  --Borda do retângulo


beginPath   --Inicia forma livre
closePath   --Finaliza forma livre

stroke      --Desenha fazendo a borda
fill        --Desenha a forma enchendo seu conteudo

moveTo      --Move cursor para uma posicao [X,Y]
lineTo      --Faz uma linha do ponto atual "p" até o ponto desejado "p2" [Px, Py]

arc         --Desenha um arco com sua posição e centro. Útil para circulos
arcoTo      --Desenha um arco do ponto atual "p" com um destino "p2"

quadracticCurveTo   --Desenha um bézier quadratico do ponto atual ate o desejado. Este bézier usa apenas 1 ponto de controle para ambos vértices se alinharem (simétrico)
bezierCurveTo       --Desenha um bézier quadrático etc. Essa função possui dois pontos de controle, um para cada vértice. 

*/