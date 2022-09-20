import { useEffect, useState } from 'react';
import Modal from 'react-modal'
import { useAuthStore } from '../hooks/useAuthStore';
import { useTeamStore } from '../hooks/useTeamStore';
import { useUiStore } from '../hooks/useUiStore';

import './styles/userModal.css'
import './styles/userListModal.css'

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

export const UserListModal = () => {

    const { isUserModalOpen, closeUserListModal } = useUiStore()
    const { startLoadingUsers, users } = useAuthStore();
    const { startAddingMember, activeTeam } = useTeamStore()

    const onCloseModal = () => {
        closeUserListModal()
    }

    useEffect(() => {
        startLoadingUsers()
    }, [])

    return (
        <Modal
            isOpen={isUserModalOpen}
            onRequestClose={onCloseModal}
            style={customStyles}
            className='modal'
            overlayClassName='modal-fondo'
            closeTimeoutMS={200}
        >
            <div className="container mt-3 mb-4 member-page">
                <div className="row">
                    <div className="col-md-12">
                        <table className="table manage-candidates-top mb-0">
                            <thead>
                                <tr>
                                    <th>Candidate Name</th>
                                </tr>
                            </thead>
                            {users.map(function (element, index) {
                                return (
                                    <tbody>
                                        <tr className="candidates-list ">
                                            <td className="title">
                                                <div className="candidate-list-details">
                                                    <div className="candidate-list-title">
                                                        <h5 className="mb-0">{element.name}</h5>                                                        
                                                    </div>
                                                    <div className="candidate-list-option">
                                                        <ul className="list-unstyled">
                                                            <li><i className="fa fa-envelope pr-1"></i>{element.email}</li>
                                                            <button type="button" className='btn bg-transparent' onClick={() => {
                                                            startAddingMember(activeTeam.payload._id, element._id)
                                                        }}>
                                                            <i className="fa fa-plus text-primary"></i></button>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                )
                            })}
                        </table>
                    </div>
                </div >
            </div>
        </Modal>
    )
}
