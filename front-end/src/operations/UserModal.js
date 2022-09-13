import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-modal'
import { useAuthStore } from '../hooks/useAuthStore';
import { useUiStore } from '../hooks/useUiStore';

import './styles/userModal.css'

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const UserModal = () => {

    const { isModalOpen, closeModal } = useUiStore()

    const { activeUser } = useAuthStore()

    const [formValues, setFormValues] = useState({
        name: 'Alnair Gonzalez',
        email: 'alnair@gmail.com',
        password: '123456'
    })

    const onCloseModal = () => {
        console.log('cerrando modal')
        closeModal()
    }

    const onInputChange = ({ target }) =>{
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        })
    }

    const onSubmit = (event) =>{
        event.preventDefault()
        console.log(formValues)
    }

    useEffect(() => {
        if( activeUser !== null){
            setFormValues({ ...activeUser.payload })
        }
      
    }, [activeUser])
    

    return (
        <Modal
            isOpen={isModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
        >
            <div class="container">
                <div class="container d-flex ">
                    <div class="container">
                        <div class="card rounded-3">
                            <div class="card-body">
                                <h3 class="mb-4 pb-2 pb-md-0 mb-md-5 px-md-2">Registration Info</h3>
                                <form class="px-md-2" onSubmit={onSubmit}>
                                    <div class="form-outline mb-4">
                                        <label class="form-label">Nombre</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder='Nombre'
                                            name='name'
                                            value={formValues.name}
                                            onChange = {onInputChange}
                                        />
                                    </div>
                                    <div class="row">
                                        <div class="form-outline mb-4">
                                            <label class="form-label">Correo</label>
                                            <input
                                                type="email"
                                                class="form-control"
                                                placeholder='email'
                                                name='email'
                                                value={formValues.email}
                                                onChange = {onInputChange}
                                            />

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-outline mb-4">
                                            <label class="form-label">Contraseña</label>
                                            <input
                                                type="password"
                                                class="form-control"
                                                placeholder='password'
                                                name='password'
                                                value={formValues.password}
                                                onChange = {onInputChange}
                                            />
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <select class="select">
                                            <option value="1" disabled>Rol</option>
                                            <option value="2">Admin</option>
                                            <option value="3">Usuario</option>
                                        </select>
                                    </div>
                                    <div class="mb-md-5">
                                        <button type="submit" class="btn btn-success btn-lg mb-1">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    )
}
