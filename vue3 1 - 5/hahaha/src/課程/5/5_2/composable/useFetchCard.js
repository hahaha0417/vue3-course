import axios from "axios";
import { ref } from "vue";

export function useFetchCard() {

    const data = ref([]);

    const errorMessage = ref("");

    const fetchInit = async () => {
        try {
            const res = await axios.get(
                "https://60bd9841ace4d50017aab3ec.mockapi.io/api/post_card"
            );
            data.value = res.data;
        } catch (error) {
            errorMessage.value = "API 發生錯誤";
        }
        
    }

    

    return {data, errorMessage, fetchInit };
}





