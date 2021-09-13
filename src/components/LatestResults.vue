<template>
  <div class="max-w-lg sm:mx-auto lg:max-w-xl" >
      <div class="flex items-center duration-300 transform border rounded shadow mb-4 hover:scale-105 sm:hover:scale-110" v-for="draw in draws" :key="draw.date">
        <div class="grid grid-cols-8 gap-x-10">
          <div class="ml-2">
            <p class="font-semibold tracking-wide text-yellow-500">
              Date
            </p>
            <p class="mt-2">{{draw.date | date }}</p>
          </div>
          <div class="col-span-3 text-center ml-10">
            <p class="font-semibold tracking-wide text-yellow-500">
              Jackpot
            </p>
            <p class="mt-2">{{draw.jackpot /1000000}} Mio €</p>
          </div>
          <div class="col-span-4">
            <p class="font-semibold tracking-wide text-yellow-500">
              Winning Numbers
            </p>
            <div class="grid grid-cols-7 mt-2" 
                  >
              <div class="md:border-r" v-for="number in draw.numbers"
                  :key="number">
                <h6 class="font-bold text-center">{{number}}</h6>
              </div>
              <div class="text-yellow-500"
                    v-for="additionalNumber in draw.additionalNumbers"
                    :key="`super-${additionalNumber}`">
                <h6 class="font-bold text-center">{{additionalNumber}}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
</template>

<script>

import { FETCH_DRAWS } from '@/queries';

export default {
  props: {
    lottery: {
      type: String,
      required: true,
    },
  },
  apollo: {
    draws: {
      query: FETCH_DRAWS,
      variables() {
        return {
          limit: 6,
          lottery: this.lottery,
        };
      },
      update: data => data.draw.draws,
    },
  },
  data() {
    return {
      draws: [],
    };
  },
};
</script>


