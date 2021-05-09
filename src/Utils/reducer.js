export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  //Remove when development is completed
  // token:
  //   "BQBABXFxxwEAl7RXKGBaB4Ttoe9tJLacxgrKORA8-XX0sA5dGppjHGeT0k10enn62kssc-XDeNqpMiZL0w0jP8C0oX_nzyPZbMT0wl2QyR82SWCMIDocMlCTGDNNvhblkU-Y0jCZrmFRWkXnPybNyfSkaL8JeKs",
};

const reducer = (state, action) => {
  //   console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
