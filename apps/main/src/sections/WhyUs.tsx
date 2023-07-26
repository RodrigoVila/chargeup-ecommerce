import { useIntl } from 'react-intl';
import { Section } from './components';

export const WhyUsSection = () => {
  const { formatMessage } = useIntl();
  return (
    <Section
      id="whyus"
      title={formatMessage({ id: 'WHY_US_TITLE' })}
      bgImage="wooden.jpg"
      overlay
    >
      <p className="py-2">{formatMessage({ id: 'WHY_US_PARAGRAPH_1' })}</p>
      <p className="py-2">{formatMessage({ id: 'WHY_US_PARAGRAPH_2' })}</p>
    </Section>
  );
};
