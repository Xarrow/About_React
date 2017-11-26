import React, { Component } from 'react';
import { Card, Row, Col } from 'antd';
import axios from 'axios';

export default class AllItBooks extends Component {
  constructor() {
    super();
    this.state = { rows: [] };
  }
  componentDidMount() {
    axios.get('http://104.224.140.135:8085/api/all_it_books/select?token=das&targetTitle=java').then((res) => {
      const rows = res.data.data.rows;
      this.setState({ rows });
    });
  }
  render() {
    const booksCardsList = this.state.rows.map(v1 => (
      <div>
        <Col span={3}>
          <Card bodyStyle={{ padding: 10 }} key={v1.targetTitle}>
            <div className="custom-image">
              <img alt="example" width="100%" src={v1.targetThumb} />
            </div>
            <div className="custom-card">
              <p>书名:<h3>{v1.targetTitle}</h3></p>
              <p>下载链接:<h3><a href={v1.targetDownloadLink}>{v1.targetDownloadLink} </a></h3></p>
              <p>简介:<h3>{v1.targetDescription}</h3></p>
            </div>
          </Card>
        </Col>
      </div>
    ));
    return (
      <div>
        <Row>
          {booksCardsList}
        </Row>
      </div>
    );
  }
}
