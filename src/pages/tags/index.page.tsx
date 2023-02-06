import { InferGetStaticPropsType, NextPage } from "next";
import Link from "next/link";
import { AiFillTag } from "react-icons/ai";
import TagStyles from '@styles/objects/components/Tag.module.scss';
import CardStyles from '@styles/objects/projects/Card.module.scss';
import CardListStyles from '@styles/objects/projects/CardList.module.scss';
import { ContentLayout } from "components/Layout";
import { SectionLayout } from "components/Layout/SectionLayout";
import { Tags } from "components/Tags";
import { client } from "libs/client";
import type { Blog, Tag } from "types/blog";


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

const TagsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  tags,
  // tags
}: Props) => {
  return (
    <ContentLayout>
      <SectionLayout
        title={'Tags'}
        content=
        {<Tags tags={tags} />}
        link={'/tags/'}
      >
      </SectionLayout>
    </ContentLayout>
  )
}

export default TagsPage;
