import * as React from "react"
import { Metatags } from "@reflexjs/gatsby-plugin-metatags"
import { MDXProvider } from "@reflexjs/gatsby-theme-core"

export const Layout = ({ children, pathname }) => (
  <React.Fragment>
    <Metatags pathname={pathname} />
    <MDXProvider>{children}</MDXProvider>
  </React.Fragment>
)
