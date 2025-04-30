import React from 'react';
import OriginalFooter from '@theme-original/Footer';
import './footerOverride.css';

export default function Footer(props) {
  const footerRef = React.useRef(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const docHeight = document.documentElement.offsetHeight;
      // If at (or very near) the bottom, show footer
      setVisible(scrollPosition >= docHeight - 2);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      ref={footerRef}
      className={visible ? 'footer--override-visible' : 'footer--override-hidden'}
    >
      <OriginalFooter {...props} />
    </div>
  );
}

