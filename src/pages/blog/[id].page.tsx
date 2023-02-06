import { ParsedUrlQuery } from "querystring";
import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import Image from "next/image";
import { MDXRemote, type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { BsClock } from "react-icons/bs";
import { RxUpdate } from "react-icons/rx";
import styles from '@styles/objects/projects/Article.module.scss';
import { components } from "components/Blogs/atoms";
import { ContentLayout } from "components/Layout";
import { Tags } from "components/Tags";
import { client } from "libs/client";
import type { Blog } from "types/blog";
import "highlight.js/styles/hybrid.css";
import { getFormattedDate } from "utilities/getFormattedDate";
import { mdx2html } from 'utilities/mdx2html';

type Props = {
  blog: Blog;
  mdxSource: MDXRemoteSerializeResult;
};
interface Params extends ParsedUrlQuery {
  id: string
}

export const getStaticPaths: GetStaticPaths<Params> = async () => {
  const data = await client.get({ endpoint: "blog" });

  const paths = data.contents.map((content: Blog) => `/blog/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props, Params> = async (context) => {
  const id = context.params?.id;
  const blog = await client.get({ endpoint: "blog", contentId: id });
  const mdxSource = await mdx2html(blog.content);

  return {
    props: {
      blog,
      mdxSource,
    },
  };
};

const BlogId: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog,
  mdxSource
}: Props) => {
  return (
    <>
      <ContentLayout>
        <article className={styles.article}>
          <div>
            <Image
              width={blog.image.width}
              height={blog.image.height}
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              alt={`${blog.title}`}
              src={blog.image.url}
              className={styles.article}
            />
            <div className={styles.articleHead}>
              <h1 className={styles.articleTitle}>{blog.title}</h1>
              <div className={styles.articleSummary}>
                <p className={styles.articleCategory}>{blog.category.name}</p>
                <p className={styles.articleDate}>
                  <RxUpdate />
                  {getFormattedDate(new Date(blog.updatedAt))}
                </p>
                <p className={styles.articleDate}>
                  <BsClock />
                  {getFormattedDate(new Date(blog.publishedAt))}
                </p>
              </div>
            </div>
          </div>
          <MDXRemote {...mdxSource} components={components} />
          <Tags tags={blog.tags}></Tags>
        </article>
      </ContentLayout>
    </>
  );
}

export default BlogId;
