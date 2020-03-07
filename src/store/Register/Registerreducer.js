

export function registration(state = {}, action) {
  switch (action.type) {
    case "USERS_REGISTER_REQUEST":
      return { registering: true };
    case "USERS_REGISTER_SUCCESS":
      return {};
    case "USERS_REGISTER_FAILURE":
      return {};
    default:
      return state
  }
}