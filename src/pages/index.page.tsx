import Link from "next/link";
import { client } from "libs/client";
import type { Blog, Tag } from "types/blog";
import { InferGetStaticPropsType, NextPage } from "next";
import { ContentLayout } from "components/Layout";

// Props（blogsとtags）の型
type Props = {
  blogs: Blog[];
  // tags: Tag[];
};


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blog" });
  // const tag = await client.get({ endpoint: "tag" });

  return {
    props: {
      blogs: blog.contents,
      // tags: tag.contents,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
  // tags
}: Props) => {
  return (
    <ContentLayout
      content={<div>
        <ul>
          {blogs.map((blog) => (
            <li key={blog.id}>
              <Link href={`/blog/${blog.id}`}>
                {blog.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>}
    >
    </ContentLayout>
  )
}

export default Home;
