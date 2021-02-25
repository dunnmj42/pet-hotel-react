import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// pets worker saga gets pets and sets pets store
// fires on FETCH_PETS
function* fetchPets() {
  try {
    const pets = yield axios.get('/api/pets'); // fire
    yield put({ type: 'SET_PETS', payload: pets.data });
  } catch (error) {
    console.error(error);
  }
}

// worker saga for adding pet -- fires on NEW_PET
function* newPet(action) {
  try {
    const petToAdd = action.payload;
    yield axios.post('/api/pets', petToAdd);
    yield put({ type: 'FETCH_PETS' }); // GET pets on add
  } catch (error) {
    console.error(error);
  }
}

// edit worker saga -- fires on EDIT_PET
function* editPet(action) {
  try {
    yield axios.put(`/api/pets/?id=${action.payload}`); // send PUT
    yield put({ type: 'FETCH_PETS' }); // reGET after PUT
  } catch (error) {
    console.error(error);
  }
}

// remove pet worker saga -- fires on REMOVE_PET
function* removePet(action) {
  try {
    yield axios.delete(`/api/pets/?id=${action.payload}`);
    yield put({ type: 'FETCH_PETS' }); // reGET after delete
  } catch (error) {
    console.error(error);
  }
}

function* petsSaga() {
  yield takeEvery('FETCH_PETS', fetchPets);
  yield takeEvery('NEW_PET', newPet);
  yield takeEvery('EDIT_PET', editPet);
  yield takeEvery('REMOVE_PET', removePet);
}

export default petsSaga;
