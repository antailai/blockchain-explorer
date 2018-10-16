import { Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import { NavLink } from 'react-router-dom'
import './home.css';
const { Header, Content, Footer, Sider } = Layout;

class Home extends React.Component<> {
  constructor(props) {
    super(props);
  }

  render() {
    return (
    <Layout style={{minHeight: '100vh'}}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={(collapsed, type) => { console.log(collapsed, type); }}
      >
        <div className="logo">
          <span>区块链浏览器</span>
        </div>
        <div style={{ padding: 10 }} />
        <Menu theme="dark" mode="inline" className="menu-container">
            <NavLink exact to="/searchBlock" activeClassName="active" className="menu">
              <Icon type="file-search" theme="outlined" />
              <span className="nav-text">区块查询</span>
            </NavLink>
            <NavLink exact to="/searchTransaction" activeClassName="active" className="menu">
              <Icon type="dollar" theme="outlined" />
              <span className="nav-text">交易查询</span>
            </NavLink>
            <NavLink exact to="/statistics" activeClassName="active" className="menu">
              <Icon type="line-chart" />
              <span className="nav-text">统计分析</span>
            </NavLink>
        </Menu>
      </Sider>
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }} />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            {this.props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          Design ©2018
        </Footer>
      </Layout>
    </Layout>
  );
  }
}

export default Home;