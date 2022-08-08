import React from 'react'
import github from '../Images/icons/github.png'
import qiita from '../Images/icons/qiita.jpg'
import './Contact.css'

const Contact = () => {
  return (
    <div>
      <section className='contact'>
        <div className='sns-detailed'>
          <h1 className='title'>Follow me!</h1>
          <ul className='sns_list'>
            <li className='sns_link'>
              <a href='https://github.com/Takkar-915' target='_blank'>
                <img src={(github)} className='sns_img'  />
              </a>
            </li>
            <li className='sns_link'>
              <a href='https://qiita.com/takkar-915' target='_blank'>
                <img src={(qiita)} className='sns_img'  />
               </a>
            </li>
          </ul>
        <div className='about_email'>
          <h1 className='title'>email</h1> 
          <div className='email_address'>
            harada.takanobu.0915@gmail.com
          </div>
        </div>
        </div>
    
      </section>
    </div>
  )
}

export default Contact