import filter from 'leo-profanity';
import { useSelector } from 'react-redux';
import { useFormik } from 'formik';
import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import SendButton from '../../../icons/sendButton';
import { useAddMessageMutation } from '../../../api/messagesApi';
import { getSelectedChannel, getUsername } from '../../../slices/selectors';

const SendForm = () => {
  const { t } = useTranslation();
  const selectedChannel = useSelector(getSelectedChannel);
  const username = useSelector(getUsername);
  const [addMessage] = useAddMessageMutation();
  const input = useRef(null);

  const handleSendMessage = async (values, { setSubmitting, resetForm }) => {
    try {
      const filteredMessage = filter.clean(values.message);
      const message = {
        body: filteredMessage,
        channelId: selectedChannel.id,
        username,
      };

      await addMessage(message);
      resetForm();
    } catch (error) {
      console.log(error);
    } finally {
      setSubmitting(false);
      input.current.focus();
    }
  };

  const formik = useFormik({
    initialValues: {
      message: '',
    },
    onSubmit: handleSendMessage,
  });

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, [formik.isSubmitting, selectedChannel]);

  const isEmpty = (message) => {
    if (message.trim() === '') {
      return true;
    }
    return false;
  };

  return (
    <div className="mt-auto px-5 py-3">
      <form className="py-1 border rounded-2" noValidate="" onSubmit={formik.handleSubmit}>
        <div className="input-group has-validation">
          <input
            name="message"
            aria-label={t('chatPage.newMessage')}
            placeholder={t('chatPage.enterMessage')}
            className="border-0 p-0 ps-2 form-control"
            value={formik.values.message}
            onChange={formik.handleChange}
            disabled={formik.isSubmitting}
            ref={input}
          />
          <button type="submit" className="btn btn-group-vertical" disabled={formik.isSubmitting || isEmpty(formik.values.message)}>
            <SendButton color="#0d6efd" />
            <span className="visually-hidden">{t('chatPage.send')}</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SendForm;
