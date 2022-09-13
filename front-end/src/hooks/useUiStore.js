import { useDispatch, useSelector } from "react-redux"
import { onModalClose, onModalOpen } from "../store/uiSlice"


export const useUiStore = () => {

    const dispatch = useDispatch()

    const { isModalOpen } = useSelector(state => state.ui)

    const openModal = () => {
        dispatch(onModalOpen())
    }

    const closeModal = () => {
        dispatch(onModalClose())
    }

    return {

        isModalOpen,

        openModal,
        closeModal

    }

}