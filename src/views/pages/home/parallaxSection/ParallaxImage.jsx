import { Parallax } from 'react-parallax';
import img1 from '../../../../assets/images/parallax.jpg'

const ParallaxImage = () => (
    <Parallax className='absolute left-0 right-0 h-[100vh] top-0' bgImage={img1} bgImageAlt="image" strength={300}>
    </Parallax>
);

export default ParallaxImage;