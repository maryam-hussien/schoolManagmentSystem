import './PostsFooter.css';
import { PatchExclamationFill, PostcardHeartFill, ChatTextFill } from 'react-bootstrap-icons';
import { NavLink } from 'react-router-dom';

const PostsFooter = () => {
  return (
    <div className='PostsFooter'>
      {/* Posts Link */}
      <NavLink 
        to='/social' 
        className="d-flex align-items-center PostsFoot text-decoration-none icon-link icon-link-hover link-opacity-100-hover " 
        activeClassName="active-link"
      >
        <PostcardHeartFill style={{ color: 'rgb(130 0 130)', fontSize: '20px' }} />
        <span className="ms-2" style={{ color: 'black', fontWeight: '400' }}>POSTS</span>
      </NavLink>
      
      {/* Reviews Link */}
      <NavLink 
        to='/social/reviews' 
        className="d-flex align-items-center PostsFoot text-decoration-none icon-link icon-link-hover link-opacity-100-hover " 
        activeClassName="active-link"
      >
        <PatchExclamationFill style={{ color: 'rgb(233 52 83)', fontSize: '20px' }} />
        <span className="ms-2" style={{ color: 'black', fontWeight: '400' }}>Reviews</span>
      </NavLink>
      
      {/* Chats Link */}
      <NavLink 
        to='/social/chats' 
        className="d-flex align-items-center PostsFoot text-decoration-none icon-link icon-link-hover link-opacity-100-hover " 
        activeClassName="active-link"
      >
        <ChatTextFill style={{ color: '#045804', fontSize: '20px' }} />
        <span className="ms-2" style={{ color: 'black', fontWeight: '400' }}>Chats</span>
      </NavLink>
    </div>
  );
}

export default PostsFooter;
