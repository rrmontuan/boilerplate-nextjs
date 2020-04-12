import React from "react"
import { NextPage, GetServerSideProps } from "next"

const Home: NextPage<{ userAgent: string }> = ({ userAgent }) => (
  <h1>Hello world! - user agent: {userAgent}</h1>
)

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const userAgent = req ? req.headers["user-agent"] || "" : navigator.userAgent
  return { props: { userAgent } }
}

export default Home
