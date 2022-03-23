<template>
    <div class="component SeccionSobreElDoctor">
        <div class="about_doctor_title padding_bottom_3">Sobre el doctor</div>
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>
                            <div class="doctor_image_wrapper">
                                <img class="doctor_image" src="image/doctor_icon.png" alt="" />
                            </div>
                        </td>
                        <td class="width_100x100">
                            <div class="doctor_details">
                                <div class="doctor_details_primary">
                                    Dorsia Clínica Estética
                                </div>
                                <div class="doctor_details_secondary">
                                    81 sedes en Madrid, Lleida, Tarragona...
                                </div>
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="padding_vertical_3">
            <button class="contact_doctor_button">Contactar al doctor</button>
        </div>
        <div class="padding_vertical_4">
            <span class="rating_title">Valoración:</span>
            <span class="rating_stars_container">
                <span class="rating_star_wrapper">
                    <img
                        class="rating_star_image"
                        src="image/star_full.png"
                        alt=""
                    />
                </span>
                <span class="rating_star_wrapper">
                    <img
                        class="rating_star_image"
                        src="image/star_full.png"
                        alt=""
                    />
                </span>
                <span class="rating_star_wrapper">
                    <img
                        class="rating_star_image"
                        src="image/star_full.png"
                        alt=""
                    />
                </span>
                <span class="rating_star_wrapper">
                    <img
                        class="rating_star_image"
                        src="image/star_full.png"
                        alt=""
                    />
                </span>
                <span class="rating_star_wrapper">
                    <img
                        class="rating_star_image"
                        src="image/star_empty.png"
                        alt=""
                    />
                </span>
            </span>
            <div class="rating_comment padding_vertical_4">
                Es un excelente cirujano que se merece con creces la buena fama
                tiene, pero para estas cosas no hay que escatimar! El post
                operatorio ha sido un poco difícil. Aun no me adapto a caminar
                sin sentir molestia y opresión, pero supongo que es cuestión de
                tiempo.
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: "SeccionSobreElDoctor",
    props: {},
    data() {
        return {};
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
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