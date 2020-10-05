import React from 'react'
import { Layout, Typography } from 'antd';
import styled from 'styled-components'



const { Title } = Typography;
const { Header, Content } = Layout;

const DefaultLayout = (props) => {
    return (
        <LayoutComponent>
            <Layout className="layout">
                <Header>
                <Title level={1} style={{textAlign:"center", color:"#000",lineHeight: '64px'}}>Note Manager</Title>
                </Header>
                <Content  >
                    <div className="site-layout-content">{props.children}</div>
                </Content>
            </Layout>
        </LayoutComponent>
    )
}
export default DefaultLayout;



const LayoutComponent = styled.div`
.site-layout-content {
    background: #fff;
    padding: 24px;
    min-height: 280px;
  }
  #components-layout-demo-top .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }

  .ant-layout-header {
    height: 64px;
    padding: 0 50px;
    color: rgba(0, 0, 0, 0.85);
    line-height: 64px;
    background: #fff;
}

`
