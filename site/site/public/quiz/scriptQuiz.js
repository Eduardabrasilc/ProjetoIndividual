const quizData = [{
    
        question: "Qual é o nome do órgão sensorial dos gatos que permite a detecção de movimentos mínimos mesmo na escuridão?",
        a: "Rinário",
        b: "Orelha",
        c: "Olho",
        d: "Bigode",
        correct: "d"
    },
    {
        question: "Como é chamado o ato de um gato esfregar sua cabeça ou corpo contra você?",
        a: "Abraço",
        b: "Acariciar",
        c: "Chocar",
        d: "Afinidade",
        correct: "a"
    },
    {
        question: "Os gatos têm impressões digitais únicas, assim como os seres humanos. Verdadeiro ou falso?",
        a: "Verdadeiro",
        b: "Falso",
        c: "Depende",
        d: "Não se sabe",
        correct: "a"
    },
    {
        question: "Qual é a parte do corpo do gato que, quando tocada, pode induzir à liberação de endorfinas, proporcionando conforto e relaxamento?",
        a: "Barriga",
        b: "Orelhas",
        c: "Patas",
        d: "Queixo",
        correct: "a"
    },
    {
        question: "Os gatos têm preferência por qual tipo de textura para dormir?",
        a: "Superfícies macias",
        b: "Superfícies duras",
        c: "Tecidos ásperos",
        d: "Metal",
        correct: "a"
    },
    {
        question: "Qual é a razão pela qual os gatos têm uma língua áspera?",
        a: "Para aumentar a audição",
        b: "Para facilitar a limpeza",
        c: "Para auxiliar na respiração",
        d: "Para melhorar a visão",
        correct: "b"
    },
    {
        question: "Qual é o nome do fenômeno em que os gatos amassam as patas ritmicamente?",
        a: "Dança dos felinos",
        b: "Reflexo de purr",
        c: "Pisoteio",
        d: "Kneading",
        correct: "d"
    },

    {
        question: "Qual é o nome do fenômeno em que os gatos têm olhos de cores diferentes?",
        a: "Bicromia",
        b: "Oculismo",
        c: "Divergência ocular",
        d: "Heterocromia",
        correct: "d"
    },
    {
        question: "Qual é o nome do fenômeno que ocorre quando os gatos mordem e lambem seus tutores?",
        a: "Acatamento",
        b: "Biting Love",
        c: "Mordedura Afetiva",
        d: "Kneading",
        correct: "d"
    },
    {
        question: "O que é um gato polidáctilo?",
        a: "Um gato que gosta de nadar",
        b: "Um gato com mais dedos que o normal nas patas",
        c: "Um gato com problemas de visão",
        d: "Um gato que gosta de brincar com outros animais",
        correct: "b"
    }
    ];



const quiz =document.getElementById("quiz");
const countQuestion = document.getElementById("count-question");
const tottleNumberofQuestion =document.getElementById("tol-num-que");
const questionNumber =document.getElementById("question-number");
const questionTitle =document.getElementById("question");
const answerTable = document.querySelectorAll(".answer-table");
const nextQuestionbtn = document.getElementById("next-question-btn");
const allInputs = document.querySelectorAll("input[type='radio']");
const submitQuiz = document.getElementById("submite");
const resultEl = document.getElementById("result");
const scoreEl = document.getElementById("score");

var currentQtn = 0;
var answerd = 0;
var pontos = 0;

const loadQuiz = ()=> {
    countQuestion.innerHTML = `${currentQtn +1}`;
    tottleNumberofQuestion.innerHTML = quizData.length;
    questionNumber.innerHTML= `${currentQtn +1}`;
    questionTitle.innerHTML = quizData[currentQtn].question;
    answerTable[0].innerHTML = quizData[currentQtn].a;
    answerTable[1].innerHTML = quizData[currentQtn].b;
    answerTable[2].innerHTML = quizData[currentQtn].c;
    answerTable[3].innerHTML = quizData[currentQtn].d;

    reset();

    if(currentQtn ===quizData.length-1){
        nextQuestionbtn.style.display="none";
        submitQuiz.style.display="block"
    }
}

const reset = ()=>{
    allInputs.forEach((allInputs)=>{
        allInputs.checked=false;
    })
}

nextQuestionbtn.addEventListener("click", ()=> {
    var answer = getSelected();
    if(answer) {
        if(answer===quizData[currentQtn].correct){
            answerd++;
            pontos+=10;
        };
        currentQtn++;
        if(currentQtn<quizData.length){
            loadQuiz();
        }
    }
});

submitQuiz.addEventListener("click", ()=>{
    var answer = getSelected();
    if(answer === quizData[currentQtn].correct){
        answerd++;
        pontos+=10;
    };
    currentQtn++;
    if(getSelected()){
        quiz.style.display="none";
        resultEl.style.display="block";
        scoreEl.innerHTML =`Questões acertadas ${answerd} / ${quizData.length}`;
    }

    var id = sessionStorage.IDUSUARIO_USUARIO;
    console.log(id)
  
  fetch("/usuarios/pontos_finais", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        pontoServer: pontos,
        idServer: id
    })
  }).then(function (resposta) {
    console.log("ESTOU NO THEN DO entrar()!")
  
    if (resposta.ok) {
        console.log(resposta);
  
        resposta.json().then(json => {
            console.log(json);
            console.log(JSON.stringify(json));
            console.log("Respota com sucesso");
  
            console.log(pontos)
        });
  
    } else {
  
        console.log("Houve um erro ao tentar realizar o login!");
  
        resposta.text().then(texto => {
            console.error(texto);
        });
    }
  
  }).catch(function (erro) {
    console.log(erro);
  })
  
  return false;
  }
  )

const getSelected =()=>{
    var answer;
    allInputs.forEach((allInputs)=> {
        if(allInputs.checked){
            answer = allInputs.value;
        }
    });
    return answer;
}

loadQuiz();