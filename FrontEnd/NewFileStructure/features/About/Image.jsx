import img from '../../../public/assets/photo_2024-09-12_23-29-54.jpg'
import '../../pages/About/about.css'
const Image=()=>{
  
    return (
      <>
       <div className="image-contanent">
    <div className='pp'>
  <p >A</p>
  <p>B</p>
  <p >O</p>
  <p>U</p>
  <p>T</p>
  <div className="space-before-us" style={{display:'flex',flexDirection:'row',marginLeft:'20px'}}>
    <p>U</p>
    <p >S</p>
  </div>
</div>
    <img src={img} alt="Brand Logo" className="logo2" />
    </div>
      
      </>
    )
  }
  export default Image
