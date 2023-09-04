import React from 'react'

function MainPage() {
  return (
    <div className='mainpage'>
      <div className='navbar'>
        <h1>
          Fr<span>ui</span>ts
        </h1>
        <ul className='nav'>
          <li>
            <a href='#Home'>Home</a>
          </li>
          <li>
            <a href='#'>Services</a>
          </li>
          <li>
            <a href='#FruitsImg'>Products</a>
          </li>
          <li>
            <a href='#'>About</a>
          </li>
        </ul>
      </div>
      <div class='row'>
        <div class='col'>
          <h1>
            Give a Hoot! Eat <br />
            More Fruit
          </h1>
          <p>
            A pearl of health hidden in a fruit A jewal of health, <br /> hidden
            a vegetable. Eat fruit to be cute
          </p>
          <button type='button'>Explore</button>
        </div>
        <div class='col'>
          <div class='card '>
            <img src='TF-1.jpg' />
          </div>
          <div class='card'>
            <img src='fruit.png' />
          </div>
          <div class='card '>
            <img src='buy.jpg' />
          </div>
          <div class='card'>
            <img src='th.jpg' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainPage
