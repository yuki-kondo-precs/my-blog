import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client } from "libs/client";
import type { Blog } from "types/blog";
import "highlight.js/styles/hybrid.css";
import { ParsedUrlQuery } from "querystring";
import { ContentLayout } from "components/Layout";
import { Tags } from "components/Tags";
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import mdx2html from 'utills/mdx2html';
import { components } from "components/Blogs/atoms";

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
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>

        <MDXRemote {...mdxSource} components={components} />
        <Tags tags={blog.tags}></Tags>
      </ContentLayout>
    </>
  );
}

export default BlogId;
