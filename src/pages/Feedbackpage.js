import {
  Container,
  Title,
  YellowSmile,
  Globe,
  PinkSmile,
  BigYellowSmile,
  Clouds,
  Sun,
} from './Feedbackpage.styled';
import { FeedbackForm } from '../components/FeedbackForm/FeedbackForm';

export const FeedbackPage = () => {
  return (
    <Container>
      <Title>Reach out to us!</Title>
      <FeedbackForm />
      <YellowSmile />
      <PinkSmile />
      <BigYellowSmile />
      <Clouds />
      <Sun />
      <Globe />
    </Container>
  );
};
