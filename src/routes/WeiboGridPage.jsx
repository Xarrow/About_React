import React, { Component } from 'react';
import { Table, Avatar, Row, Col, Card } from 'antd';
import axios from 'axios';


function RetweetedFunction(props) {
  if (props.pics !== undefined) {
    const picsCols = props.pics.map(img => (
      <Col key={img.url} xs={{ span: 3 }}>
        <img style={{ height: 50, width: 30 }} alt={img.large.url} src={img.large.url} /></Col>
    ));
    return (
      <div>
        <h3 dangerouslySetInnerHTML={{ __html: props.text }} />
        <hr/>
        <Row>
          {picsCols}
        </Row>
      </div>
    );
  } else {
    return <p>no retween</p>;
  }
}

function WeiboAvator(props) {
  return (
    <Avatar size="large" src={props.src} />
  );
}

const columns = [
  {
    title: 'id',
    dataIndex: 'mblog',
    key: 'id',
    render: mblog => <h3 style={{ color: '#f04134' }}> {mblog.id}</h3>,
    width: 150,
    fixed: 'left',
  },
  {
    title: 'itemId',
    dataIndex: 'itemid',
    key: 'itemid',
    width: 200,
  },
  {
    title: '创建时间',
    dataIndex: 'mblog',
    key: 'created_at',
    render: mblog => <h3 dangerouslySetInnerHTML={{ __html: mblog.created_at }} />,
    width: 150,

  },
  {
    title: '文本',
    dataIndex: 'mblog',
    key: 'text',
    render: mblog => <h3
      style={{ color: '#108ee9' }}
      dangerouslySetInnerHTML={{ __html: mblog.text.replace('//h5', 'http://h5') }}
    />,
    width: 400,

  },
  {
    title: '原始微博链接',
    dataIndex: 'scheme',
    key: 'scheme',
    render: scheme => <a href={scheme}>{scheme}</a>,
    width: 300,
  },
  {
    title: '图片',
    dataIndex: 'mblog',
    key: 'original_pic',
    render: (mblog) => {
      if (mblog.original_pic !== undefined) {
        return (<img
          alt={mblog.original_pic}
          src={mblog.original_pic} style={{ height: 50, width: 30 }}
        />);
      } else {
        return <p>没有照片</p>;
      }
    },
  },
  {
    title: 'pics',
    dataIndex: 'mblog',
    key: 'retweeted',
    render: (mblog) => {
      if (mblog.retweeted_status !== undefined) {
        const text = mblog.retweeted_status.text;
        const source = mblog.retweeted_status.source;
        const pics = mblog.retweeted_status.pics;
        return <RetweetedFunction text={text} source={source} pics={pics} />;
      } else {
        return <p>没有转载</p>;
      }
    },
    width: 400,
  },
  {
    title: '来源',
    dataIndex: 'mblog',
    key: 'source',
    render: mblog => <h3 style={{ color: '#f56a00' }}>{ mblog.source}</h3>,
    width: 200,
  },
];


export default class WeiboGrid extends Component {
  state = {
    data: [],
    pagination: {},
    loading: false,
    width: 50,
  }
  componentDidMount() {
    this.fetch();
  }
  tableChangeHandler = (pagination) => {
    // 设置分页状态
    const rawPaginationState = { ...this.state.pagination };
    rawPaginationState.current = pagination.current;
    this.setState({
      pagination: rawPaginationState,
    });
    // 调用fetch请求接口
    this.fetch({
      // 当前第current页
      page: pagination.current,
    });
  }
  fetch(params = {}) {
    // 设置加载logo
    this.setState({ loading: true });
    const page = params.page || 1;
    axios.get(`http://104.224.140.135:8085/api/weiboContent?containerid=1076033637346297&page=${page}`).then((res) => {
      // 初始化分页状态
      const pagination = { ...this.state.pagination };
      pagination.total = 200;
      pagination.pageSize = 10;
      this.setState({
        loading: false,
        data: res.data.data.cards,
        pagination,
      });
    });
  }
  render() {
    const tableConfig = {
      columns,
      dataSource: this.state.data,
      loading: this.state.loading,
      bordered: true,
      pagination: this.state.pagination,
      onChange: this.tableChangeHandler,
      scroll: { x: 1500 },
    };
    return (
      <div className="tableDiv" style={{ background: '#ffffff', padding: 10, 'box-shadow': '0.5px 0.5px 20px black' }}>
        <WeiboAvator src={'https://ww4.sinaimg.cn/orj480/d8cd7ff9jw8fcn2yfhqm1j20ig0igwfm.jpg'} name={'嘻红豆'} />
        <Table {...tableConfig} />
      </div>
    );
  }

}
