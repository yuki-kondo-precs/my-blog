import { InferGetStaticPropsType, NextPage } from 'next';
import { ContentLayout } from 'components/Layout';
import { SectionLayout } from 'components/Layout/SectionLayout';
import { Tags } from 'components/Tags';
import { client } from 'libs/client';
import type { Tag } from 'types/blog';

type Props = {
  tags: Tag[];
};

export const getStaticProps = async () => {
  const tags = await client.get({ endpoint: 'tags', queries: { limit: 100 } });

  return {
    props: {
      tags: tags.contents
    }
  };
};

const TagsPage: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  tags
}: // tags
Props) => {
  return (
    <ContentLayout>
      <SectionLayout
        title={'Tags'}
        content={<Tags tags={tags} />}
        link={'/tags/'}
      ></SectionLayout>
    </ContentLayout>
  );
};

export default TagsPage;
