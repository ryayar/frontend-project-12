import { Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import { useRemoveChannelMutation } from '../../api/channelsApi';
import { setSelectedChannel } from '../../slices/channelSlice';
import { getSelectedChannelId } from '../../slices/selectors';

export const DeleteModal = ({ data }) => {
  const {
    editedChannelId,
    handleCloseModal,
    defaultChannel,
  } = data;

  const { t } = useTranslation();
  const dispatch = useDispatch();
  const selectedChannelId = useSelector(getSelectedChannelId);
  const [removeChannel] = useRemoveChannelMutation();

  const handleDeleteChannel = async (id) => {
    try {
      await removeChannel(id);
      toast.success(t('modal.channelRemoveSuccess'));
      handleCloseModal();
      if (selectedChannelId === id) {
        dispatch(setSelectedChannel(defaultChannel));
      }
    } catch (error) {
      console.log('err', error);
      toast.error(t('error.networkError'));
    }
  };

  return (
    <Modal show onHide={handleCloseModal} centered>
      <Modal.Header closeButton>
        <Modal.Title>{t('modal.deleteChannel')}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <div className="modal-body">
          <p className="lead">{t('modal.areYouSure')}</p>
          <div className="d-flex justify-content-end">
            <button
              type="button"
              className="me-2 btn btn-secondary"
              onClick={handleCloseModal}
            >
              {t('modal.cancel')}
            </button>
            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => handleDeleteChannel(editedChannelId)}
            >
              {t('modal.delete')}
            </button>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default DeleteModal;
