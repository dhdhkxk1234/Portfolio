<template>
    <div class="banner d-flex justify-center align-center">
        <client-only>
            <div class="banner-bg banner-animated-after-content">
                <img src="~/assets/img/banner.jpg" />
            </div>
        </client-only>
        <v-container class="row" style="z-index : 1">
            <v-row justify="center" >
                <h1 class="banner-title text-center text-white">
                    {{  titleText }}
                    <span class="banner-title-end"></span>
                </h1>
            </v-row>
            <v-row justify="center" >
                <div class="banner-animated-after-content"
                style="width : 10rem; height : 0.5rem; margin: 2rem 0; background-color : #7C4DFF"></div>
            </v-row>
            <v-row justify="center" >
                <h4 class="banner-description text-center text-white banner-animated-after-content">
                    안녕하세요.<br/>
                    소프트웨어 개발자 이호종입니다.<br/>
                    MVP 구축에 기반하여 빠른 Output 개발 능력과<br/>
                    필요하다면 심도 높은 R&D까지 진행할 수 있는 인재입니다. 
                </h4>
            </v-row>
        </v-container>
        <div class="banner-bottom banner-animated-after-content">
            <v-icon icon="$adthick" color="white" size="48"></v-icon>
        </div>
    </div>
</template>

<script setup>
import { useDisplay } from 'vuetify'

const textAnimeFinishFlag = ref(false);

const titleText = useTypingAnimation({
    destText : "- 이호종 - \n 개발자 포트폴리오",
    fps : 20,
    onFinished : () => {
        textAnimeFinishFlag.value = true;
    }
});

const transitionOpacity = computed(() => {
    if( textAnimeFinishFlag.value )
        return 1;
    return 0;
})

const descriptionMaxSize = computed(() => {
    if( textAnimeFinishFlag.value )
        return '999px';
    return '0px';
})


const { mobile } = useDisplay();

const computedHeight = computed(() => {
    if( mobile.value )
        return '90vh';
    return '80rem';
})

const computedFontSize = computed(() => {
    if( mobile.value )
        return '0.75rem';
    return '1rem';
})

</script>

<style lang="scss" scoped>
.banner {
    position: relative;

    width : 100vw;
    height: v-bind('computedHeight');
    font-size : v-bind('computedFontSize');
    overflow: hidden;
    
    background-color: black;
}

.banner-bg {
    position: absolute;
    
    width : inherit;
    height: inherit;

    top : 0;
    left : 0;
    z-index: 0;
    object-fit: cover;
    width : inherit;
    height: inherit;

    display: block;

    > img {
        width : 100%;
        height: 100%;
        object-fit: cover;
        animation: blink 8s linear infinite both;
    }
}

.banner-title {
    position: relative;
    width : fit-content;
    white-space: pre;
    font-size : 4.2em;
    font-weight: 800;
}
.banner-title-end {
    position: absolute;
    animation: typing 0.8s infinite;
    border-right: 4px solid;
    padding-left : 0.1em;
    box-sizing: border-box;
    width : fit-content;
    height: 1.5em;
}
.banner-description {
    font-size : 1.6em;
    font-weight: 550;

    height : fit-content;
    max-height : v-bind('descriptionMaxSize');
}

.banner-animated-after-content {
    opacity: v-bind('transitionOpacity');
    transition: all 2s;
    
}

.banner-bottom {
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 1.5rem;
    animation: heartbeat 1.5s ease-in-out infinite both;

    cursor: pointer;
}

@keyframes typing {
    0% { 
        border-color : transparent;
    }
    49% {
        border-color : transparent;
    }
    50% {
        border-color : currentColor;
    }
    99% { 
        border-color : currentColor;
    }
}

@keyframes blink{
    0%{opacity:.2}
    2%{opacity:.4}
    3%{opacity:.2}
    5%{opacity:.6}
    100%{opacity: 0.2}
}

</style>