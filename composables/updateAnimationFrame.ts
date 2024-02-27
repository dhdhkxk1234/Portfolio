import { onMounted, onUnmounted } from 'vue';

export function useUpdateAnimationFrame(_callback : Function) {
    let updateAnimationFrameFlag = true;
    
    const stop = () => {
        updateAnimationFrameFlag = false;
    }

    const update = () => {
        _callback(stop);
        if( updateAnimationFrameFlag )
            requestAnimationFrame(() => update());
    }

    onMounted(() => {
        update();
    });
    onUnmounted(() => {
        stop();
    });
}

export function useFPSCallback(_callback : Function, _fps : number) {
    const fpsInterval = 1000 / _fps;

    let then = Date.now();

    useUpdateAnimationFrame((_stopFunc : Function) => {
        const now = Date.now();
        const elapsed = now - then;

        if( elapsed > fpsInterval )
        {
            then = now - (elapsed % fpsInterval);
            _callback(_stopFunc);
        }
    });
}