const redux = require("redux");

const counterReducer = (state, action) => {
  return {
    counter: state.counter + 1,
  };
};

const store = redux.createStore(counterReducer);

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

for (let x = 0; x < 10; x++) {
  counterSubscriber();
}
