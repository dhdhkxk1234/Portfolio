<template>
    <div class="projects" ref="projectel">
        <v-container>
            <h2 class="title text-black">Career</h2><br/><br/><br/><br/><br/><br/>
            <div ref="project1el" class="card1container">
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <v-img src="~/assets/img/opserver.png" cover width="100%"></v-img>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                        <div class="project-card card-r card1">
                            <h3 class="project-title">Opserver</h3>
                            <h4 class="project-subtitle">Cryptect</h4>
                            <h5 class="project-description">웹을 기반으로한 다목적 지표관리 툴 개발.</h5>
                            <h5 class="project-description">서비스의 매출 관리나 회원 제재, 관리등의 기본적인</h5>
                            <h5 class="project-description">앱 관리 기능과 로그 분석, 예측, 오류 분석등의 기능 개발</h5>
                            <br/>
                            <h4 class="project-subtitle">개발 기간 : 6개월</h4>
                            <h4 class="project-subtitle">담당 업무 : 총괄 개발</h4>
                            <h4 class="project-subtitle">사용 기술 : .NET, JS, CSS, HTML</h4>
                        </div>
                    </v-col>
                </v-row>
            </div>
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>
            <div ref="project2el" class="card2container">
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <client-only>
                            <div class="project-card card2">
                                <h3 class="project-title">마왕성에 닿아라</h3>
                                <h4 class="project-subtitle">Cryptect</h4>
                                <h5 class="project-description">모바일 게임 마왕성에 닿아라 DBA 및 일부 컨텐츠 개발 참여</h5>
                                <br/>
                                <h4 class="project-subtitle">개발 기간 : 3개월</h4>
                                <h4 class="project-subtitle">담당 업무 : DBA, 컨텐츠 개발</h4>
                                <h4 class="project-subtitle">사용 기술 : Unity, MongoDb, JS, Node JS, C#</h4>
                            </div>
                        </client-only>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                        <you-tube style="margin-left : auto"
                        src="https://www.youtube.com/watch?v=QB_yUdJH3qs" 
                        ref="youtube" />
                    </v-col>
                </v-row>
            </div>
            <br/><br/><br/><br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>
            <div ref="project3el" class="card3container">
                <v-row>
                    <v-col cols="12" sm="6" md="6">
                        <div class="d-flex" style="width : 50%">
                            <img src="~/assets/img/souju1.jpg" style="width:85%; object-fit: fill" />
                            <img src="~/assets/img/souju2.png" style="width:85%; object-fit: fill" />
                        </div>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                        <div class="project-card card-r card3">
                            <h3 class="project-title">소우주</h3>
                            <h4 class="project-subtitle">Softdragon</h4>
                            <h5 class="project-description">하이퍼로컬라이징 SNS 서비스 개발.</h5>
                            <h5 class="project-description">CHAT GPT가 공개된 이후 SNS 서비스 중 <strong>가장 빠르게</strong></h5>
                            <h5 class="project-description">AI 커뮤니케이션 서비스를 도입하였음.</h5>
                            <br/>
                            <h4 class="project-subtitle">개발 기간 : 1년 6개월</h4>
                            <h4 class="project-subtitle">담당 업무 : 총괄 개발</h4>
                            <h4 class="project-subtitle">사용 기술 : .NET, JS, CSS, HTML, Vue JS, CapacitorJS, JAVA, Kotlin, Swif, MongoDB, PostgreSQL, Python</h4>
                            <br/>
                            <h4 class="project-subtitle">참고 자료</h4>
                            <a href="https://blog.naver.com/PostView.naver?blogId=vaid&logNo=223065081746&parentCategoryNo=&categoryNo=120&viewDate=&isShowPopularPosts=true&from=search">
                                네이버 블로그
                            </a>
                            <br/>
                            <video controls>
                                <source 
                                    src="~/assets/img/souju.mp4"
                                    type="video/mp4"
                                />

                            </video>
                        </div>
                    </v-col>
                </v-row>
            </div>
            <br/><br/><br/><br/><br/><br/>
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


const computedMarginLeft = computed(() => {
    if( mobile.value )
        return '0';
    return 'auto';
})


const computedCardAlignD = computed(() => {
    if( mobile.value )
        return 'center';
    return 'start'
});

const computedCardAlign = computed(() => {
    if( mobile.value )
        return 'center';
    return 'end'
});

const computedCardJustifyD = computed(() => {
    if( mobile.value )
        return 'center';
    return 'flex-start'
});

const computedCardJustify = computed(() => {
    if( mobile.value )
        return 'center';
    return 'flex-end'
});

const computedCardWidth  = computed(() => {
    if( mobile.value )
        return '100%';
    return "50%";
})

const projectel = ref(null);
const project1el = ref(null);
const project2el = ref(null);
const project3el = ref(null);

const flag1 = useIntersectionUi(projectel);
const flag2 = useIntersectionUi(project1el);
const flag3 = useIntersectionUi(project2el);
const flag4 = useIntersectionUi(project3el);

const computedCard1Transform = computed(() => {
    if( mobile.value || flag2.value )
        return '0';
    return "translateX(50%)";
});
const computedCard1Opacity= computed(() => {
    if( flag2.value )
        return 1;
    return 0;
});

const computedCard2Transform = computed(() => {
    if( mobile.value || flag3.value )
        return '0';
    return "translateX(-50%)";
});
const computedCard2Opacity = computed(() => {
    if( flag3.value )
        return 1;
    return 0;
});

const computedCard3Transform = computed(() => {
    if( mobile.value || flag4.value )
        return '0';
    return "translateX(50%)";
});
const computedCard3Opacity = computed(() => {
    if( flag4.value )
        return 1;
    return 0;
});

</script>

<style lang="scss" scoped>
.projects {
    padding : v-bind('computedPadding') 0rem;
    font-size : 1.4rem;
    width : 100vw;
}

.title {
    font-size : 4.2rem;
    font-weight: 500;
    text-align: center;
}

.card1 {
    transform : v-bind('computedCard1Transform');
}
.card2 {
    transform : v-bind('computedCard2Transform');
}
.card3 {
    transform : v-bind('computedCard3Transform');
}

.card1container {
    transition: all 0.4s;
    opacity: v-bind('computedCard1Opacity');
}
.card2container {
    transition: all 0.4s;
    opacity: v-bind('computedCard2Opacity');
}
.card3container {
    transition: all 0.4s;
    opacity: v-bind('computedCard3Opacity');
}
.project-card {

    display: flex;
    flex-direction: column;

    width : v-bind('computedCardWidth');

    transition: all 0.4s;
    transition-delay: 0.2s;

    
    .project-title {
        font-size : 2.8rem;
        color : black;
    }

    .project-description {
        font-size : 1.6rem;
        font-weight: 500;
        color : black;
    }

    .project-subtitle {
        font-size : 1.6rem;
        font-weight: 550;
    }

    align-items: v-bind('computedCardJustifyD');
    text-align: v-bind('computedCardAlignD');
    &.card-r {
        margin-left : v-bind('computedMarginLeft');
        align-items: v-bind('computedCardJustify');
        text-align: v-bind('computedCardAlign');
    }
}
</style>
