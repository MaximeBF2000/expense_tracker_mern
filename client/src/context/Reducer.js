export default (state, action) => {
  switch(action.type){
    case "ADD_TRANSACTION":
      return{
        transactions: [action.payload, ...state.transactions]
      }
    case "DELETE_TRANSACTION":
      return {
        transactions: state.transactions.filter(e => e.id !== action.payload)
      }
    default:
      return state
  }
}