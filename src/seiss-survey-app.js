const SEISS_SURVEY_APP = (() => {
  const state = SEISS_SURVEY_STATE.getState()
  const questions = SEISS_SURVEY_STATE.getQuestions()
  const ui = SEISS_SURVEY_UI.getSelectors()
  const loadEventListeners = () => {
    ui.answerContainer.addEventListener('click', nextQuestion)
    ui.btnContainer.addEventListener('click', checkQuestion)
  }

  const checkQuestion = (e) => {
    if(e.target.classList.contains('prev-btn')) previousQuestion()
    if(e.target.classList.contains('start-survey-btn')) nextQuestion()
  }

  const nextQuestion = () => {
    SEISS_SURVEY_UI.transitionOut()
    setTimeout(() => {
      const targetID = parseInt(ui.answerContainer.dataset.nextquestion)
      const nextQuestion = questions.find(q => q.id === targetID)
      SEISS_SURVEY_STATE.updateCurrentQuestion(nextQuestion.id)
      SEISS_SURVEY_STATE.updateNextQuestion(nextQuestion.NQ[0])
      nextQuestion.NQ !== -1 ?
        SEISS_SURVEY_UI.displayNextQuestion(nextQuestion) :
        SEISS_SURVEY_UI.displayFinalVerdict(nextQuestion)
      SEISS_SURVEY_UI.transitionIn()
    }, 800)
  }

  const previousQuestion = () => {

  }

  return {
    init: () => {
      loadEventListeners()
    }
  }
})(SEISS_SURVEY_UI, SEISS_SURVEY_STATE)

SEISS_SURVEY_APP.init()