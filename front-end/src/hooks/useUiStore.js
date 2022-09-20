import { useDispatch, useSelector } from "react-redux"
import { onModalClose, onModalOpen, onUserModalListclose, onUserModalListOpen } from "../store/uiSlice"


export const useUiStore = () => {

    const dispatch = useDispatch()

    const { isModalOpen, isUserModalOpen } = useSelector(state => state.ui)

    const openModal = () => {
        dispatch(onModalOpen())
    }

    const closeModal = () => {
        dispatch(onModalClose())
    }

    const openUserListModal = () => {
        dispatch(onUserModalListOpen())
    }

    const closeUserListModal = () => {
        dispatch(onUserModalListclose())
    }

    return {

        isModalOpen,
        isUserModalOpen,

        openModal,
        closeModal,
        openUserListModal,
        closeUserListModal

    }

}