import { client } from "libs/client";
import type { Blog, Tag } from "types/blog";
import { InferGetStaticPropsType, NextPage } from "next";
import { ContentLayout } from "components/Layout";
import CardListStyles from '@styles/objects/projects/CardList.module.scss';
import { Blogs } from "components/Blogs";

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
      content={<div className={CardListStyles["card-list"]}>
        <Blogs blogs={blogs} />
      </div>}
    >
    </ContentLayout>
  )
}

export default Home;
