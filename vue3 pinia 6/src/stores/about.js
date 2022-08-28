import { defineStore } from 'pinia'
import { computed, ref } from "vue";
import axios from "axios";

export const useAboutStore = defineStore("about", () => {
  const name = ref("mike");
  
  const setName = (userName) => {
    name.value = userName;
  };
  

  
  return {
    name,
    setName,
  };
})
