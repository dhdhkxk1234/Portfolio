<template>
    <div class="aboutme" ref="aboutme">
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="6" md="4">
                    <h2 class="title">About Me</h2>
                    <br/>
                </v-col>
                <v-col class="description" cols="12" sm="6" md="6">
                    <div class="card">
                        <h3 class="subtitle">
                            RESEARCHER
                        </h3>
                        <span class="text">
                            새로운 기술이나 지식을<br/>
                            연구하는것을 좋아합니다.<br/>
                            단순 학습이 아닌 실제 사용 및 분석하여<br/>
                            현재 프로젝트에 맞춤 솔루션을 찾습니다.
                        </span>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div class="card">
                        <h3 class="subtitle">
                            DOER
                        </h3>
                        <span class="text">
                            새로운 프로젝트나 아이디어가 진행될 때<br/>
                            생각보다는 실행에 옮깁니다.<br/><br/>
                            Output을 최우선으로 두되<br/>
                            최소한의 MVP를 중시하며 작업합니다.
                        </span>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                    <div class="card">
                        <h3 class="subtitle">
                            LAZY
                        </h3>
                        <span class="text">
                            비효율인 반복작업은 지양합니다.<br/><br/>
                            반복되는 업무의 자동화와 시간 단축을 위해<br/>
                            코드 퀄리티 및 인프라 구축을 신경 쓰는 편입니다.
                        </span>
                        <br/>
                        <br/>
                        <br/>
                    </div>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup lang="ts">
import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();

const computedPadding = computed(() => {
    if( mobile.value )
        return '4rem';
    return '12rem';
})
const computedAlign = computed(() => {
    if( mobile.value )
        return 'center';
    return 'left';
})


const aboutme = ref(null);
const showFlag = useIntersectionUi(aboutme);

const computeOpacity = computed(() => {
    if( showFlag.value )
        return 1;
    return 0;
})

const computeTransform = computed(() => {
    if( showFlag.value )
        return "none";
    return "translateX(100px)";
})

</script>

<style lang="scss" scoped>
.aboutme {
    padding : v-bind('computedPadding') 0rem;
    font-size : 1.4rem
}

.title {
    font-size : 3.6rem;
    font-weight: 500;
    text-align: v-bind('computedAlign');
    
    opacity: v-bind('computeOpacity');
    transition: all 0.4s;
}

.description {
    box-sizing: border-box;
}

.card {
    opacity: v-bind('computeOpacity');
    transform: v-bind('computeTransform');
    transition: all 0.3s linear;
    
    @for $i from 1 through 3 {
        &:nth-child(#{$i}){
            transition-delay : calc(0.1s + (0.05s * $i));
        }
    }
}

.subtitle {
    font-size : 2.4rem;
    text-decoration: underline;
}
</style>