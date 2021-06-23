const userReducer = (state = 0, action) => {
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

export default userReducer;