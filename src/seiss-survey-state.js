const SEISS_SURVEY_STATE = (() => {
  const state = {
    CQ: 0,
    NQ: 1,
    PQ: [],
    PA: []
  }

  const questions = [
    {
      id: 1,
      QC: 'Text',
      options: ['Yes', 'No'],
      NQ: [2]
    },
    {
      id: 2,
      QC: 'Text',
      options: ['Yes', 'No'],
      NQ: [3]
    },
    {
      id: 3,
      QC: 'Text',
      options: ['Yes', 'No'],
      NQ: [4]
    },
    {
      id: 4,
      QC: 'Text',
      options: ['Yes', 'No'],
      NQ: [5]
    },
    {
      id: 5,
      QC: 'Text',
      options: ['Yes', 'No'],
      NQ: [6]
    },
    {
      id: 6,
      QC: 'Text',
      options: ['Yes', 'No'],
      NQ: [7]
    },
    {
      id: 7,
      QC: 'Text',
      options: ['Yes', 'No'],
      NQ: [8]
    },
    {
      id: 8,
      QC: 'Text',
      options: ['Yes', 'No'],
      NQ: [-1]
    },
  ]

  return {
    getQuestions: () => {
      return questions
    },
    surveyState: () => {
      return state
    },
    updateCurrentQuestion: (CQ) => {
      state.CQ = CQ
    },
    updateNextQuestion: (NQ) => {
      state.NQ = NQ 
    },
    updatePreviousQuestion: (PQ, t, type) => {
      state.PQ.push(PQ)
      console.log(type)
      if(type === 'INPUT') state.PA.push(state.input)
      if(type === 'CHECKBOX') state.PA.push(state.checkboxSelection)
      if(type !== 'CHECKBOX' && type !== 'INPUT') {
        state.PA.push(t.firstElementChild.textContent)
      }

      console.log(state.PA)
    }, 
    removePreviousQuestion: (Q) => {
      state.PQ.pop()
      state.PA.pop()
    },
  }
})()