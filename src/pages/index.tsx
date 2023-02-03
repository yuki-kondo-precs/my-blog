import Link from "next/link";
import { client } from "@libs/client";
import type { Blog, Tag } from "@src/types/blog";

// Props（blogsとtags）の型
type Props = {
  blogs: Blog[];
  tags: Tag[];
};


// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blog" });
  const tag = await client.get({ endpoint: "tag" });

  return {
    props: {
      blogs: blog.contents,
      tags: tag.contents,
    },
  };
};

export default function Home({ blogs, tags }: Props) {
  return (
    <div>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <Link href={`/blog/${blog.id}`}>{blog.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
