import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';

const WorkPage = () => {
  return (
    <div class='container text-center'>
      <h2 class="section-heading text-uppercase" style={{margin : "100px"}}>My works</h2>
          <h3 class="section-subheading text-muted mb-5">
            私が作った作品一覧です
          </h3>

    <section class="page-section" id="services">
      <div class="row" style={{margin: "0 auto"}}>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>ポートフォリオサイト</Card.Title>
        <Card.Text>
          Reactを使い、このポートフォリオサイトを作成しました。
        </Card.Text>
        <Button variant="outline-primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>楽天クレジットカード明細分析ツール</Card.Title>
        <Card.Text>
          Pythonを用い、csv形式の楽天クレジットカード明細を分析する実行ファイルを作成しました。
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="../Images/profile.jpg" />
      <Card.Body>
        <Card.Title>オリジナル単語帳作成アプリ
        </Card.Title>
        <Card.Text>
          Djangoを用い、オリジナルの英単語帳を作成できるアプリを作成しました。
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

      </div>
     </section>
     </div>
  )
}

export default WorkPage