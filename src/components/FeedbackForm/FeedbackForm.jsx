import { useForm } from 'react-hook-form';
import { useCreateFeedbackMutation } from 'redux/feedbackApi';
import {
  Button,
  Form,
  Input,
  MessageInput,
  ErrorText,
} from './FeedbackForm.styled';
import { ToastContainer } from 'react-toastify';
import { sendSuccess, sendError } from '../../utils/notification';
import 'react-toastify/dist/ReactToastify.css';

export const FeedbackForm = () => {
  const [createFeedback, { isLoading }] = useCreateFeedbackMutation();

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async ({ name, email, message }) => {
    try {
      await createFeedback({ name, email, message });
      sendSuccess();
    } catch (error) {
      sendError();
    }
    reset();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Input
        label="Name"
        {...register('name', { required: 'Is required' })}
        type="text"
        placeholder="Your name*"
      />
      <ErrorText>{errors?.name && <p>{errors?.name?.message}</p>}</ErrorText>
      <Input
        label="Email"
        {...register('email', { required: 'Is required' })}
        type="email"
        placeholder="Your e-mail*"
      />
      <ErrorText>{errors?.email && <p>{errors?.email?.message}</p>}</ErrorText>
      <MessageInput
        label="Message"
        {...register('message', { required: 'Is required' })}
        type="text"
        placeholder="Your message*"
      />
      <ErrorText>
        {errors?.message && <p>{errors?.message?.message}</p>}
      </ErrorText>
      <Button type="submit" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send message'}
      </Button>
      <ToastContainer />
    </Form>
  );
};
