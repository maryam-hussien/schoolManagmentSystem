import img from '../../../public/assets/photo_2024-09-12_23-29-54.jpg'
import '../../pages/About/about.css'
const Image=()=>{
  
    return (
      <>
       <div className="image-container">
    <div className='pp'>
  <p style={{ color: "#148B9c" }}>A</p>
  <p>B</p>
  <p style={{ color: "#FF7F50" }}>O</p>
  <p>U</p>
  <p style={{ color: "#FFA500" }}>T</p>
  <div className="space-before-us">
    <p>U</p>
    <p style={{ color: "#148B9c" }}>S</p>
  </div>
</div>
    <img src={img} alt="Brand Logo" className="logo1" />
    </div>
      
      </>
    )
  }
  export default Image
