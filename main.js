function setName() {
    const name = document.getElementById("nameInput").value
    const nameSpan = document.getElementById("name")
    nameSpan.innerHTML = name
    const game = document.getElementById("game")
    game.classList.add("active")
    const welcome = document.getElementById("welcome")
    welcome.classList.remove("active")
}

function selectCartoon() {
    const cartoon = document.getElementById("cartoon")
    cartoon.classList.add("active")
    const game = document.getElementById("game")
    game.classList.remove("active")
    const result = document.getElementById("result")
    result.classList.remove("active")
}

function selectSerie() {
    const series = document.getElementById("series")
    series.classList.add("active")
    const game = document.getElementById("game")
    game.classList.remove("active")
    const result = document.getElementById("result")
    result.classList.remove("active")
}

function answerCartoon() {
    // pega o valor que o usuário respondeu
    const questionSelect1 = document.querySelector("[name='question_cartoon_1']:checked").value
        //mostra o valor que o usuário respondeu
    const answer1 = document.getElementById("answer1")
    answer1.innerHTML = questionSelect1
        //esse mostra a resposta correta
    const correct1 = document.getElementById("correct1")
    correct1.innerHTML = "Nico"
        //define se acertou ou errou
    const result1 = document.getElementById("result1")
    if (questionSelect1 === "Nico") {
        result1.innerHTML = "Acertou"
    } else {
        result1.innerHTML = "Errou"
    }

    // pega o valor que o usuário respondeu
    const questionSelect2 = document.querySelector("[name='question_cartoon_2']:checked").value
        //mostra o valor que o usuário respondeu
    const answer2 = document.getElementById("answer2")
    answer2.innerHTML = questionSelect2
        //esse mostra a resposta correta
    const correct2 = document.getElementById("correct2")
    correct2.innerHTML = "Estrela do mar"
        //define se acertou ou errou
    const result2 = document.getElementById("result2")
    if (questionSelect2 === "Estrela do mar") {
        result2.innerHTML = "Acertou"
    } else {
        result2.innerHTML = "Errou"
    }

    // pega o valor que o usuário respondeu
    const questionSelect3 = document.querySelector("[name='question_cartoon_3']:checked").value
        //mostra o valor que o usuário respondeu
    const answer3 = document.getElementById("answer3")
    answer3.innerHTML = questionSelect3
        //esse mostra a resposta correta
    const correct3 = document.getElementById("correct3")
    correct3.innerHTML = "Panda, Pardo e Polar"
        //define se acertou ou errou
    const result3 = document.getElementById("result3")
    if (questionSelect3 === "Panda, Pardo e Polar") {
        result3.innerHTML = "Acertou"
    } else {
        result3.innerHTML = "Errou"
    }
    showResult()

}

function answerSerie() {
    // pega o valor que o usuário respondeu
    const questionSelect1 = document.querySelector("[name='question_series_1']:checked").value
        //mostra o valor que o usuário respondeu
    const answer1 = document.getElementById("answer1")
    answer1.innerHTML = questionSelect1
        //esse mostra a resposta correta
    const correct1 = document.getElementById("correct1")
    correct1.innerHTML = "Dundies"
        //define se acertou ou errou
    const result1 = document.getElementById("result1")
    if (questionSelect1 === "Dundies") {
        result1.innerHTML = "Acertou"
    } else {
        result1.innerHTML = "Errou"
    }

    // pega o valor que o usuário respondeu
    const questionSelect2 = document.querySelector("[name='question_series_2']:checked").value
        //mostra o valor que o usuário respondeu
    const answer2 = document.getElementById("answer2")
    answer2.innerHTML = questionSelect2
        //esse mostra a resposta correta
    const correct2 = document.getElementById("correct2")
    correct2.innerHTML = "Professora"
        //define se acertou ou errou
    const result2 = document.getElementById("result2")
    if (questionSelect2 === "Professora") {
        result2.innerHTML = "Acertou"
    } else {
        result2.innerHTML = "Errou"
    }

    // pega o valor que o usuário respondeu
    const questionSelect3 = document.querySelector("[name='question_series_3']:checked").value
        //mostra o valor que o usuário respondeu
    const answer3 = document.getElementById("answer3")
    answer3.innerHTML = questionSelect3
        //esse mostra a resposta correta
    const correct3 = document.getElementById("correct3")
    correct3.innerHTML = "Stella"
        //define se acertou ou errou
    const result3 = document.getElementById("result3")
    if (questionSelect3 === "Stella") {
        result3.innerHTML = "Acertou"
    } else {
        result3.innerHTML = "Errou"
    }
    showResult()

}

function showResult() {
    const result = document.getElementById("result")
    result.classList.add("active")
    const series = document.getElementById("series")
    series.classList.remove("active")
    const cartoon = document.getElementById("cartoon")
    cartoon.classList.remove("active")
}

function selectSair() {
    const cartoon = document.getElementById("cartoon")
    cartoon.classList.remove("active")
    const game = document.getElementById("game")
    game.classList.remove("active")
    const result = document.getElementById("result")
    result.classList.remove("active")
    const exite = document.getElementById("exit")
    exite.classList.add("active")
}