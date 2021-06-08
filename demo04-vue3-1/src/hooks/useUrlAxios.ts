import { ref } from 'vue';
import axois from 'axios';

const useUrlAxios = (url: string) => {
    const result = ref(null);
    const loading = ref(true);
    const loaded = ref(false);
    const error = ref(null);

    axois.get(url).then(res => {
        loading.value = false;
        loaded.value = true;
        result.value = res.data;
    }).catch(e => { error.value = e; loading.value = false; });
    return {
        result, loading, error, loaded
    };
}
export default useUrlAxios;