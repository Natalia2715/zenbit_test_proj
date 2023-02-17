import { toast } from 'react-toastify';

export const sendSuccess = () => toast.success('Thank you for your feedback!');
export const sendError = () => toast.error('Ooops!');
