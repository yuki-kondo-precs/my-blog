import Link from "next/link";
import { client } from "libs/client";
import type { Blog, Tag } from "types/blog";
import { InferGetStaticPropsType, NextPage } from "next";
import { ContentLayout } from "components/Layout";
import CardListStyles from '@styles/objects/projects/CardList.module.scss';
import CardStyles from '@styles/objects/projects/Card.module.scss';
import { SectionLayout } from "components/Layout/SectionLayout";
import TagStyles from '@styles/objects/components/Tag.module.scss';
import { AiFillTag } from "react-icons/ai";


// Props（blogsとtags）の型
type Props = {
  // blogs: Blog[];
  tags: Tag[];
};

export const getStaticProps = async () => {
  const tags = await client.get({ endpoint: "tags", queries: { limit: 100 } });

  return {
    props: {
      tags: tags.contents,
      // tags: tag.contents,
    },
  };
};

const Tags: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  tags,
  // tags
}: Props) => {
  return (
    <ContentLayout
      content={
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
        </SectionLayout>}
    >
    </ContentLayout>
  )
}

export default Tags;
