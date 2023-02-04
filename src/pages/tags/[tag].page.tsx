import { GetStaticPaths, GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import { client, getAllTag, getSpecificTag } from "libs/client";
import type { Blog, Tag } from "types/blog";
import cheerio from "cheerio";
import hljs from "highlight.js";
import "highlight.js/styles/hybrid.css";
import { ParsedUrlQuery } from "querystring";

type Props = {
  blogs: Blog[];
  tag: Tag;
  highlightedBody: string;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await getAllTag();

  const paths = data.contents.map((content: Tag) => `/tags/${content.id}`);
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const id = context.params?.id;
  const tag = typeof id === "string" ? await getSpecificTag(id) : null;

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
