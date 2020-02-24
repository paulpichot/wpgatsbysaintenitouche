import React from "react"
import Header from "../../Header"
import '../../../styles/global/container.sass';

const BlogLayout = ({ pageNumber, location, children }) => (
  <>
    <div>
      <Header location={location} />
      <main className="container plr-container mzauto">
        {children}
      </main>
    </div>
  </>
)

export default BlogLayout