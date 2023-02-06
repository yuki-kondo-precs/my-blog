import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client } from "libs/client";
import type { Blog } from "types/blog";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import { ParsedUrlQuery } from "querystring";
import { ContentLayout } from "components/Layout";
import { Tags } from "components/Tags";

type Props = {
  blog: Blog;
  highlightedBody: string;
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
  // 以下の部分を追記
  const $ = cheerio.load(blog.content);
  $("pre code").each((_, elm) => {
    const result = hljs.highlightAuto($(elm).text());
    $(elm).html(result.value);
    $(elm).addClass("hljs");
  });

  return {
    props: {
      blog,
      highlightedBody: $.html(),
    },
  };
};

const BlogId: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blog,
  highlightedBody
}: Props) => {
  return (
    <>
      <ContentLayout>
        <h1>{blog.title}</h1>
        <p>{blog.publishedAt}</p>

        <div
            dangerouslySetInnerHTML={{
              __html: highlightedBody,
            }}
          />
        <Tags tags={blog.tags}></Tags>
      </ContentLayout>
    </>
  );
}

export default BlogId;
