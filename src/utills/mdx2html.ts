// mex2html
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemoteSerializeResult } from 'next-mdx-remote';
// import rehypePrism from 'rehype-prism';
// import imageSize from 'rehype-img-size';

export const mdx2html = async (
  mdxText: string
): Promise<MDXRemoteSerializeResult> => {

  const mdxSource = await serialize(mdxText, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [
        // [rehypePrism, {}],
        // [imageSize, { dir: 'public' }],
      ],
    },
  });
  return mdxSource;
};

export default mdx2html;
