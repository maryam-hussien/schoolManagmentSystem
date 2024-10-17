
import school1 from '../../../public/assets/download (1).png';
import school2 from '../../../public/assets/download (2).png';
import school3 from '../../../public/assets/download3.jpg';
import school4 from '../../../public/assets/download (4).jpg';
import '../../pages/Home/home.css';

const Logos=()=> {

    return (
   <>
   <section className='logos'>
    <h2>Schools Uses Our Website</h2>
   <img src={school1} className='img1' />
   <img src={school2}   className='img1' />
   <img src={school3}   className='img1' />
   <img src={school4}   className='img1' />
   </section>
   
   </>
    )

}
export default Logos