import React from 'react'
import { dehydrate, QueryClient } from '@tanstack/react-query'
import { Layout } from './components/Layout'
import { Header } from './components/Header'
import { InfoBox } from './components/InfoBox'
import { PostList } from './components'

export default function Home() {
  return (
    <Layout>
      <Header />
      <InfoBox> This page shows how to use SSG with React-Query.</InfoBox>
      <PostList />
    </Layout>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: 'posts',
    queryFn: () => fetchPosts(10),
  })
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
