// mex2html
import { type MDXRemoteSerializeResult } from 'next-mdx-remote';
import { serialize } from 'next-mdx-remote/serialize';

export const mdx2html = async (
  mdxText: string
): Promise<MDXRemoteSerializeResult> => {
  const mdxSource = await serialize(mdxText, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: []
    }
  });
  return mdxSource;
};
