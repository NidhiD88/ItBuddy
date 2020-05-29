// This is the default state of the app i.e. when the app starts for the first time
const initialState = {
    isLoading:false,
  }
  
  // This is a reducer which listens to actions and modifies the state
  export default function(state = initialState, action) {
    switch (action.type) {
      case 'ISLOADING':
        return {
          ...state,
          isLoading: action.data
        }
      default:
        return state;
      }
    }