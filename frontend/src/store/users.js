

const LOAD_PROFILE = "/users/LOAD_PROFILE"
const USER_CHECKIN = "/users/USER_CHECKIN";
const UPDATE_PROFILE = "/users/UPDATE_PROFILE;"
const LOAD_USER_HISTORY = "/users/LOAD_USER_HISTORY";

const checkIn = (location, user) => ({
  type: USER_CHECKIN,
  location,
  user,
});

const loadHist = (user) => ({
  type: LOAD_USER_HISTORY,
  user,
})

const getProfile = (userId) => ({
  type: LOAD_PROFILE,
  userId,
})

const updateProfile = (userId) => ({
  type: UPDATE_PROFILE,
  userId,
})

export const getUserHist = (id) => async dispatch => {
  const res = await fetch(`/api/users/${id}/history`)
  
  if(res.ok){
    const history = await res.json()
    dispatch(loadHist(history, id))
    return history;
  }
}


export const getUserProfile = (id) => async dispatch => {
  const res = await fetch(`/api/users/${id}`)
  
  if(res.ok){
    const profile = await res.json()
    dispatch(getProfile(profile))
    return profile;
  }
}


export const updateProfile = (user) => async dispatch => {
  const res = await fetch(`/api/users/${user.id}`, {
    method: 'PUT',
    headers: {
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  })
  
  if(res.ok){
    const updated = await res.json()
    dispatch(updateProfile(history, id))
    return history;
  }
}

export const userCheckIn = (location, id ) => async dispatch => {
  const data = {location, id, time: Date().now};
  const res = await fetch(`/api/location/${id}/${id}`, 
      {
      method: 'POST',
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
    case LOAD_USER_HISTORY: {
      const newState = {
        ...state,
        [action.user.id]: action.user.createdAt;
      };
      const history = newState.list.map(id => newState[id]);
      history.push(action.user);
      newState.list = sortList(history);
      return newState;
    }
    case 


    default:
      return state

  }
}









export default userReducer