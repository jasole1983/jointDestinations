
export const ADD_FLOWER = 'flowers/ADD_ONE';
export const REMOVE_FLOWER = 'flowers/REMOVE_ENTRY';
export const UPDATE_FLOWER = 'flowers/UPDATE_ENTRY';
export const LOAD_FLOWER = 'flowers/LOAD_ENTRY';
export const LOAD_FLOWERS = 'flowers/LOAD_MANY';

const loadMany = (location) => ({
  type: LOAD_FLOWERS,
  location,
})
const load = (id) => ({
  type: LOAD_FLOWER,
  id,
});
const add = (locationId, flower) => ({
  type: ADD_FLOWER,
  locationId,
  flower,
});
const remove = (locationId, flowerId) => ({
  type: REMOVE_FLOWER,
  locationId,
  flowerId,
});
const update = (locationId, flowerId) => ({
  type: UPDATE_FLOWER,
  flowerId,
  locationId,
});

export const getFlower = (locationId, flowerId) => async dispatch => {
  const res = await fetch(`/api/${model}/${id}/${opts}`)

  if(res.ok) {
    const entry = await res.json()
    dispatch(load(entry, model, id))
    return entry;
  }
};

export const getMany = (locationId) => async dispatch => {
  const res = await fetch(`/api/location/${locationId}/flowers`)

  if(res.ok) {
    const list = await res.json()
    dispatch(loadMany(list, locationId));
    return list;
  }
}

export const addNewFlower = (locationId, newFlower) => async dispatch => {

  const res = await fetch(`/api/flowers/create`, {
    method: 'POST',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(newFlower)
  } )

  if(res.ok) {
    const newEntry = await res.json()
    dispatch(add(newEntry))
    return newEntry;
  }
}



export const removeFlower = (locationId, flowerId) => async dispatch => {
  
  const res = await fetch(`/api/location/${locationId}/flower/${flowerId}`, {
    method: delete,
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify({location: locationId, flower: flowerId})
  })
  
  if(res.ok) {
    const removed = await res.json()
    dispatch(remove(removed, locationId, flowerId))
    return removed;
  }
}

export const  updateFlower = (locationId, flower ) => async dispatch => {
  
  const res = await fetch(`/api/location/${locationId}/flower/${flower.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type':'application/json'
    },
    body: JSON.stringify(locationId, flower)
  })
  
  if(res.ok) {
    const updated = await res.json()
    dispatch(update(updated, locationId))
    return updated;
  }
}
const initialState = {};

const flowerReducer = (state = initialState, action) => {
  switch (action.type){
    case ADD_FLOWER: {
      const newState = {
        ...state,
        [action.flower.id]: action
      }
      return
    }
    case REMOVE_FLOWER:
      return
    case UPDATE_FLOWER:
      return
    case LOAD_FLOWER:
      return
    case LOAD_FLOWERS:
      return
    case default:
      return;
  }
}