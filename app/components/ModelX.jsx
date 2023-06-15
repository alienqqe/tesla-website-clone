import Model3Buttons from './Model3Buttons'
import ModelXText from './ModelXText'

const ModelY = () => {
  return (
    <>
      <div className='position-relative'>
        <div className='modelx-img  position-relative '>
          <img
            className=' img-fluid object-fit-cover'
            src='https://tesla-clone-felixivance.vercel.app/images/model-x.jpg'
            alt='modely'
          />
        </div>
        <div>
          <ModelXText />
          <Model3Buttons />
        </div>
      </div>
    </>
  )
}

export default ModelY
