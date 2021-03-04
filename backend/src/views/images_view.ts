import Image from '../models/Images'

export default {
    render(image: Image) {
        return {
            id: image.id,
            url: `${process.env.API_UR}/uploads/${image.path}`
        }
    },

    renderMany(image: Image[]) {
        return image.map(image => this.render(image))
    }
}