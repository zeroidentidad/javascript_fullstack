export default {
    addImage: function (image) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(image);
            }, 3000)
        })
    },
    fetchImages: function (user = null) {
        const images = [
            { id: 2, src: 'https://cdn.pixabay.com/photo/2016/08/24/07/56/sun-1616384_960_720.jpg', user: { pic: 'https://cdn.pixabay.com/photo/2015/09/18/11/46/man-945482_960_720.jpg', name: 'Mike82' } },
            { id: 5, src: 'https://cdn.pixabay.com/photo/2013/12/16/15/59/sunset-229335_960_720.jpg', user: { pic: 'https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_960_720.jpg', name: 'MovilVR' } },
            { id: 3, src: 'https://cdn.pixabay.com/photo/2016/02/18/15/19/sunset-1207326_960_720.jpg', user: { pic: 'https://cdn.pixabay.com/photo/2014/08/20/07/58/girl-422333_960_720.jpg', name: 'Naia' } },
            { id: 6, src: 'https://cdn.pixabay.com/photo/2016/07/08/12/19/mountain-1504197_960_720.jpg', user: { pic: 'https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_960_720.jpg', name: 'MovilVR' } },
            { id: 4, src: 'https://cdn.pixabay.com/photo/2013/08/05/06/21/sunset-169925_960_720.jpg', user: { pic: 'https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_960_720.jpg', name: 'MovilVR' } },
            { id: 7, src: 'https://cdn.pixabay.com/photo/2015/07/15/01/09/sunset-845552_960_720.jpg', user: { pic: 'https://cdn.pixabay.com/photo/2016/12/01/18/17/mobile-phone-1875813_960_720.jpg', name: 'MovilVR' } }
        ]
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(images.filter(img => !user || user === img.user.name));
            }, 1500);
        })
    }
}