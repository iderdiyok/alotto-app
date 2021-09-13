<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
    <div class="max-w-xl mb-10 md:mx-auto text-center lg:max-w-2xl md:mb-12">
      
      <h1 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 lg:text-5xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-yellow-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="a0b40128-6963-4319-aeeb-471e92fa2d74" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#a0b40128-6963-4319-aeeb-471e92fa2d74)" width="52" height="24"></rect>
          </svg>
          <span class="relative uppercase">{{lottery}}</span>
        </span>
      </h1>
      <p class="text-xl text-gray-700 md:text-3xl">
          {{deadline.jackpot / 1000000}} Mio. €
      </p>
        <a href="#" class="inline-block px-10 py-2 mt-4 text-xs font-semibold tracking-wider text-yellow-900 uppercase rounded-full bg-yellow-400">
          play now
        </a>
    </div>
    <div class="rounded p-2 lg:p-4 mb-5 bg-indigo-50 max-w-lg sm:mx-auto lg:max-w-xl">
      <div class="flex items-center mb-1 ">
        <p class="text-lg font-semibold sm:text-base">Latest Results</p>
      </div>
    </div>
    <LatestResults :lottery="lottery" />
    <Pagination />
    </div>
</template>

<script>
import { FETCH_DEADLINES } from '@/queries';
import LatestResults from '@/components/LatestResults.vue';
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
     LatestResults,
     Pagination
  },
  props: {
    lottery: {
      type: String,
      required: true,
    },
  },
  apollo: {
    deadline: {
      query: FETCH_DEADLINES,
      update({ deadlines }) {
        return deadlines.deadlines.find(dl => dl.type === this.lottery);
      },
    },
  },
  data: () => ({
    deadline: {
      deadline: 0,
      jackpot: 0
    },
  }),
};
</script>
