import { client } from "libs/client";
import type { Blog, Tag } from "types/blog";
import { InferGetStaticPropsType, NextPage } from "next";
import { ContentLayout } from "components/Layout";
import CardListStyles from '@styles/objects/projects/CardList.module.scss';
import { Blogs } from "components/Blogs";
import { SectionLayout } from "components/Layout/SectionLayout";
import Link from "next/link";
import CardStyles from '@styles/objects/projects/Card.module.scss';
import TagStyles from '@styles/objects/components/Tag.module.scss';
import { AiFillTag } from "react-icons/ai";

type Props = {
  blogs: Blog[];
  tags: Tag[];
};

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blog" });
  const tags = await client.get({ endpoint: "tags", queries: { limit: 100 } });

  return {
    props: {
      blogs: blog.contents,
      tags: tags.contents,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
  tags
}: Props) => {
  return (
    <ContentLayout
      content=
      {
        <>
          <SectionLayout
            title={'Articles'}
            content={
              <div className={CardListStyles["card-list"]}>
                <Blogs blogs={blogs} />
              </div>
            }
            link={'/articles/'}
          >
          </SectionLayout>
          <SectionLayout
            title={'Tags'}
            content=
            {<div className={CardListStyles["card-list"]}>
              {tags.map((tag) => (
                <article key={tag.id} className={CardStyles["card"]}>
                  <Link href={`/tags/${tag.id}`} className={TagStyles.tag}>
                    <AiFillTag className={TagStyles.tagIcon} />
                    <p>{tag.name}</p>
                  </Link>
                </article>
              ))}
            </div>}
            link={'/tags/'}
          >
          </SectionLayout>
        </>
      }
    >
    </ContentLayout>
  )
}

export default Home;
