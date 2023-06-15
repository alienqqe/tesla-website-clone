import ModelYText from './ModelYText'
import Model3Buttons from './Model3Buttons'

const ModelY = () => {
  return (
    <>
      <div className='position-relative'>
        <div className='modely-img  position-relative '>
          <img
            className=' img-fluid object-fit-cover'
            src='https://tesla-clone-felixivance.vercel.app/images/model-y.jpg'
            alt='modely'
          />
        </div>
        <div>
          <ModelYText />
          <Model3Buttons />
        </div>
      </div>
    </>
  )
}

export default ModelY
