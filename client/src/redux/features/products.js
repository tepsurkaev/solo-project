const initialState = {
  items: [],

  loading: false,
  adding: false,
  deleting: false,
  editing: false,
  error: null,
  editingProduct: {},
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case "products/load/pending":
      return {
        ...state,
        loading: true,
      };

    case "products/load/fulfilled":
      return {
        ...state,
        items: action.payload,
        loading: false,
      };

    case "products/load/rejected":
      return {
        ...state,
        error: action.error,
        loading: false,
      };

    case "product/delete/pending":
      return {
        ...state,
        deleting: true,
      };

    case "product/delete/fulfilled":
      return {
        ...state,
        items: state.items.filter((item) => item._id !== action.payload),
        deleting: false,
      };

    case "product/delete/rejected":
      return {
        ...state,
        error: action.payload,
        deleting: false,
      };

    case "product/add/pending":
      return {
        ...state,
        adding: true,
      };

    case "product/add/fulfilled":
      return {
        ...state,
        items: action.payload,
        adding: false,
      };

    case "product/add/rejected":
      return {
        ...state,
        error: action.error,
        adding: false,
      };

    case "product/edit/pending":
      return {
        ...state,
        editing: true,
      };

    case "product/edit/fulfilled":
      return {
        ...state,
        editing: false,
        items: state.items.map((item) => {
          if (item._id === action.payload.id) {
            return {
              ...item,
              ...action.payload.data,
            };
          }
          return item;
        }),
      };

    case "product/edit/rejected":
      return {
        ...state,
        editing: false,
      };

    case "products/editing-product":
      return {
        ...state,
        editingProduct: action.payload,
      };

    case "set/image":
      return {
        ...state,
        editingProduct: {
          ...state.editingProduct,
          img: action.payload,
        },
      };

    case "set/name":
      return {
        ...state,
        editingProduct: {
          ...state.editingProduct,
          name: action.payload,
        },
      };

    case "set/amount":
      return {
        ...state,
        editingProduct: {
          ...state.editingProduct,
          amount: action.payload,
        },
      };

    case "set/price":
      return {
        ...state,
        editingProduct: {
          ...state.editingProduct,
          price: action.payload,
        },
      };

    case "set/volume":
      return {
        ...state,
        editingProduct: {
          ...state.editingProduct,
          volume: action.payload,
        },
      };

    default:
      return state;
  }
};

export const addToEditingProduct = (product) => {
  return {
    type: "products/editing-product",
    payload: product,
  };
};

export const loadProducts = () => {
  return async (dispatch) => {
    dispatch({ type: "products/load/pending" });

    try {
      const response = await fetch("/products");
      const json = await response.json();

      dispatch({ type: "products/load/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "products/load/rejected", error: e.toString() });
    }
  };
};

export const addingProduct = (data) => {
  return async (dispatch) => {
    dispatch({ type: "product/add/pending" });

    try {
      const res = await fetch("/product", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          img: data.image,
          name: data.name,
          amount: data.amount,
          price: data.price,
          volume: data.volume,
        }),
      });

      const json = res.json();

      dispatch({ type: "product/add/fulfilled", payload: json });
    } catch (e) {
      dispatch({ type: "product/add/rejected", error: e.toString() });
    }
  };
};

export const deleteProduct = (id) => {
  return async (dispatch) => {
    dispatch({ type: "product/delete/pending" });

    try {
      await fetch(`/product/${id}`, {
        method: "DELETE",
      });

      dispatch({ type: "product/delete/fulfilled", payload: id });
    } catch (e) {
      dispatch({ type: "product/delete/rejected", error: e.toString() });
    }
  };
};

export const editProducts = (id, data) => {
  return async (dispatch, getState) => {
    const { products } = getState()
    dispatch({ type: "product/edit/pending" });

    try {
      await fetch(`/product/${products.editingProduct._id}`, {
        method: "PATCH",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          img: products.editingProduct.img,
          name: products.editingProduct.name,
          amount: products.editingProduct.amount,
          price: products.editingProduct.price,
          volume: products.editingProduct.volume,
        }),
      });

      dispatch({ type: "product/edit/fulfilled", payload: { id, data } });
    } catch (e) {
      dispatch({ type: "product/edit/rejected", error: e.toString() });
    }
  };
};

export default products;
