import Paragraph from './Paragraph';
import Titles from './Titles';

const components = {
  h2: Titles, // Map the "h2" element to the "Message" component
  // Add more mappings as needed
  h3: Titles,
  p: Paragraph
};

export default components;