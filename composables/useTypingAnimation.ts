
import * as Hangul from 'hangul-js';

type typingAnimationOptions = {
    destText : string,
    fps : number,
    onFinished : Function | undefined
}

const defaultTypingAnimationOption : typingAnimationOptions = {
    destText : "Hello World!",
    fps : 10
}

export function useTypingAnimation(_options : typingAnimationOptions)
{
    const options = Object.assign({}, defaultTypingAnimationOption, _options);

    const text = ref("");
    const length = options.destText.length;
    let curIdx = 0;
    let reservWords : string[] = [];

    useFPSCallback((_stopFunc : Function) => {
        if( reservWords.length > 0 )
        {
            const textLength = text.value.length;
            const nextWord = reservWords.shift();
            if( nextWord == undefined )
                return;
            const lastWord = text.value[textLength - 1];
            const lastDisassemble =  Hangul.disassemble(lastWord);
            const assemble = Hangul.assemble([...lastDisassemble, nextWord]);
            text.value = text.value.substring(0, textLength - 1) + assemble;
        }
        else if( curIdx < length) {
            const disassemble = Hangul.disassemble(options.destText[curIdx]);
            reservWords.push(...disassemble);
            const firstWord = reservWords.shift();
            text.value += firstWord;
            ++curIdx;
        }
        else {
            _stopFunc();
            if( options.onFinished != null )
                options.onFinished();
        }
    }, _options.fps);
    return text;
}