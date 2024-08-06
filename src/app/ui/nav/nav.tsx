import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import { Header, Content, Footer } from "antd/lib/layout/layout";
import BreadcrumbItem from "antd/lib/breadcrumb/BreadcrumbItem";
import clsx from "clsx";

const items = new Array(3).fill(null).map((_, index) => ({
  key: String(index + 1),
  label: `nav ${index + 1}`,
}));

interface NavProps {
  content?: React.ReactNode;
  footer?: React.ReactNode;
}

const Nav: React.FC<NavProps> = ({ content, footer }) => {
  return (
    <AntdRegistry>
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
        >
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={["2"]}
            items={items}
            style={{ flex: 1, minWidth: 0 }}
          />
          <div className="demo-logo" />
        </Header>
        <Content
          style={{
            minHeight: 280,
            padding: 24,
          }}
          className={clsx("bg-white")}
        >
          <Breadcrumb style={{ margin: "16px 0" }}>
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>List</BreadcrumbItem>
            <BreadcrumbItem>App</BreadcrumbItem>
          </Breadcrumb>
          <div
            style={{
              padding: 24,
              minHeight: 380,
            }}
          >
            {content ? content : "Content"}
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          {footer
            ? footer
            : `Ant Design ${new Date().getFullYear()} Created by Ant UED`}
        </Footer>
      </Layout>
    </AntdRegistry>
  );
};

/**
 * 
     
       
      
 */

export default Nav;
