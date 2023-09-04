import React from 'react'

function FruitsImg() {
  return (
    <div className='mainContainer'>
      <div className='fruits_container'>
        <div className='F1'>
          <img className='image' src='orange.jpg' />
          <p>Orange</p>
          <p>$ 36</p>
          <button>Add to Cart</button>
        </div>

        <div className='F1'>
          <img className='image' src='mango.jpg' />
          <p>Mango</p>
          <p>$ 58</p>
          <button>Add to Cart</button>
        </div>

        <div className='F1'>
          <img className='image' src='apple.jpg' />
          <p>Apple</p>
          <p>$ 44</p>
          <button>Add to Cart</button>
        </div>
      </div>
      <div className='fruits_container'>
        <div className='F1'>
          <img className='image' src='Grapes.jpg' />
          <p>Grapes</p>
          <p>$ 16</p>
          <button>Add to Cart</button>
        </div>

        <div className='F1'>
          <img className='image' src='pomegrante.jpg' />
          <p>Pomegrante</p>
          <p>$ 76</p>
          <button>Add to Cart</button>
        </div>

        <div className='F1'>
          <img className='image' src='watermelon.jpg' />
          <p>watermelon</p>
          <p>$ 160</p>
          <button>Add to Cart</button>
        </div>
      </div>
    </div>
  )
}

export default FruitsImg
