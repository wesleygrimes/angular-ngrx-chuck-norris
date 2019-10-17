import { createAction, props } from '@ngrx/store';

export const appComponentInitialized = createAction(
  '[App Component] Initialized'
);

export const loadAllRequested = createAction(
  '[App Component] Load All Requested'
);

export const loadCategoryRequested = createAction(
  '[App Component] Load Category Requested',
  props<{ category: string }>()
);
