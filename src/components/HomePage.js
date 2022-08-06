import React from 'react'
import { Button } from 'react-bootstrap';
import profileImage from "../Images/profile.jpg";

const HomePage = () => {
  return (
    <div className="container text-center">
    <h1>ポートフォリオひな形</h1>

    {/* <img src={profileImage} className="profileImage" /> */}

    <p>
      ○○大学○○学部○○○○学科3年。主にJava/Python/Django/Javascript/React.js等を勉強しています。
    </p>

    <section class="page-section" id="services">
      <div className="service">
        <div class="text-center">
          <h2 class="section-heading text-uppercase">PORTFOLIO</h2>
          <h3 class="section-subheading text-muted mb-5">
            私が作った作品一覧です
          </h3>
        </div>
        <div class="row text-center">
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">ポートフォリオサイト</h4>
            <p class="text-muted">
              React、Bootstrapを用いて作成しました。
            </p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-laptop fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">楽天クレジットカード明細分析ツール</h4>
            <p class="text-muted">
              Pythonで作成し、実行ファイルとして配布しています。
            </p>
          </div>
          <div class="col-md-4">
            <span class="fa-stack fa-4x">
              <i class="fas fa-circle fa-stack-2x text-primary"></i>
              <i class="fas fa-lock fa-stack-1x fa-inverse"></i>
            </span>
            <h4 class="my-3">オリジナル英単語帳作成アプリ</h4>
            <p class="text-muted">
              Djangoを用いて作成しました。
            </p>
          </div>
        </div>
      </div>
    </section>

    
  </div>
  )
}

export default HomePage