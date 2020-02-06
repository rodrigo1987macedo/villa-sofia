import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  var pacifico = new FontFaceObserver('Pacifico', {
    weight: 200,
  });

  //

  const roboto = new FontFaceObserver('Roboto', {
    weight: 200,
  });

  //const linkRoboto = document.createElement('roboto');

  //linkRoboto.href =
  //'https://fonts.googleapis.com/css?family=Roboto&display=swap';
  //linkRoboto.rel = 'stylesheet';

  //document.head.appendChild(linkRoboto);

  //pacifico.load().then(() => {
  //roboto.load().then(() => {
  //document.documentElement.classList.add('pacifico');
  //document.documentElement.classList.add('roboto');
  //});
  //});

  pacifico
    .load()
    .then(() => {
      roboto.load();
    })
    .catch(() => console.log('failed'));

  //pacifico
  //.load()
  //.then(function() {
  //console.log('Pacifico has loaded.');
  //})
  //.catch(function() {
  //console.log('Pacifico failed to load.');
  //});
};

export default Fonts;
