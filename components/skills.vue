<template>
    <div class="skills" ref="skills">
        <v-container>
            <h2 class="title text-white">Skils</h2><br/>
            <br/>
            <v-row justify="center">
                <client-only>
                    <v-chip-group
                        class="text-white"
                        selected-class="selected"
                        column
                            v-model="filter">
                                <v-chip
                                v-for="tag in tags"
                                :key="tag" size="large"
                                >
                                    <span class="text-bold" style="font-size : 1.6rem;">{{ tag }}</span>
                                </v-chip>
                    </v-chip-group>
                </client-only>
            </v-row>
            <br/>
            <br/>
            <br/>
            <v-row justify="start" style="row-gap : 1rem">
                <client-only>

                    <v-card class="mx-auto" v-for="item in fillteredItems" :key="item.title" :width="cardMaxWidth">
                        <v-img
                            :src="item.src"
                            :width="cardWidth"
                            aspect-ratio="12/9"
                            style="aspect-ratio : 12/9"
                            cover>
                        </v-img>
                        <v-card-title style="font-size : 1.6rem; font-weight : 600">
                            {{ item.title }}
                        </v-card-title>
                        <v-card-subtitle style="font-size : 1.2rem; font-weight : 600">
                            {{ rank[item.rank].title }}
                        </v-card-subtitle>
                        <br/>
                        <v-card-text style="font-size : 1.4rem; padding : 1rem; line-height : 1.5">
                            {{ rank[item.rank].description }}
                        </v-card-text>
                        <br/>
                    </v-card>
                </client-only>
            </v-row>
        </v-container>
    </div>
</template>

<script lang="ts" setup>

import { useDisplay } from 'vuetify';

const { mobile } = useDisplay();

const computedPadding = computed(() => {
    if( mobile.value )
        return '4rem';
    return '12rem';
});

const cardMaxWidth = computed(() => {
    if( mobile.value )
        return '16rem';
    return '24.4rem';
});

const cardWidth = computed(() => {
    if( mobile.value )
        return '100%';
    return 344;
});

const skills = ref(null);
const showFlag = useIntersectionUi(skills, 0.1);
const filter = ref(0);

const computeOpacity = computed(() => {
    if( showFlag.value )
        return 1;
    return 0;
})


const tags = [
        'ALL',
        'Language',
        'Publishing',
        'Front-end',
        'Back-end',
        'Desktop',
        'Mobile',
        'DB',
        'Deployment',
        'ETC'
      ];

      const rank = [
        {
            title : "familiar",
            description : "다루는데 능숙함."
        },
        {
            title : "well-informed",
            description : "큰 문제 없이 실 업무에 적용 가능함."
        },
        {
            title : "useable",
            description : "단순 작업은 가능하나 복잡한 프로젝트의 경우 R&D가 필요함."
        },
        {
            title : "tried",
            description : "용법은 알고 있으나 경험이 부족함."
        }
      ]

const skillItems = [
    {
        type : [2, 3],
        src : "https://i.namu.wiki/i/OhSlSmlCSyAtrMPf6kkLLC-O1Zij8MY8KEhceHuqjtnUjQY_aS7XzJ2WvjhWVxY6lGUNMpxm_uRJxCZCudRCSmzF4caGaaUjWBDF9D9-qyzCTQOE9EhR6zH7C--6OhR7t3zZIVHMTYUurimPwE5nKA.svg",
        title : "HTML",
        rank : 1
    },
    {
        type : [2, 3],
        src : "https://i.namu.wiki/i/QuIlCdMJ4MlLTKnjTdVRZYKuV61DBR65j8SfKs0ngMl3UYREwolygXazZ0g0kRcMBRNE8V07US9sNPeCuPNH7inKxm7RRGOxnJ03_nGR5Wc72-3WUCw6mBhzfwEt23nJhQorzqTXNAzaVYbqJKaHtg.svg",
        title : "CSS",
        rank : 1
    },
    {
        type : [2, 3],
        src : "https://i.namu.wiki/i/sRrVzHzXCzqB7amvCOAoSPnZv9bCb-zi0EGI4_gAaTuVhAuC5KGs4n8Jx6lF_E8-jcPh1rAw9TJsTyTxdzAQ9nd3jmXZyXiMtNxSuWe0fyGiNL9ZTtNssX0zw0QarToBV5WVLUbgljwAe1n--XRNaQ.svg",
        title : "SCSS",
        rank : 1
    },
    {
        type : [1, 2, 3, 4],
        src : "https://i.namu.wiki/i/NZaj_sEhAHzU5qjDsebK9GKh__CNrDkEymoelgahQUmtrKRc_2QzqT9v4mBbjXdftlEtVfK59tqvNuyKswWceyYfRJu_o4L4O20w98IK4HYmE8rw7TQjWe8-k5nT9-q4y7R3ETDEm6Um1nJR7ks8XQ.svg",
        title : "Java Script",
        rank : 0
    },
    {
        type : [1, 2, 3, 4],
        src : "https://i.namu.wiki/i/t6Rr8Gd0BQTeLHa98QNan1u9_NUe7yJUc6OQty93Lf9_qxuS96SOcVjhIq1fy4GcxCMnzZRvJQulUcuCmGKCOO1tTqP3K1YPphHR7XQtq5Jz7p-qLpkYq02xAsA7IXeDgA6sA7bXUbdwoG5KJog3wQ.webp",
        title : "Type Script",
        rank : 1
    },
    {
        type : [1],
        src : "https://i.namu.wiki/i/XtRyySjBiZA9VvUk0MRF_eLG4Fko8qYzudP20oWHB0RF1KffCb7YCikGlnSf6H8SughXA52dskE5-Ha1QHJj7IdqI_XIvz8L_Q8fl0AimHmTn3lwbEOL92sqClWwtztmiaNaOOZpkqzZxhN2D8HPYg.svg",
        title : "Python",
        rank : 2
    },
    {
        type : [1, 3],
        src : "https://i.namu.wiki/i/Taa0KBaV9SO31HMWBd-25v6qN4BSf1KCC7ONSJ2vWWGkhF5ob-jIk7BjF0NxufhhFovIcDQT7aXJcUtC62iofnMHJd9FIoTmSYSyGKZmp3DuBXktjweY2YY15885G-LyDjtF3greZzyv4J-bxQnCAA.svg",
        title : "Vue.Js",
        rank : 0
    },
    {
        type : [4],
        src : "https://i.namu.wiki/i/SHTlupzclUmxFnSHRRBMMv3gd-uHkoEhjSQq3Qx7JUntIp3BPRTJ2QjzCmf5rX609I6p1EaLtwI1UXIXPVpSii6lkcT1tryu1PnaQC0dcdUmWzzxA_-aY3bHqWbccebMSFBhl8xMIGaarrRzuprPnw.svg",
        title : "Node Js",
        rank : 1
    },
    {
        type : [1, 4, 5],
        src : "https://i.namu.wiki/i/w1SkuS1Vzxv76SgjGurZgVcw3IRwWNmlw3akTKoITvu3PhKWnJTMGF0IYiIYY13qvUAC5-he9zLpk9BMcu6PKaTtVKQNGvrgxKT_EYxpr7aFyB97sj0kGtqAxOQv0qgDIw32WO-GfR9cJJ2YXeSYSA.svg",
        title : ".NET",
        rank : 0
    },
    {
        type : [1, 4, 5, 6],
        src : "https://i.namu.wiki/i/JAw4a5BrLSO0T0Ej3PXncoifHtxT2Ttotg0ZbovE5l52iALwbQgjQVXaUw96V3axEv-1m63aT0Du9WOU-pwi__0jkCxkIR8_-9GhsAilrb61NPNAxlzzP1DUn8hRCKoMmgpJK0lUbyVGiCtyCtvW9g.svg",
        title : "Java",
        rank : 1
    },
    {
        type : [1, 5, 6],
        src : "https://i.namu.wiki/i/hczmDOEEAD44ZaxtkSraFQl7hnvJhEh3vtubfy8xgshHL_2XvcpUw6gL9uWuG17ctbrh0d5JoS6k0AER1f-D51f2GAWJOhvAn3RjVuQyuts9oUYCrYaMDKk8LU6NO9xun6FGPsneHNqTr8K9RFc32Q.svg",
        title : "Kotlin",
        rank : 2
    },
    {
        type : [1, 5, 6],
        src : "https://i.namu.wiki/i/Wh7O2_6T8USoNV7W_4Jg_2iSTW3hKo2q6ryvdpcI3JJPUyuGSDw9AgJaahq4Rl9m0QI4RhydwYlLi0XSs-H5Mw.svg",
        title : "Swift",
        rank : 3
    },
    {
        type : [3, 6],
        src : "https://capacitorjs.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-light.6f15363c.png&w=256&q=75",
        title : "Capacitor JS",
        rank : 0
    },
    {
        type : [7],
        src : "https://i.namu.wiki/i/zZbGMMWPpfkKQl_pHyl2Yl8yvj6btkT_Pq8MHFD2iDMFHCqxUI9EyjegsOT4rBJAS0qNCSsl2DeqSR4cOMngxOqq1hNxdqg1JMpZRNpb6xK-58vsfL1g9R125IXxvQhLIfhQk-4fR0Gbfpg9PefrNQ.svg",
        title : "MySQL",
        rank : 2
    },
    {
        type : [7],
        src : "https://i.namu.wiki/i/tJDMgS5vFCbtUMdqZ7oCorwZq4vT74_GKNWGE8ews0GhFIKwoOO4EtuwPqYdFOplwNUHguoScTBSsMl_hX-d87-k05qvoEwWP6n1Rcvs7NpW-HsQv8yujD6whSosI2sgDPb7i_uDjud4j18QkJrilg.svg",
        title : "Mongo Db",
        rank : 0
    },
    {
        type : [7],
        src : "https://i.namu.wiki/i/l1xOpkJTp44c4sT4aIi90CrNgTenF3E75zdh-qhG-nXvg8ZUSCX7wdpMbcU1Pwy7njQWwB8cbzW2ecf9TZjWGdbvSJfhrPusdEMtSZY2DE8pIWRjWqNNw_cdfw6p9OY_OM3_qS3uSXMLkghHCqS3ww.svg",
        title : "PostgreSQL",
        rank : 1
    },
    {
        type : [7],
        src : "https://rastalion.me/wp-content/uploads/2019/09/redis.png",
        title : "Redis",
        rank : 2
    },
    {
        type : [8],
        src : "https://i.namu.wiki/i/wjB37UPJWnW1NBCI4xWC5-ou7ubNp-6e-2cUwAh4EEY0hW8gauRZM12WoRTGfHw_kzs82G6ZXVICbnRnCo2QdVCJrl8KTrlzoPM93IHOY6sEcd_YyvsMLubbUaxcEXGVBRc6jCemNYtkRTLCT7nThQ.svg",
        title : "Docker",
        rank : 2
    },
    {
        type : [8],
        src : "https://i.namu.wiki/i/41l4-rc6fbnCPrgOyGuhxVAOf6fPUOGWHQBWKpDv0TIPSesypoazn_Qcpew-mSdIsrXNKrOFKXMwQMrC3OoZda-exUeRhnnjmi3GaDLNdbdho-rKIJNW3-6HISuWWup90xeNBI88Z_ZrejVQt-zE6g.svg",
        title : "Git",
        rank : 1
    },
    {
        type : [8],
        src : "https://i.namu.wiki/i/4iAGdvymZLPpkQwDW7NdMm3aKnqIxacXroeHQhaBr9u0LbK8-D9cOA2oAwNXIm3YP1WYEl2E9Hny4CiMtIbfK3-Hq_9Gzdo_rnnaTU29E8iV2yqWCKIMEk8GhuK5BvsWWiCDC2YqwqDodEne6eZp_g.webp",
        title : "Jenkins",
        rank : 2
    },
    {
        type : [8],
        src : "https://i.namu.wiki/i/tETfSDEVrVylxU-P78wR0-fdAX3hmVAYV17pMASKoTvrx3DrcDpS5wCiHEpG68WSj6oHpQ8FQWlj0kZyaod9tQ.svg",
        title : "Nginx",
        rank : 1
    },
    {
        type : [9],
        src : "https://i.namu.wiki/i/qhsRIBALagdKRoXMMsh4xeNME9ks4VgyOR2sYEILz-XZz4lzXrZu1Jbayrk_O5aBbiQ3dyoz62ryHGGAlPkuMakr9h4t9IrkmEb4fLPr1mEDgx-vyTA5C62gIjvdJU2cu9kmOHAMVPBWKW56mxmSIA.svg",
        title : "Figma",
        rank : 1
    },
    {
        type : [9],
        src : "https://i.namu.wiki/i/B4noSLfMmWGvQ4bhy-y1bavy2jJcNP1ymix_hKJnCFg9H6fzVKyWRg4cLnAgerSHyt4GcHPuhZ4qwV4DefJDIHxQI_hmYr177_0jBtCbfcEpenDi5XdhPzjeucgr8SnwrDlB0DRX_WCn1E223m4qTg.svg",
        title : "Photoshop",
        rank : 2
    }
]

const fillteredItems = computed(() => {
    if( filter.value == 0 )
        return skillItems;

    return skillItems.filter(x => {
        return x.type.findIndex(y => y == filter.value) != -1;
    });
})
</script>

<style lang="scss" scoped>
.skills {
    background: linear-gradient(#99C1C0, #A3CAC7, #99C1C0);
    padding : v-bind('computedPadding') 0rem;
    text-align: center;
    
    transition: all 0.4s;
    opacity: v-bind('computeOpacity');
    width : 100vw;
}

.title {
    font-size : 4.2em;
    font-weight: 550;
}

.selected {
    background-color: white;
    color : black;
}
</style>