import { defineStore, storeToRefs } from 'pinia'
import { computed, ref } from "vue";
import axios from "axios";
import { useAboutStore } from "./about.js";

export const useCounterStore = defineStore("counter", () => {
  
  const aboutStore = useAboutStore();
  const { name } = storeToRefs(aboutStore);


  const counter = ref(0);
  
  const cardList = ref([]);

  const doubleCount = computed(() => {
    return counter.value * 2 + name.value;
  })

  const addCount= () => {
    counter.value++;
  }

  const fetchApiData = async () => {
    try {console.log(444);
        const res = await axios.get(
            "https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card"
        );
        cardList.value = res.data;
    } catch (error) {
        errorMessage.value = "API 發生錯誤";
    }
  }

  
  return {
    counter,
    addCount,
    doubleCount,
    cardList,
    fetchApiData,
  };
})

// export const useCounterStore = defineStore({
//   id: 'counter',
//   state: () => ({
//     counter: 0
//   }),
//   getters: {
//     doubleCount: (state) => state.counter * 2
//   },
//   actions: {
//     addCount() {
//       this.counter++
//     }
//   }
// })
