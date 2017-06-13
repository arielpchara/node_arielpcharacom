import imagemin from 'imagemin'
import imageminJpegTran from 'imagemin-jpegtran'
import imageminPngQuant from 'imagemin-pngquant'

imagemin(['src/images/*.{png,jpg}'], 'app/images', {
    plugins: [
        imageminJpegTran(),
        imageminPngQuant({quality: '65-80'})
    ]
}).then( files => {
    console.log(files);
})