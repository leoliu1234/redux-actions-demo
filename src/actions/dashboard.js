import { createActions } from 'redux-actions';

// export const increment = createAction('INCREMENT', amount => amount);

export const { increment, decrement } = createActions({
    INCREMENT: amount => amount,
    DECREMENT: amount => amount
});
