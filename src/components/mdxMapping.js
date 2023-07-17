import List from './List';
import Paragraph from './Paragraph';
import SmallTitle from './SmallTitle';
import Titles from './Titles';
import Link from './Link';
import Bold from './Bold';

const components = {
  h2: Titles, // Map the "h2" element to the "Message" component
  // Add more mappings as needed
  h3: Titles,
  p: Paragraph,
  h4: SmallTitle,
  ul: List,
  ol: List,
  a: Link,
  strong: Bold,
};

export default components;