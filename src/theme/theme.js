const theme = {
  colors: {
    bodyBg: '#fafafa',
    copy: '#505050',
    brand: '#f79cc0',
    title: '#ee447d',
    header: '#fff',
  },
  fonts: {
    baseSize: '16px',
  },
  button: {
    bg: '#f79cc0',
    text: '#fff',
    hover: '#ffa2c1',
    active: '#ffa2c1',
  },
  links: {
    link: '#505050',
    hover: '#ffa2c1',
    active: '#ffa2c1',
  },
  header: {
    height: 25, // add 'px' at component level
  },
  cardList: {
    maxWidth: '1300px',
  },
  thumb: {
    transition: {
      duration: '0.2s',
    },
  },
  modal: {
    bg: 'rgba(0,0,0,0.75)',
  },
  transition: {
    duration: '0.6s',
    easeOut: 'cubic-bezier(0.165, 0.84, 0.44, 1)',
    easeInOut: 'cubic-bezier(1, 0, 0, 1)',
    easeOutBack: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
  },
  breakpoints: {
    sm: '480px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
  zIndex: {
    fixed: 100,
    overlay: 101,
  },
};

export default theme;
