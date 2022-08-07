import React from 'react'
import profileImage from "../Images/profile.jpg";

const HomePage = () => {
  return (
    <div>
      <section className='about-me'>
        <h1>プロフィール</h1>
        <div class="profile">
          {/* <img src={profileImage} className="profileImage" /> */}
          <div class="profile__name">Takanobu Harada</div>
          <div class="profile__desc">静岡大学 情報学部 3年。
          Python/Java/Javascript/React/Django等を勉強中。
          </div>
        </div>      
      </section>

    <section className='career'>
    <h1>経歴</h1>
      <ul class="timeline">
        <li>
          <p class="timeline-date">2017年4月</p>
          <div class="timeline-content">
            <h3>都立小金井北高校入学</h3>
            <p></p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年3月</p>
          <div class="timeline-content">
            <h3>都立小金井北高校卒業</h3>
            <p></p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年4月</p>
          <div class="timeline-content">
            <h3>静岡大学情報学部入学</h3>
            <p></p>
          </div>
        </li>
      </ul>
    </section>

    <section className="about-certification">
      <h1>資格</h1>
      <div className='certification'>
        <h3>取得済み</h3>
      <ul>
        <li>TOEIC L&R 850点 (Listening 435+Reading 415、2022年5月 公開テスト) </li>
        <li>実用英語技能検定 準1級 (2021年6月) </li>
        <li>普通自動車第一種運転免許(AT限定)</li>
      </ul>
        <h3>勉強中</h3>
        <ul>
        <li>基本情報技術者試験 (2022年1月受験予定)</li>
        <li>実用英語技能検定 1級 (2022年10月受験予定)</li>
      </ul>
      </div>

    </section>

    
    
      
    
  </div>
  )
}

export default HomePage