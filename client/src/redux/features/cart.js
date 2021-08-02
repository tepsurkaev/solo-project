const initialState = {
  items: [],

  loading: false,
  adding: false,
  deleting: false,
  editing: false,
  error: null,
  isActive: true,
};

const cart = (state = initialState, action) => {
  switch (action.type) {
    case "productsInCart/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "productsInCart/load/fulfilled":
      return {
        ...state,
        loading: false,
        items: action.payload,
      };

    case "productsInCart/load/rejected":
      return {
        ...state,
        error: action.error,
      };

    case "productInCart/add/pending":
      return {
        ...state,
        adding: true,
      };

    case "productInCart/add/fulfilled":
      return {
        ...state,
        adding: false,
      };

    case "productInCart/add/rejected":
      return {
        ...state,
        adding: false,
        error: action.error,
      };

    default:
      return state;
  }
};

export const getProductsInCart = () => {
  return async (dispatch) => {
    dispatch({ type: "productsInCart/load/pending" });

    try {
      const res = await fetch("/cart");
      const json = await res.json();

      dispatch({ type: "productsInCart/load/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "productsInCart/load/rejected", error: e.toString() });
    }
  };
};

export const addProductInCart = (productId) => {
  return async (dispatch) => {
    dispatch({ type: "productInCart/add/pending" });

    try {
      await fetch(`/cart/610645dc5acc8d315890ce53`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json; charset=utf-8",
        },
        body: JSON.stringify({
          productId: productId,
        }),
      });

      dispatch({ type: "productInCart/add/fulfilled" });
    } catch (e) {
      dispatch({ type: "productInCart/add/rejected", error: e.toString() });
    }
  };
};

export default cart;
