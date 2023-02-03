import Link from "next/link";
import Image from "next/image";
import { client } from "libs/client";
import type { Blog, Tag } from "types/blog";
import { InferGetStaticPropsType, NextPage } from "next";
import { ContentLayout } from "components/Layout";
import CardListStyles from '@styles/objects/projects/CardList.module.scss';
import CardStyles from '@styles/objects/projects/Card.module.scss';

// Props（blogsとtags）の型
type Props = {
  blogs: Blog[];
  // tags: Tag[];
};

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
      content={<div className={CardListStyles["p-card-list"]}>
        {blogs.map((blog) => (
          <article key={blog.id} className={CardStyles["p-card"]}>
            <Link href={`/blog/${blog.id}`} className={CardStyles["p-card__inner"]}>
              {<Image width={"300"} height={"250"} alt={`${blog.title}`} src="/src/assets/images/dummy/article.png" />}
              {blog.title}
            </Link>
          </article>
        ))}
      </div>}
    >
    </ContentLayout>
  )
}

export default Home;
