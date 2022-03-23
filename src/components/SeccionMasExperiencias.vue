<template>
    <div class="more_experiences_section component SeccionMasExperiencias">
        <div class="more_experiencies_section_header">
            <div class="more_experiences_title">
                Más experiencias
            </div>
            <div class="see_all_text">
                Ver todas
            </div>
        </div>
        <div class="clear_both"></div>
        <div class="padding_vertical_4">
            <div class="padding_bottom_4" v-for="(user_comment, user_comment_index) in user_comments" v-bind:key="'comment-' + user_comment_index">
                <div class="user_comment_card">
                    <table class="break_word">
                        <tbody>
                            <tr>
                                <td>
                                    <div class="user_profile_image_wrapper">
                                        <img class="user_profile_image"
                                            :src="user_comment.owner.picture" alt="" />
                                    </div>
                                </td>
                                <td class="width_100x100">
                                    <div class="user_comment">
                                        {{ user_comment.text }}
                                    </div>
                                    <div class="user_name">
                                        {{ user_comment.owner.firstName }} {{ user_comment.owner.lastName }}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <div class="comment_counter">
                                        {{ user_comment.comments }} comentarios
                                    </div>
                                </td>
                                <td>
                                    <div class="read_more_text">
                                        leer más &gt;
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script>

const comentarios_asincronos = [{
    "owner": {
        "id": "uQrnqsqyh8FjSXAPc7oA",
        "email": "emilie.lambert@example.com",
        "title": "mrs",
        "picture": "https://randomuser.me/api/portraits/women/93.jpg",
        "firstName": "Emilie",
        "lastName": "Lambert"
    },
    "id": "UWdcOFTc7DfzOhI6LpI4",
    "image": "https://img.dummyapi.io/photo-1564694202779-bc908c327862.jpg",
    "publishDate": "2020-05-24T14:53:17.598Z",
    "text": "Contentísima con mi aumento de labios",
    "link": "https://www.multiestetica.com/aumento-labios/experiencias/contentisima-doctor-bentue-172717",
    "comments": 43
}, {
    "owner": {
        "id": "t3k3dx7zDMAKjCEeXl9Q",
        "title": "mr",
        "picture": "https://randomuser.me/api/portraits/men/54.jpg",
        "firstName": "Marius",
        "email": "marius.larsen@example.com",
        "lastName": "Larsen"
    },
    "id": "VGyIwGVWeeurHv5bSZgx",
    "image": "https://img.dummyapi.io/photo-1510414696678-2415ad8474aa.jpg",
    "publishDate": "2020-05-24T07:44:17.738Z",
    "text": "Me encantan mis labios!! Gracias al equipo de Dorsia 💖",
    "link": "https://www.multiestetica.com/aumento-labios/experiencias/me-encantan-mis-labios-gracias-al-equipo-de-dorsia-173968",
    "comments": 31
}, {
    "owner": {
        "id": "a9IzuhtufH0GNRAyHCoT",
        "firstName": "Karoline",
        "lastName": "Sviggum",
        "picture": "https://randomuser.me/api/portraits/women/61.jpg",
        "title": "mrs",
        "email": "karoline.sviggum@example.com"
    },
    "id": "RjkVphYP4p3N5SC5JOXh",
    "image": "https://img.dummyapi.io/photo-1581804928342-4e3405e39c91.jpg",
    "publishDate": "2020-05-23T22:56:11.424Z",
    "text": "Mi aumento de labios con ácido hialurónico",
    "link": "https://www.multiestetica.com/aumento-labios/experiencias/increible-mas-confianza-mucha-mas-ganas-de-tomarme-fotos-de-sentirme-comoda-un-cambio-160328",
    "comments": 7
}, {
    "owner": {
        "id": "1pRsh5nXDIH3pjEOZ17A",
        "lastName": "Vicente",
        "title": "miss",
        "firstName": "Margarita",
        "email": "margarita.vicente@example.com",
        "picture": "https://randomuser.me/api/portraits/women/5.jpg"
    },
    "id": "5zNq7oqJ0RWtPcY5ZiWR",
    "image": "https://img.dummyapi.io/photo-1574457547512-5b1646994eea.jpg",
    "publishDate": "2020-05-23T18:52:32.613Z",
    "text": "Increíble, más confianza, mucha más ganas de tomarme fotos de sentirme cómoda, un cambio",
    "link": "https://www.multiestetica.com/aumento-labios/experiencias/mi-aumento-de-labios-con-acido-hialuronico-149335/",
    "comments": 28
}, {
    "owner": {
        "id": "GorKRYsi8zHkLq9siyfU",
        "title": "miss",
        "picture": "https://randomuser.me/api/portraits/women/13.jpg",
        "firstName": "Kayla",
        "lastName": "Bredesen",
        "email": "kayla.bredesen@example.com"
    },
    "id": "f8FuXRIKHhPN3kgcMIEf",
    "image": "https://img.dummyapi.io/photo-1498534928137-473daa67f5c4.jpg",
    "publishDate": "2020-05-23T14:42:22.808Z",
    "text": "Mi experiencia de aumento de labios con ácido hialurónico",
    "link": "https://www.multiestetica.com/aumento-labios/experiencias/mi-experiencia-de-aumento-de-labios-con-acido-hialuronico-147505",
    "comments": 18
}];

export default {
    name: "SeccionMasExperiencias",
    props: {},
    data() {
      return {
          user_comments: []
      };
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
        // Pongo un delay de un segundo para ver que se puede cargar asíncronamente.
        setTimeout(() => {
            this.user_comments = comentarios_asincronos.filter(comment => comment.comments > 20);
        }, 1000);
    },
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
    activated() {},
    deactivated() {},

}
</script>
<style>

</style>