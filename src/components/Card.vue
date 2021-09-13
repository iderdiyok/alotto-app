<template>
  <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <h2 class="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
        <span class="relative inline-block">
          <svg viewBox="0 0 52 24" fill="currentColor" class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-yellow-500 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
            <defs>
              <pattern id="903f4a9e-7ac3-441c-9613-04c15fcc0a14" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#903f4a9e-7ac3-441c-9613-04c15fcc0a14)" width="52" height="24"></rect>
          </svg>
          <span class="relative uppercase">{{deadline.type}}</span>
        </span>
      </h2>
    <div class="mb-10 border-t border-b divide-y">
      <div class="grid py-8 sm:grid-cols-4">
        <div class="mb-4 sm:mb-0">
          <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
            <p class="text-yellow-500 " aria-label="Category">jackpot</p>            
          </div>
        </div>
        <div class="sm:col-span-3 lg:col-span-2">
          <div class="mb-3">
            <p class="inline-block text-black">
              <span class="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                {{deadline.jackpot / 1000000}} Mio. €
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div class="grid py-8 sm:grid-cols-4">
        <div class="mb-4 sm:mb-0">
          <div class="space-y-1 text-xs font-semibold tracking-wide uppercase">
            <p class=" text-yellow-500" aria-label="Category">deadline</p>
          </div>
        </div>
        <div class="sm:col-span-3 lg:col-span-2">
          <div class="mb-3">
            <p class="inline-block text-black  ">
              <span class="text-3xl font-extrabold leading-none sm:text-4xl xl:text-4xl">
                {{deadline.deadline | date}}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="text-center">
      <a href="/" aria-label="" class="animate-bounce inline-flex items-center font-semibold transition-colors duration-200 text-gray-800 hover:text-yellow-500 hover:animate-none">
        <router-link :to="`/${deadline.type}`">Play Now</router-link>
        <svg class="inline-block w-3 ml-2" fill="currentColor" viewBox="0 0 12 12">
          <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z"></path>
        </svg>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    deadline: {
      type: Object,
      required: true,
    },
  },
};
</script>