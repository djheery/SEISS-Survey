const SEISS_SURVEY_STATE = (() => {
  const state = {
    CQ: 0,
    NQ: 1,
    PQ: [],
    PA: [],
    DNQ: []
  }

  const questions = [
    {
      id: -1,
      QC: 'You\'ve finished and our survey says... you have issues',
      NQ: [-1],
      PQ: state.PQ,
      PA: state.PA,
      DNQ: state.DNQ
    },
    {
      id: 1,
      QC: 'Does your income from your self employed work make up over 50% of your Annual Income?',
      options: ['Yes', 'No'],
      NQ: [2],
      DNQ: [false, true],
      statement: 'Your self employed income must make up more than 50% of your annual income'
    },
    {
      id: 2,
      QC: 'Has your trade been adversely affeted by the coronavirus pandemic?',
      options: ['Yes', 'No'],
      NQ: [3],
      DNQ: [false, false]
    },
    {
      id: 3,
      QC: 'Have you carried out trade in <span class="fw-bold">both</span> 2019/20 and 2020/21',
      options: ['Yes', 'No'],
      NQ: [4],
      DNQ: [false, true],
      statement: 'You must have carried out trade in both the 2019/20 and 2020/21 tax years',
    },
    {
      id: 4,
      QC: 'Have you submitted a 2019/20 tax return?',
      options: ['Yes', 'No'],
      NQ: [5],
      DNQ: [false, true],
      statement: 'You must have submitted a 2019/20 tax return'
    },
    {
      id: 5,
      QC: 'Has your trade suffered reduced activity, capacity or demand in the period <span class="fw-bold">May 2021</span> to <span class="fw-bold">September 2021</span>',
      options: ['Yes', 'No'],
      NQ: [6],
      DNQ: [false, true],
      statement: 'Your trade must have suffered reduced capacity from May 2021 to Sepetember 2021'
    },
    {
      id: 6,
      QC: 'Were your profits in 2019/20 <span class="fw-bold" style="font-weight: bold">less than</span> £50,000',
      options: ['Yes', 'No'],
      NQ: [-1],
      DNQ: [true, false],
      statement: 'You must have earned less than £50,000 in the 2019/20 tax year'
    },
  ]

  return {
    getQuestions: () => {
      return questions
    },
    getState: () => {
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
    }, 
    removePreviousQuestion: (Q) => {
      state.PQ.pop()
      state.PA.pop()
    },
    updateDoesNotQualify: (q) => {
      state.DNQ.push({question: q.id, statement: q.statement})
    }
  }
})()