const SEISS_SURVEY_UI = (() => {
  const selectors = {
    questionContainer: document.querySelector('.question-container'),
    btnContainer: document.querySelector('.question-btn__container'),
    answerContainer: document.querySelector('.answer-options-container'),
    confirmAnswerBtn: document.querySelector('.confirm-answer'),
    prevQuestion: document.querySelector('.prev-question'),
  }

  return {
    getSelectors: () => {
      return selectors
    },
    displayNextQuestion: (q) =>  {
      if(q.id === -1) SEISS_SURVEY_UI.displayFinalVerdict()
      if(q.id !== -1) {
        selectors.answerContainer.dataset.nextquestion = q.NQ[0]
        selectors.questionContainer.innerHTML = q.QC
        selectors.answerContainer.innerHTML = ''
        for(let i = 0; i < q.options.length; i++) {
          selectors.answerContainer.innerHTML += `
          <div class="radio-btn-container radio-y-n">
            <label for="survey-question" class="survey-option">${q.options[i]}</label>
            <input type="radio" name="survey-radio-btn" id="survey-radio-btn" class="survey-radio-btn" data-id="${q.NQ[i]}">
          </div>
          `
        }
      }
    },
    displayPreviousQuestion: () => {

    },
    displayFinalVerdict: () => {

    },
    setBtnData: () => {

    },
    transitionOut: () => {
      selectors.answerContainer.classList.remove('transition-two')
      selectors.questionContainer.classList.remove('transition-two')
      selectors.answerContainer.classList.add('transition')  
      selectors.questionContainer.classList.add('transition')  
    },
    transitionIn: () => {
      selectors.answerContainer.classList.remove('transition')
      selectors.questionContainer.classList.remove('transition')
      selectors.answerContainer.classList.add('transition-two')
      selectors.questionContainer.classList.add('transition-two')
    },
  }
})()