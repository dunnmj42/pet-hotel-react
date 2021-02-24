// Reducer for all pets
const petsReducer = (state = [], action) => {
  switch (action.type) {
    case "SET_PETS":
      return action.payload;
    default:
      return state;
  }
};

// pets will be on redux store
// at store.pets
export default petsReducer;