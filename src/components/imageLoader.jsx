
const importAll = (r) => {
    let images = {};
    r.keys().map((item) => {
      images[item.replace('./', '')] = r(item);
      return null;
    });
    return images;
  };
  
  // Import images from the /src/images/project folder
  const images = importAll(require.context('../images/project', false, /\.(png|jpe?g|svg)$/));
  
  export default images;
  