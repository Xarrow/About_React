/**
 *  AntDesgin Page
 **/


import React, { Component } from 'react';
// import Button from 'antd/lib/button';
import { connect } from 'dva';
import { DatePicker, Button, Icon } from 'antd';
import 'antd/dist/antd.css';

class AntdPage extends Component {
  state = {
    loading: true,
    iconLoading: false,
  }

  enterLoading = () => {
    if (this.state.loading) {
      this.setState({ loading: false });
    } else {
      this.setState({ loading: true });
    }
  }
  enterIconLoading = () => {
    this.setState({ iconLoading: true });
  }

  render() {
    return (
      <span>
        <Button type="primary" loading>
          Loading
        </Button>
        <Button type="primary" size="small" loading>
          Loading
        </Button>
        <br />
        <Button type="primary" loading={this.state.loading} onClick={this.enterLoading}>
          Click me!
        </Button>
        <Button type="primary" icon="poweroff" loading={this.state.iconLoading} onClick={this.enterIconLoading}>
          Click me!
        </Button>
        <br />
        <Button shape="circle" loading />
        <Button type="primary" shape="circle" loading />
        <Button type="primary" icon="chrome" />
        <Icon type="like" spin="true" style={{ fontSize: 100 }} />
      </span>
    );
  }
}

export default connect()(AntdPage);
