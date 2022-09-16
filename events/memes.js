const memes = [
    'https://pbs.twimg.com/profile_images/1333194308766273544/sDuUCEyB_400x400.jpg',
    'https://i.pinimg.com/736x/c3/6d/3f/c36d3fc7c79bc906bc368bf80af8f8c4.jpg',
    'https://i.pinimg.com/564x/48/8c/73/488c73b108202c41afb1732551851f5a.jpg',
    'https://i.pinimg.com/564x/24/f1/4e/24f14e2ada8af4b5ef5d8d65f1ac667e.jpg',
    'https://i.pinimg.com/564x/67/9f/aa/679faa1e37ccdcf2f0441cc99e2d8fd7.jpg',
    'https://i.pinimg.com/564x/0b/43/18/0b4318c94f8d7306da573fd85db7a928.jpg'
]

function sendMeme(){
    let n = parseInt(Math.random() * memes.length)
    return memes[n]
}

module.exports = sendMeme