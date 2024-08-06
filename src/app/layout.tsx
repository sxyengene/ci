import React from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
// import "antd/dist/reset.css";
import "./globals.css";

import Nav from "@ui/nav/nav";
const RootLayout = ({ children }: React.PropsWithChildren) => (
  <html lang="en">
    <body>
      <AntdRegistry>
        <Nav content={children} />
      </AntdRegistry>
    </body>
  </html>
);

export default RootLayout;
