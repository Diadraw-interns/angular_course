import {
  createAction,
  createFeature,
  createReducer,
  createSelector,
  on,
  props,
} from '@ngrx/store';
import { Product } from '../../domain/models';

export interface CartState {
  items: Product[];
}

const initialState: CartState = {
  items: [],
};

export const addProductToCart = createAction(
  'Add product to cart',
  props<{ product: Product }>()
);

export const cartFeature = createFeature({
  name: 'cart',
  reducer: createReducer<CartState>(
    initialState,
    on(addProductToCart, (state, { product }) => ({
      ...state,
      items: [...state.items, product],
    }))
  ),
  extraSelectors: ({ selectItems }) => ({
    selectCartItemsCount: createSelector(selectItems, (items) => items.length),
  }),
});
export const { selectCartItemsCount, selectItems } = cartFeature;
