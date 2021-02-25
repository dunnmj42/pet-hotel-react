import axios from 'axios';
import { put, takeEvery } from 'redux-saga/effects';

// owners worker saga gets owners and sets owners store
// fires on FETCH_OWNERS
function* fetchOwners() {
  try {
    const owners = yield axios.get('/api/owners'); // fire
    yield put({ type: 'SET_OWNERS', payload: owners.data });
  } catch (error) {
    console.error(error);
  }
}

// worker saga for adding owner -- fires on NEW_OWNER
function* newOwner(action) {
  try {
    const ownerToAdd = action.payload;
    yield axios.post('/api/owners', {name: ownerToAdd});
    yield put({ type: 'FETCH_OWNERS' }); // GET owners on add
  } catch (error) {
    console.error(error);
  }
}

// remove owner worker saga -- fires on REMOVE_OWNER
function* removeOwner(action) {
  try {
    yield axios.delete(`/api/owners/${action.payload}`);
    yield put({ type: 'FETCH_OWNERS' }); // reGET after delete
  } catch (error) {
    console.error(error);
  }
}

function* ownersSaga() {
  yield takeEvery('FETCH_OWNERS', fetchOwners);
  yield takeEvery('NEW_OWNER', newOwner);
  yield takeEvery('REMOVE_OWNER', removeOwner);
}

export default ownersSaga;
