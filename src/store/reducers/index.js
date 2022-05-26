import { SET_MAP_VISIBLE } from "../actionsType/actionType";

const initialState = {
  latitud: "",
  longitud: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_MAP_VISIBLE:
      return {
        ...state,
        latitud: payload[0].latitud,
        longitud: payload[0].longitud,
      };
    default:
      return state;
  }
};

export default reducer;
