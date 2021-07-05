

// const LOAD_PROFILE = "/users/LOAD_PROFILE"
// const USER_CHECKIN = "/users/USER_CHECKIN";
// const UPDATE_PROFILE = "/users/UPDATE_PROFILE;"
// const LOAD_USER_HISTORY = "/users/LOAD_USER_HISTORY";

// const checkIn = (act, user) => ({
//   type: USER_CHECKIN,
//   act,
//   user,
// });

// const loadHist = (history, userId) => ({
//   type: LOAD_USER_HISTORY,
//   userId,
//   history,
// })

// const getProfile = (userId) => ({
//   type: LOAD_PROFILE,
//   userId,
// })

// const update = (user) => ({
//   type: UPDATE_PROFILE,
//   user,
// })

// export const getUserHist = (id) => async dispatch => {
//   const res = await fetch(`/api/users/${id}/history`)
  
//   if(res.ok){
//     const history = await res.json()
//     dispatch(loadHist(history, id))
//     return history;
//   }
// }


// export const getUserProfile = (id) => async dispatch => {
//   const res = await fetch(`/api/users/${id}`)
  
//   if(res.ok){
//     const profile = await res.json()
//     dispatch(getProfile(profile))
//     return profile;
//   }
// }


// export const updateProfile = (user) => async dispatch => {
//   const res = await fetch(`/api/users/${user.id}`, {
//     method: 'PUT',
//     headers: {
//     'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(user)
//   })
  
//   if(res.ok){
//     const updated = await res.json()
//     dispatch(update(updated))
//     return updated;
//   }
// }

// export const userCheckIn = (option, id ) => async dispatch => {
//   const data = {option, id};
//   const res = await fetch(`/api/users/${id}/checkin`, 
//       {
//       method: 'POST',
//       headers: {
//         'Content-Type':'application/json'
//       },
//       body: JSON.stringify(data)
//     }
//   )
//   if(res.ok){
//     const checkedInUser = await res.json();
//     dispatch(checkIn(checkedInUser))
//     return checkedInUser;
//   }
// };

// const initialState = {};

// const usersReducer = (state = initialState, action) => {
//   let newState;
//   switch (action.type) {
//     case USER_CHECKIN: {
//       newState = {
//         ...state, 
//         [action.actions.id]: action.actions,
//       }
      
//       return {
//         ...state, 
//          [action.user.id]: action.user,
//     };
//   };
//     case LOAD_USER_HISTORY: {
//       newState = {
//         ...state,
//         [action.user.id]: action.user.createdAt,
//       };
//       const history = newState.list.map(id => newState[id]);
//       history.push(action.user);
//       newState.list = sortList(history);
//       return newState;
//     }
//     case UPDATE_PROFILE: {
//         return {
//         ...state,
//         [action.user.id]: action.user,
//       };
//     }
//     case CREATE_PROFILE: {

//     }

//     default:
//       return state

//   }
// }









// export default userReducer