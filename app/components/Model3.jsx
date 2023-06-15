import Model3Buttons from './Model3Buttons'
import Model3Text from './Model3Text'

const Model3 = () => {
  return (
    <>
      <div className='position-relative'>
        <div className='modely-img mt-sm-5 pt-sm-5 position-relative '>
          <img
            className=' img-fluid object-fit-cover'
            src='https://tesla-clone-felixivance.vercel.app/images/model-3.jpg'
            alt='models'
          />
        </div>
        <div>
          <Model3Text />
          <Model3Buttons />
        </div>
      </div>
    </>
  )
}

export default Model3
