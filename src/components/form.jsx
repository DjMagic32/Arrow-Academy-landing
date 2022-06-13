import React, { useState } from "react";
import { Form } from 'react-bulma-components';
import styled from "styled-components";

const { Input, Field, Control, Label } = Form;

const FormApp = ({ handleSumit }) => {
    const [formValues , setFormValues] = useState({
        firstname: "",
        lastname: "",
        mail: "",
        phone: "",

    });

    const handleChange = (e) => {
        const { name, value } = e.target
        /* console.log(name,value) */
        setFormValues({ ...formValues, [name]:value })
    };

    const handleSubmitForm = (event) => {
        event.preventDefault();
        handleSumit({ ...formValues, });
        console.log(formValues);
    };

    return (
        <FormContainer onSubmit={handleSubmitForm}>
            <Field className="field-form">
                <Label className="label-form">Nombre</Label>
                <Control className="control-form">
                    <Input 
                        placeholder="Introduce tu nombre"
                        name="firstname"
                        value={formValues.firstname}
                        onChange={handleChange}
                        className="input-form"
                    />
                </Control>
            </Field>
            <Field className="field-form">
                <Label className="label-form">Apellidos</Label>
                <Control className="control-form">
                    <Input 
                        placeholder="Introduce tu apellido"
                        name="lastname"
                        value={formValues.lastname}
                        onChange={handleChange}
                        className="input-form"
                    />
                </Control>
            </Field>
            <Field className="field-form">
                <Label className="label-form">Email</Label>
                <Control className="control-form">
                    <Input 
                        placeholder="Introduce tu correo electrónico"
                        name="mail"
                        value={formValues.mail}
                        onChange={handleChange}
                        className="input-form"
                    />
                </Control>
            </Field>
            <Field className="field-form">
                <Label className="label-form">Celular</Label>
                <Control className="control-form">
                    <Input 
                        placeholder="Introduce tu número celular"
                        name="phone"
                        value={formValues.phone}
                        onChange={handleChange}
                        className="input-form"
                    />
                </Control>
            </Field>
            <ButtonSubmit 
                type="submit"
            >
                SUBMIT

            </ButtonSubmit>

        </FormContainer>
    );


};

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;

`;
const ButtonSubmit = styled.button`
    margin: 30px;
    border: none;
    padding: 5px 10px;
    background-color: #39134e;
    color:  #fff;
    text-align: center;
    /* font-size: 15px; */
    font-weight: bold;
    font-family: 'Poppins', 'Roboto';
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.4s ease-in;
    font-size: 0.9rem;

    &:hover {
        background-color: #5ec92b;
        color: #2e1a4d;
        
    }

`;

export default FormApp;