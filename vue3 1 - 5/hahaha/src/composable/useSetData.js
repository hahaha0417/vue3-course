import { ref, onMounted, onUnmounted, readonly } from "vue";

export function useSetData(val) {

  const data = ref(val);


  const setData = (val) => {
    // console.log(e);
    data.value = val;
  };


  return {
    data: readonly(data),
    setData,
  }
}