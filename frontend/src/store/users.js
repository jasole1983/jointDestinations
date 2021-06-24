


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
export const getUserHist = (id) => async dispatch => {
  const res = await fetch(`/api/users/${id}/history`)
  
  if(res.ok){
    const history = await res.json()
    dispatch(loadHist(history, id))
    return history;
  }
}



const initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_CHECKIN: {
      const date = Date().now;
      const loc = action.location;
      return {
        ...state, 
         [action.user.id]: action.user,
    };
  };
    // case USER_ADD_FAVORITE:
    //   return state + action.payload;
    // case USER_REMOVE_FAVORITE:
    //   return state - action.payload;
    // case LOAD_USER_FAVORITES:
    //   return state 
    case LOAD_USER_HISTORY:


    default:
      return state

  }
}









export default userReducer