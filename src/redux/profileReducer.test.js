import profileReducer, {
  addPostActionCreator,
  deletePostActionCreator,
} from './profileReducer';

const state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likes: 11 },
    { id: 2, message: 'You can do it!', likes: 22 },
    { id: 3, message: 'Lets study React', likes: 5 },
  ],
};

it('new post should be added', () => {
  // 1. test data
  // 2. action
  const action = addPostActionCreator('test text');
  const newState = profileReducer(state, action);
  // 3. expectation
  expect(newState.posts.length).toBe(4);
});

it('after deleting length of message should be decrement', () => {
  const action = deletePostActionCreator(1);
  const newState = profileReducer(state, action);
  expect(newState.posts.length).toBe(2);
});
