import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  var pacifico = new FontFaceObserver('Pacifico', {
    weight: 200,
  });

  //const linkPacifico = document.createElement('pacifico');

  //linkPacifico.href =
  //'https://fonts.googleapis.com/css?family=Pacifico&display=swap';
  //linkPacifico.rel = 'stylesheet';

  //document.head.appendChild(linkPacifico);

  //

  //const roboto = new FontFaceObserver('Roboto');

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
    .then(function() {
      console.log('success');
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
