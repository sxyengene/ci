import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, Layout, Menu } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import clsx from "clsx";

const items = [
  { key: "1", label: "项目打包" },
  { key: "2", label: "服务配置" },
  { key: "3", label: "数据分析" },
];

interface NavProps {
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({ content, footer }) => {
  const themeNow = {
    token: {
      colorPrimary: "#1DA57A",
    },
  };
  return (
    <AntdRegistry>
      <ConfigProvider locale={zhCN} theme={themeNow}>
        <Layout>
          <Header
            style={{
              position: "sticky",
              top: 0,
              zIndex: 1,
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
            className={clsx("flex justify-center")}
          >
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={["1"]}
              items={items}
              className={clsx("")}
            />
            <div className="demo-logo" />
          </Header>
          <Content className={clsx("bg-white p-12")}>
            <div className={clsx(" min-h-80 p-15")}>
              {content ? content : "Content"}
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>
            {footer
              ? footer
              : `Ant Design ${new Date().getFullYear()} Created by Ant UED`}
          </Footer>
        </Layout>
      </ConfigProvider>
    </AntdRegistry>
  );
};

/**
 * 
     
       
      
 */

export default Nav;
