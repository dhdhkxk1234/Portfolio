import { onMounted, onUnmounted } from 'vue';

export function useIntersectionUi(_element : Ref<any>, _threshold : number = 0.3) {

    const showFlag = ref(false);

    if( !process.browser )
        showFlag.value = true;
    else {
        const checkIntersection = (_e : IntersectionObserverEntry[]) => {
            const intersectings = _e.filter(x => x.isIntersecting);
            if( intersectings.length > 0 )
                showFlag.value = true;
            else 
                showFlag.value = false;
        }

        const observer = new IntersectionObserver(checkIntersection, {
            threshold : _threshold
        });

        onMounted(() => {
            showFlag.value = false;
            if( _element.value != null )
                observer.observe(_element.value);
        })
        onUnmounted(() => {
            observer.disconnect();
        })

    }

    return showFlag;
}
