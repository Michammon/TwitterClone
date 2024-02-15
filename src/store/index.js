import { createStore } from 'vuex'

const getRandomTweet = () => {
  const users = ['user_1', 'user_2', 'user_3', 'user_4', 'user_5'];
  const randomUserIndex = Math.floor(Math.random() * users.length);
  const randomUser = users[randomUserIndex];

  return {
    id: Math.random().toString(36).substr(2, 9),
    author: randomUser,
    body: 'This is a random tweet!',
    likes: Math.floor(Math.random() * 100),
    retweets: Math.floor(Math.random() * 50),
    comments: [
      { user: 'user_1', body: 'Nice tweet!' },
      { user: 'user_2', body: 'I agree!' }
    ]
  };
};

export default createStore({
  state: {
    tweets: []
  },
  mutations: {
    addTweet(state, tweet) {
      state.tweets.unshift(tweet);
    }
  },
  actions: {
    addRandomTweet({ commit }) {
      const randomTweet = getRandomTweet();
      commit('addTweet', randomTweet);
    }
  },
  modules: {
  }
});