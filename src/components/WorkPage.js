import React from 'react';
import './Workpage.css'

const WorkPage = () => {
  return (
    <div>

      <section className='about-works'>
      <h1 className='title'>制作物</h1>
      <div className='works_list'>
      <div className='card card-skin'>
        <div className='card__imgframe'></div>
        <div className='card__textbox'>
        <div className='card__titletext'>
        ポートフォリオサイト
        </div>
        <div className='card__overviewtext'>
        Reactを使用し、本ポートフォリオサイトを作成
        </div>
        </div>
      </div>
      <div className='card card-skin'>
        <div className="card__imgframe"></div>
        <div className="card__textbox">
        <div className="card__titletext">
        クレジットカード明細分析ツール
        </div>
        <div class="card__overviewtext">
        Pythonでcsv形式の楽天クレジットカード明細を分析するツールを作成
        </div>
        </div>
      </div>
      <div className="card card-skin">
        <div className="card__imgframe"></div>
        <div className="card__textbox">
        <div className="card__titletext">
        オリジナル英単語帳作成アプリ
        </div>
        <div className="card__overviewtext">
        Djangoを使い、自分専用の単語帳を作れるアプリを作成
        </div>
        </div>
      </div>

      </div>
      </section>

    </div>
  )
}

export default WorkPage