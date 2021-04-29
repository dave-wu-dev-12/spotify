const initialState = {
  isLoggedIn: false,
  userName: "",
  recentlyPlayed: [],
};

const reducer = (state = initialState, action) => {
  // The initial loggedIn state of false will be used
  // when the app loads and whoever is listening to it

  switch (action.type) {
    case "login_user_success":
      return {
        ...state,
        isLoggedIn: true,
        userName: action.userName,
      };

    case "logout_user":
      return {
        ...state,
        isLoggedIn: false,
        userName: "",
      };

    case "store_recently_played":
      return {
        ...state,
        recentlyPlayed: action.recentlyPlayed,
      };

    default:
      return state;
  }
};

export default reducer;
