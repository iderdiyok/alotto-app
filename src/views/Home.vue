<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="flex flex-col justify-between lg:flex-row">
      <div class="mb-12 lg:max-w-lg lg:pr-5 lg:mb-0">
        <div class="max-w-xl mb-6">
          <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            Are you ready to win<br class="hidden md:block" />
            the
            <span class="inline-block text-yellow-500">EUROJACKPOT?</span>
          </h2>
          <p class="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae. explicabo.
          </p>
        </div>
      </div>
      <div class="px-5 pt-6 pb-5 text-center border border-gray-300 rounded lg:w-2/5">        
        <div  v-for="deadline in deadlines"
              :key="deadline.type"
              class="col-12 col-sm-6 col-md-4 mb-3">
          <Card class="h-100" :deadline="deadline" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FETCH_DEADLINES } from '@/queries';

import Card from '@/components/Card.vue';

export default {
  components: {
    Card,
  },
  apollo: {
    deadlines: {
      query: FETCH_DEADLINES,
      update({ deadlines }) {
        return deadlines.deadlines.filter(({ type }) => 'eurojackpot'.includes(type));
      },
    },
  },
  data: () => ({
    lotteries: ['eurojackpot'],
    deadlines: [],
  }),
};
</script>