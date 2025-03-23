import emailjs from "@emailjs/browser";
import { useState } from "react";

const useForm = (initialState = {}) => {
    const [formState, setFormState] = useState(initialState);

    const handleChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState, [name]: value
        }
        );
    }

    const handleSelectChange = (selectedOption, fieldName) => {
        setFormState({ ...formState, [fieldName]: selectedOption.value });


    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (!formState.tour) {
            alert("Por favor, selecciona un tour.");
            return; 
        }
        
        emailjs
            .send(
                "grupo-recrea-2025", 
                "template_cqo96jm",
                formState,
                "2N9qqAnp_aTEx3qWN"
            )
            .then(
                (result) => {
                    console.log("Correo enviado correctamente:", result.text); 
                    alert("¡Tú mensaje ha sido enviado correctamente!");
                }, 
                (error) => {
                    console.error("Error al enviar el correo", error.text);
                    alert("Hubo un error al enviar el mensaje.")
                }
            );

        
        setFormState({
            nombre: '',
            celular: '',
            email: '', 
            tour: formState.tour
        });
        

    }



    return {
        formState,
        handleChange,
        handleSubmit,
        handleSelectChange
    }

}

export default useForm;