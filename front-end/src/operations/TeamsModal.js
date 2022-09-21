import React, { useEffect } from 'react'
import { useState } from 'react';
import Modal from 'react-modal'
import { useTeamStore } from '../hooks/useTeamStore';
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

export const TeamsModal = () => {

    const { isModalOpen, closeModal } = useUiStore()

    const { startUpload, activeTeam } = useTeamStore()

    const [formValues, setFormValues] = useState({
        accountName: 'Cuenta',
        teamClient: 'Cliente',
        leaderName: 'Encargado'
    })

    const onCloseModal = () => {
        closeModal()
    }

    const onInputChange = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value,
        })
    }

    const onSubmit = (event) => {
        event.preventDefault()
        startUpload(formValues, activeTeam.payload._id)
        closeModal()
    }

    useEffect(() => {
        if (activeTeam !== null) {
            setFormValues({ ...activeTeam.payload })
        }

    }, [activeTeam])


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
                                        <label class="form-label">Cuenta</label>
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder='Cuenta'
                                            name='accountName'
                                            value={formValues.accountName}
                                            onChange={onInputChange}
                                            required="required"
                                        />
                                    </div>
                                    <div class="row">
                                        <div class="form-outline mb-4">
                                            <label class="form-label">Cliente</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder='Cliente'
                                                name='teamClient'
                                                value={formValues.teamClient}
                                                onChange={onInputChange}
                                                required="required"
                                            />

                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="form-outline mb-4">
                                            <label class="form-label">Encargado</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                placeholder='Encargado'
                                                name='leaderName'
                                                value={formValues.leaderName}
                                                onChange={onInputChange}
                                                required="required"
                                            />
                                        </div>
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
