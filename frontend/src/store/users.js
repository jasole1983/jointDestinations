


const USER_CHECKIN = "users/USER_CHECKIN";
const USER_ADD_FAVORITE = "users/USER_ADD_FAVORITE";
const USER_REMOVE_FAVORITE = "users/USER_REMOVE_FAVORITE";
const LOAD_USER_FAVORITES = "users/LOAD_USER_FAVORITES";
const LOAD_USER_HISTORY = "users/LOAD_USER_HISTORY";

const checkIn = (location, user) => ({
  type: USER_CHECKIN,
  location,
  user,
});

const addFav = (targetId, user) => ({
  type: USER_ADD_FAVORITE,
  targetId,
  user,
});

const remFav = (targetId, user) => ({
  type: USER_REMOVE_FAVORITE,
  targetId,
  user,
});

const loadFav = (list, user) => ({
  type: LOAD_USER_FAVORITES,
  list,
  user,
});

const loadHist = (obj, user) => ({
  type: LOAD_USER_HISTORY,
  obj,
  user,
})

export const getUserFavs = (id) => async dispatch => {
  const res = await fetch(`/api/users/${id}/favorites`)

  if(res.ok){
    const favorites = await res.json()
    dispatch(loadFav(favorites, id))
    return favorites;
  }
}

export const getUserHist = (id) => async dispatch => {
  const res = await fetch(`/api/users/${id}/history`)

  if(res.ok){
    const history = await res.json()
    dispatch(loadHist(history, id))
    return history;
  }
}

const initialState = {};


export const userCheckin = (location, id ) => async dispatch => {
  const data = {location, id, time: Date().now};
  const res = await fetch(`/api/users/${id}`, 
      {
      method: 'PUT',
      headers: {
        'Content-Type':'application/json'
      },
      body: JSON.stringify(data)
    }
  )
  if(res.ok){
    const checkedInUser = await res.json();
    dispatch(checkIn(checkedInUser))
    return checkedInUser;
  }
};





export const userReducer = (state = 0, action) => {
  switch (action.type) {
    case "checkin":
      return state + action.payload;
    case "review":
      return state + action.payload;
    case "delete":
      return state - action.payload;
    default:
      return state

  }
}

export const flowerReducer = (state = 0, action) => {
  
}
