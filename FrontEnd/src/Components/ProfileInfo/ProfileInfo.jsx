import './profileInfo.css'
const ProfileInfo = () => {
  return (
    <>
    <div className='ProfilecontentSection mt-3 px-4 py-3  fs-6  lh-lg m-auto'>
    <div className='fs-6 fw-semibold mb-1'> General </div>
    <div className=' opacity-75  border-bottom border-secondary mb-1'>
      <div className='fs-6 fw-medium'>Date Of Birth</div>
      <div>21.07.2003</div>
    </div>
    <div className=' opacity-75  border-bottom border-secondary mb-1'>
      <div className='fs-6 fw-medium'>Class / Section</div>
      <div>10 / D</div>
    </div>
    <div className=' opacity-75  border-bottom border-secondary mb-1'>
      <div className='fs-6 fw-medium'>Roll Number</div>
      <div>2184626</div>
    </div>
    <div className=' opacity-75 mb-1'>
      <div className='fs-6 fw-medium'>Phone Number</div>
      <div>01100297301</div>
    </div>
    </div>
    <div className='ProfilecontentSection mt-3 px-4 py-3  fs-6 lh-lg m-auto'>
    <div className='fs-6 fw-semibold mb-1'> Emergency contacts </div>
    <div className=' opacity-75  border-bottom border-secondary mb-1'>
      <div className='fs-6 fw-medium'>Father's Number</div>
      <div>01234567</div>
    </div>
    <div className=' opacity-75 mb-1'>
      <div className='fs-6 fw-medium'>Mother's Number</div>
      <div>01234567</div>
    </div>

</div>
    </>
  )
}

export default ProfileInfo