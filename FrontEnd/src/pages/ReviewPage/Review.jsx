import './Review.css'
import img from '../../../public/assets/Online Review-cuate.svg'
import AddReview from '../../Components/AddReview/AddReview';
const Review = () => {
  return (
    <div className='d-flex flex-wrap  align-items-start px-3 SocialDiv'>
          <img src={img} className='SocialImg' alt="Social" />      
          <div className='m-auto text-start reviewDiv '>
            <p className='reviewTitle lh-base w-100'>Happy to Hear Your Reviews: Share Your Experience!</p>
            <AddReview/>
          </div>
    </div>
  )
}

export default Review
