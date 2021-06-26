import { csrfFetch } from "./csrf";


export const ADD_ONE = 'flowers/ADD_ONE';
export const LOAD = 'flowers/LOAD_ENTRY';
export const LOAD_STRAIN = 'flowers/LOAD_MANY';

const loadStrain = (strain) => ({
  type: LOAD_STRAIN,
  strain,
})
const load = (list) => ({
  type: LOAD,
  list,
});
const addOneFlower = (object) => ({
  type: ADD_ONE,
  object,
});


export const getFlower = (flowerId) => async dispatch => {
  const res = await csrfFetch(`/api/flowers/${flowerId}`)

  if(res.ok) {
    const entry = await res.json()
    dispatch(addOneFlower(entry))
  }
};

export const getManyFromDispensary = (dispensaryId) => async dispatch => {
  const res = await csrfFetch(`/api/dispensary/${dispensaryId}/flowers/all`)

  if(res.ok) {
    const list = await res.json()
    dispatch(load(list, dispensaryId));
    return list;
  }
}

export const getFowerByStrain = (strain) => async dispatch => {
  const res = await fetch(`/api/flowers/${strain}`)

  if (res.ok) {
    const selectedStrain = await res.json();
    dispatch(loadStrain(selectedStrain));
  }
}

export const createFlower = (newFlower) => async dispatch => {

  const res = await fetch(`/api/flowers/create`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(newFlower)
  } )

  if(res.ok) {
    const newEntry = await res.json()
    dispatch(addOneFlower(newEntry))
    return newEntry;
  }
}



// export const removeFlower = (dispensaryId, flowerId) => async dispatch => {
  
//   const res = await csrfFetch(`/api/dispensary/${dispensaryId}/flower/${flowerId}`, {
//     method: 'DELETE',
//     headers: {
//       'Content-Type':'application/json'
//     },
//     body: JSON.stringify({dispensary: dispensaryId, flower: flowerId})
//   })
  
//   if(res.ok) {
//     const removed = await res.json()
//     dispatch(remove(removed, dispensaryId, flowerId))
//     return removed;
//   }
// }

export const  editFlower = (flower) => async dispatch => {
  
  const res = await csrfFetch(`/api/flowers/${flower.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(flower)
  })
  
  if(res.ok) {
    const edited = await res.json()
    dispatch(addOneFlower(edited))
    return edited;
  }
}
const initialState = {};

const flowerReducer = (state = initialState, action) => {
  let newState = {}
  switch (action.type){
    case ADD_ONE: {
      if (!state[action.flower.id]){
        newState = {
          ...state,
          [action.flower.id]: action.flower
        };
        const flowerList = newState.list.map(id => newState[id]);
        flowerList.push(action.flower);
        newState.list = flowerList;
        return newState;
      }
      return {
        ...state,
        [action.flower.id]: {
          ...state[action.flower.id],
          ...action.flower,
        }
      }
    }
    case LOAD: {
      const allFlowers = {};
      action.list.forEach(flower => {
        allFlowers[flower.id] = flower;
      });
      return {
        ...allFlowers,
        ...state,
        list: action.list,
      };
    }
    case LOAD_STRAIN: {
      return {
        ...state,
        strain: action.strain,
      };
    }
    default:
      return state;
  }
}

export default flowerReducer;