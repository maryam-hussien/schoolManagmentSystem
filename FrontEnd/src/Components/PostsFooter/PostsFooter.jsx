import './PostsFooter.css'
import { PatchExclamationFill , PostcardHeartFill, ChatTextFill  } from 'react-bootstrap-icons';
import Back from '../../Dashboard/DashComponents/BackButton/Back';

const PostsFooter = () => {
  return (
    <>
    <div className='PostsFooter'>
           <div className="d-flex align-items-center PostsFoot ">
                <Back link='/social' color='rgb(130 0 130)' font='20px' Icon={PostcardHeartFill} label='POSTS' labelColor='black' labelFontWeight='400'/>
              </div>
           <div className="d-flex align-items-center PostsFoot ">
           <Back link='/social/reviews' color='rgb(233 52 83)' font='20px' Icon={PatchExclamationFill} label='Reviews' labelColor='black' labelFontWeight='400'/>
              </div>
           <div className="d-flex align-items-center PostsFoot ">
                <Back link='/social/chats' color='#045804' font='20px' Icon={ChatTextFill} label='Chats' labelColor='black' labelFontWeight='400'/>

              </div>

          </div>

</>
  
  )
}

export default PostsFooter
