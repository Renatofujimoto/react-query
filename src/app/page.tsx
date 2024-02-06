import React from "react";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { Layout } from "./components/Layout/index.js";
import { Header } from "./components/Header/index.js";
import { InfoBox } from "./components/InfoBox/index.js";
import { PostList } from "./components/index.js";
import { fetchQuery, useQueryExample } from "./hooks/index.js";
import axios from "axios";

export default function Home() {
  return (
    <Layout>
      <Header />
      <InfoBox> This page shows how to use SSG with React-Query.</InfoBox>
      <PostList />
    </Layout>
  );
}
