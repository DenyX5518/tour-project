import { Modal, message } from "antd"
import { useDispatch, useSelector } from "react-redux"
import { toggleModalOpen } from "../../../features/openSlice"
import type { RootState } from "../../../store/store"
import type { ITour } from "../../../types/typesTourCard"
import FormModal from "../Form/FormModal"
import { deleteCurrentId } from "../../../features/idSlice"
import { resetFields } from "../../../features/formSlice"
export default function ModalWindow() {
  
  const [messageApi, contextHolder] = message.useMessage()

  const currentId = useSelector((state: RootState) => state.id)
  const isModalOpen = useSelector((state: RootState) => state.isModalOpen)
  const currentTour:ITour|undefined = useSelector((state:RootState)=>state.card.list.find((el)=>el.id==currentId))

  const dispatch = useDispatch()

  const handleCancel = () => {
    dispatch(toggleModalOpen(false))
    dispatch(deleteCurrentId())
    dispatch(resetFields())
  }
  const handleOk = () => {
    dispatch(toggleModalOpen(false))
    dispatch(deleteCurrentId())
    dispatch(resetFields())
    messageApi.open({
      type: 'success',
      content: 'This is a success message',
    });
  }

  return (
    <div>
      {contextHolder}
      <Modal
      title={currentTour?.name}
      open={isModalOpen}
      onCancel={handleCancel}
      onOk={handleOk}
      >
        <FormModal></FormModal>
      </Modal>
    </div>
  )
}
