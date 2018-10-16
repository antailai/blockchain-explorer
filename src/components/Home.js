import { Icon, Layout, Menu } from 'antd';
import * as React from 'react';
import { IndexLink } from 'react-router';
import './Home.css';

const { Header, Content, Footer, Sider } = Layout;

class Home extends React.Component<> {
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
          <IndexLink to="/searchBlock" activeClassName="active" className="menu">
            <Icon type="file-search" theme="outlined" style={{ margin: 5 }}/>
            <span className="nav-text">区块查询</span>
          </IndexLink>
          <IndexLink to="/searchTransaction" activeClassName="active" className="menu">
            <Icon type="dollar" theme="outlined" style={{ margin: 5 }}/>
            <span className="nav-text">交易查询</span>
          </IndexLink>
          <IndexLink to="/statistics" activeClassName="active" className="menu">
            <Icon type="line-chart" style={{ margin: 5 }}/>
            <span className="nav-text">统计分析</span>
          </IndexLink>
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