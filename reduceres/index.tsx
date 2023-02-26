import {Action, FormState, OutcomesState} from "@/types/app.types";


const initialFormState: FormState = {
  lastPeriod: null,
  cycleLength: null,
};

const initialOutcomesState: OutcomesState = {
  fertileWindow: [],
  ovulationDate: null,
  nextPeriod: null,
  pregnancyTestDay: null,
  expectedDueDate: null,
};

function formReducer(state: FormState, action: Action) {
  switch (action.type) {
    case 'SET_LAST_PERIOD':
      return {
        ...state,
        lastPeriod: action.payload
      }
    case 'SET_CYCLE_LENGTH':
      return {
        ...state,
        cycleLength: action.payload
      }
    case 'RESET':
      return initialFormState
    default: return state
  }
}

function outcomesReducer(state: OutcomesState, action: Action) {
  // TODO: outcomesReducer Logic
}

export { initialFormState, initialOutcomesState, formReducer, outcomesReducer };
