type ActionsType =
  | ReturnType<typeof setButton>
  | ReturnType<typeof setResult>
  | ReturnType<typeof setClean>;

type InitialStateType = {
  num: string;
  result: string;
};
const initialState: InitialStateType = {
  num: '',
  result: '',
};

export const calcReducer = (
  state: InitialStateType = initialState,
  action: ActionsType
): InitialStateType => {
  switch (action.type) {
    case 'SET-BUTTON':
      return {
        ...state,
        num: state.num.concat(action.num),
      };
    case 'SET-RESULT':
      try {
        return {
          ...state,
          result: eval(state.num).toString(),
        };
      } catch (error) {
        return {
          ...state,
          result: 'error',
        };
      }
    case 'SET-CLEAN':
      return {
        ...state,
        num: '',
        result: '',
      };
    default:
      return state;
  }
};

// action creators
export const setButton = (num: string) => ({ type: 'SET-BUTTON', num } as const);
export const setResult = (num: string) => ({ type: 'SET-RESULT', num } as const);
export const setClean = (num: string) => ({ type: 'SET-CLEAN', num } as const);
