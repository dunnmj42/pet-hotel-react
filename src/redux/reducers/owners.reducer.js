// Reducer for all owners
const ownersReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_OWNERS":
      return action.payload;
    default:
      return state;
  }
};

// owners will be on redux store
// at store.owners
export default ownersReducer;