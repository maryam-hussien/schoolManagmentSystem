import './Review.css'
import img from '../../../public/assets/Online Review-cuate.svg'
const Review = () => {
  return (
    <div className='d-flex flex-wrap  align-items-start px-3 SocialDiv'>
          <img src={img} className='SocialImg' alt="Social" />      
          <div>
            <p className='reviewTitle lh-base'>Happy to Hear Your Reviews: Share Your Experience!</p>
          </div>
    </div>
  )
}

export default Review
