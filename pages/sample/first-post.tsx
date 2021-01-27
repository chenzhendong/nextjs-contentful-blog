import React from "react"
import {NextPage} from "next";
import Link from "next/link"

const FirstPost: NextPage = () => {
  return (
    <div>
      <div>First Post</div>
      <Link href="/">Return Home</Link>
    </div>
  )
}
export default FirstPost;