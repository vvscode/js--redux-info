// https://redux.js.org/docs/advanced/Middleware.html
// https://redux.js.org/docs/api/applyMiddleware.html
const logger = ({ /* dispatch, */ getState }) => next => action => {
  console.info("Custom logger:", action.type, action.payload);
  next(action);
};

export default logger;
