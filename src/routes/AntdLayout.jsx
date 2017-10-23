/* eslint-disable react/react-in-jsx-scope */
/**
 * Jian
 */
import React from 'react';
import { Link } from 'dva/router';
import { Breadcrumb, Icon, Layout, Menu, Button, Switch } from 'antd';
import './AntdLayout.css';

const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

class MenuDemo extends React.Component {
  state = {
    collapsed: false,
  };
  onCollapse = (collapsed) => {
    console.log(collapsed);
    this.setState({ collapsed });
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline">
            <Menu.Item>
              <Link to="/hello">
                <span>Hello</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/janna">
                <Icon type="pie-chart" />
                <span>Janna</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/weibo">
                <Icon type="desktop" />
                <span>微博</span>
              </Link>
            </Menu.Item>
            <SubMenu
              key="sub1"
              title={<span><Icon type="user" /><span>User</span></span>}
            >
              <Menu.Item key="3">Tom</Menu.Item>
              <Menu.Item key="4">Bill</Menu.Item>
              <Menu.Item key="5">Alex</Menu.Item>
            </SubMenu>
            <SubMenu
              key="sub2"
              title={<span><Icon type="team" /><span>Team</span></span>}
            >
              <Menu.Item key="6">Team 1</Menu.Item>
              <Menu.Item key="8">Team 2</Menu.Item>
            </SubMenu>
            <Menu.Item key="9">
              <Icon type="file" />
              <span>File</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          {/* <Header style={{ backgroundColor: '#fff', padding: 0 }} >*/}
          {/* <a href="/#/antdLayout" >*/}
          {/* <img style={{ width: 40, height: 60 }} alt="logo" src="https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg" />*/}
          {/* <span classID="logo" style={{ margin: 10 }}>*/}
          {/* Ant Design*/}
          {/* </span>*/}
          {/* </a>*/}
          {/* </Header>*/}
          <Content style={{ margin: '0 16px', overflow: 'initial' }}>
            {this.props.children}
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Alitrip ©2017<Icon type="heart" />Ant Design
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

export default MenuDemo;
