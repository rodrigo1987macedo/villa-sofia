import FontFaceObserver from 'fontfaceobserver';

const Fonts = () => {
  var pacifico = new FontFaceObserver('Pacifico', {
    weight: 200,
  });

  //

  const roboto = new FontFaceObserver('Roboto', {
    weight: 200,
  });

  pacifico
    .load()
    .then(() => {
      roboto.load();
    })
    .catch(() => console.log('failed'));
};

export default Fonts;
