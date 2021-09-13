<template>
  <div class="flex justify-center mt-10 max-w-lg sm:mx-auto lg:max-w-xl">
    <a href="#" class="flex items-center px-4 py-2 mx-1 text-gray-500 bg-indigo-100 rounded-md cursor-not-allowed">
      previous
    </a>
    <div class="flex" v-for="(item, index) in 5" :key="index">
      <a href="#" class="flex items-center px-4 py-2 mx-1 text-gray-700 transform bg-indigo-100 rounded-md hover:bg-indigo-400 hover:text-indigo-100">
        {{ item }}
      </a>
    </div>
    <a href="#" class="flex items-center px-4 py-2 mx-1 text-gray-700 transform bg-indigo-100 rounded-md hover:bg-indigo-400 hover:text-indigo-100">
      Next
    </a>
  </div>
</template>