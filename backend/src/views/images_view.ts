import Image from '../models/Image';

export default {
  render(image: Image) {
    return {
      image: image.id,
      url: `192.168.0.12:3333/uploads/${image.path}`,
    };
  },
  renderMany(images: Image[]) {
    return images.map(image => this.render(image));
  },
};
