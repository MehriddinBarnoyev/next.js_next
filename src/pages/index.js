import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "../../components/Layout";
import Aside from "../../components/Aside";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout>
      <Aside />
    </Layout>
  );
}
