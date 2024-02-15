<template>
  <div class="home">
    <Tweet 
      v-for="tweet in tweets" 
      :key="tweet._id" 
      :tweet="tweet" />
  </div>
</template>

<script>
import { ref } from 'vue';
import Tweet from '../components/Tweet';
import ttweets from '../tweets';

export default {
  setup () {
    const tweets = ref(ttweets);

    return {
      tweets,
      Tweet
    }
  }
}
</script>
