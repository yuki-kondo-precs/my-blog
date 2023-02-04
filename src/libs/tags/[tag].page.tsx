import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client, getAllTag, getBlog, getLatestBlog, getSortedAndLimitedTag, getSpecificTag } from "libs/client";
import type { Blog, Tag } from "types/blog";
import "highlight.js/styles/hybrid.css";
import { ContentLayout } from "components/Layout";
import { Blogs } from "components/Blogs";
import CardListStyles from '@styles/objects/projects/CardList.module.scss';

type Props = {
  blogs: Blog[];
  tag: Tag;
  // sortedAndLimitedTag: Tag[];
  // latestBlog: Blog[];
};

const PER_PAGE = 8;

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllTag();

  const paths = data.contents.map((content: Tag) => `/tags/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const tagId = context.params?.tag;
  const offset = 0;
  const filters = `tag[contains]${tagId}`;

  const data = await getBlog({
    offset: offset,
    limit: PER_PAGE,
    filters: filters
  })
  const tag = typeof tagId === "string" ? await getSpecificTag(tagId) : null;

  const sortedAndLimitedTag = getSortedAndLimitedTag();

  const latestBlog = getLatestBlog();

  return {
    props: {
      blogs: data.contents,
      // blogTotalCount: data.totalCount,
      tag: tag,
      // sortedAndLimitedTag: sortedAndLimitedTag,
      // latestBlog: latestBlog
    },
  };
};


const TagId: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
  tag
}: Props) => {
  return (
    <ContentLayout
      content={<div className={CardListStyles["card-list"]}>
        <Blogs blogs={blogs} />
      </div>}
    >
    </ContentLayout>
  );
}


export default TagId;
