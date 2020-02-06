import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  const pacifico = new FontFaceObserver('Pacifico');

  const linkPacifico = document.createElement('pacifico');

  linkPacifico.href =
    'https://fonts.googleapis.com/css?family=Pacifico&display=swap';
  linkPacifico.rel = 'stylesheet';

  document.head.appendChild(linkPacifico);

  //

  const roboto = new FontFaceObserver('Roboto');

  const linkRoboto = document.createElement('roboto');

  linkRoboto.href =
    'https://fonts.googleapis.com/css?family=Roboto&display=swap';
  linkRoboto.rel = 'stylesheet';

  document.head.appendChild(linkRoboto);

  pacifico.load().then(() => {
    roboto.load().then(() => {
      document.documentElement.classList.add('pacifico');
      document.documentElement.classList.add('roboto');
    });
  });
};

export default Fonts;
