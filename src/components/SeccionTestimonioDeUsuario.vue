<template>
    <div class="component SeccionTestimonioDeUsuario">
        <div class="padding_top_4">
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div class="user_profile_image_wrapper">
                                <img
                                    v-if="user_image"
                                    class="user_profile_image"
                                    :src="user_image"
                                    alt=""
                                />
                            </div>
                        </td>
                        <td class="width_100x100">
                            <span>
                                <div class="user_details_name">vebris</div>
                                <div class="user_details_location">
                                    Barcelona (Ciudad) · 8 sep 2019
                                </div>
                            </span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="padding_top_4">
            <div class="comment_title">Estoy muy orgullosa de mi nuevo abdomen</div>
        </div>
        <div class="padding_top_4">
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td class="width_1x100">
                                <span class="thumbs_up_image_wrapper">
                                    <img
                                        class="thumbs_up_image"
                                        src="image/thumbs_up.png"
                                        alt=""
                                    />
                                </span>
                            </td>
                            <td class="width_1x100">
                                <span class="thumbs_up_comment">
                                    Vale la pena
                                </span>
                            </td>
                            <td class="width_1x100">
                                <span class="euros_image_wrapper">
                                    <img
                                        class="euros_image"
                                        src="image/euro_icon.png"
                                        alt=""
                                    />
                                </span>
                            </td>
                            <td class="width_1x100">
                                <div class="price_details">
                                    <span> Precio aproximado: </span>
                                    <span> 8.500€ </span>
                                </div>
                            </td>
                            <td class=""></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SeccionTestimonioDeUsuario",
    props: {},
    data() {
        return {
            user_image: "",
        };
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {
        this.$client.get("https://randomuser.me/api").then(response => {
            this.user_image = response.data.results[0].picture.medium;
        });
    },
    beforeUpdate() {},
    updated() {},
    beforeUnmount() {},
    unmounted() {},
    activated() {},
    deactivated() {},
};
</script>
<style>
</style>