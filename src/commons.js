export default {
    validar_control_de_texto(control_de_texto) {
        const { value, min, max } = control_de_texto;
        control_de_texto.has_been_validated = true;
        if(value.length < min) {
            control_de_texto.state = "invalid";
        } else if(value.length > max) {
            control_de_texto.state = "invalid";
        } else {
            control_de_texto.state = "valid";
        }
    }
}