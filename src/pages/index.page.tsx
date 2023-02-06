import { InferGetStaticPropsType, NextPage } from 'next';
import CardListStyles from '@styles/objects/projects/CardList.module.scss';
import TagListStyles from '@styles/objects/projects/TagList.module.scss';
import { Blogs } from 'components/Blogs';
import { ContentLayout } from 'components/Layout';
import { SectionLayout } from 'components/Layout/SectionLayout';
import { Tags } from 'components/Tags';
import { client } from 'libs/client';
import type { Blog, Tag as TagType } from 'types/blog';

type Props = {
  blogs: Blog[];
  tags: TagType[];
};

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: 'blog' });
  const tags = await client.get({ endpoint: 'tags', queries: { limit: 100 } });

  return {
    props: {
      blogs: blog.contents,
      tags: tags.contents
    }
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
  tags
}: Props) => {
  return (
    <ContentLayout>
      <>
        <SectionLayout
          title={'Articles'}
          content={
            <div className={CardListStyles['card-list']}>
              <Blogs blogs={blogs} />
            </div>
          }
          link={'/articles/'}
        ></SectionLayout>
        <SectionLayout
          title={'Tags'}
          content={
            <div className={TagListStyles.tagList}>
              <Tags tags={tags} />
            </div>
          }
          link={'/tags/'}
        ></SectionLayout>
      </>
    </ContentLayout>
  );
};

export default Home;
