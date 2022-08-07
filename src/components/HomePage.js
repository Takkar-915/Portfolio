import React from 'react'
import profileImage from "../Images/profile.jpg";

const HomePage = () => {
  return (
    <div>
      <section className='about-me'>
        <h1 className = "title">プロフィール</h1>
        <div class="profile">
          <img src={profileImage} className="profile__img"  />
          <div class="profile__name">Takanobu Harada</div>
          <div class="profile__desc">静岡大学情報学部行動情報学科3年。興味のままにフロントエンド(Javascript/React等)とバックエンド(Python,Django,Java等)を勉強中。英検1級にも挑戦中。
          </div>
        </div>      
      </section>

    <section className='about-career'>
    <h1 className = "title">経歴</h1>
    <div className = "career">
      <ul class="timeline">
        <li>
          <p class="timeline-date">2020年3月</p>
          <div class="timeline-content">
            <h4>都立小金井北高校卒業</h4>
            <p></p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2020年4月</p>
          <div class="timeline-content">
            <h4>静岡大学情報学部入学</h4>
            <p>2024年3月卒業見込み</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年8月</p>
          <div class="timeline-content">
            <h4>1週間のインターンシップ参加</h4>
            <p>KotinとPythonを用いたアプリケーション開発を体験</p>
          </div>
        </li>
        <li>
          <p class="timeline-date">2022年9月</p>
          <div class="timeline-content">
            <h4>1週間のインターンシップ参加</h4>
            <p>Pythonを用いたなにか</p>
          </div>
        </li>
      </ul>
      </div>
    </section>

    <section className="about-certification">
      <h1 className = "title">資格</h1>
      <div className='certification'>
        <div className = "done">
        <h3 className='sub-title'>取得済</h3>
      <ul>
        <li>TOEIC L&R 850点 (Listening 435+Reading 415、2022年5月 公開テスト) </li>
        <li>実用英語技能検定 準1級 (2021年6月) </li>
        <li>普通自動車第一種運転免許(AT限定)</li>
      </ul>
        </div>
        <div className = "will">
        <h3 className='sub-title'>勉強中</h3>
        <ul>
        <li>基本情報技術者試験 (2022年10月受験予定)</li>
        <li>実用英語技能検定 1級 (2023年1月受験予定)</li>
      </ul>
        </div>
      </div>

    </section>   
  </div>
  )
}

export default HomePage