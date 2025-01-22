import { createAction } from '@ngrx/store';

export const increment = createAction('increment'); //The string 'increment' must be unique
export const decrement = createAction('decrement');
export const reset = createAction('reset');
