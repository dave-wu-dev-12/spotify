const initialState = {
  isLoggedIn: false,
};

const reducer = (state = initialState, action) => {
  // The initial loggedIn state of false will be used
  // when the app loads and whoever is listening to it

  switch (action.type) {
    case "login_user_success":
      return {
        ...state,
        isLoggedIn: true,
      };

    default:
      return state;
  }
};

export default reducer;
