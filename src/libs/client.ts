import { createClient } from 'microcms-js-sdk';
import type { Blog, Tag } from 'types/blog';
interface MultipleGetArgs {
  offset?: number;
  limit?: number;
  filters?: string;
}

interface SpecificGetArgs {
  id: string;
  draftKey:
    | {
        draftKey: string;
      }
    | {
        draftKey?: undefined;
      };
}

export const client = createClient({
  serviceDomain: 'kyaru99',
  apiKey: process.env.API_KEY!
});

export const getAllBlog = async () => {
  return await client.get({ endpoint: 'blogs', queries: { limit: 1000 } });
};

export const getBlog = async (args: MultipleGetArgs) => {
  const queries = {
    offset: args.offset ? args.offset : 0,
    limit: args.limit ? args.limit : 1000,
    filters: args.filters ? args.filters : ''
  };
  return await client.get({ endpoint: 'blogs', queries: queries });
};

export const getLatestBlog = async () => {
  return await client.get({
    endpoint: 'blogs',
    queries: { limit: 6 }
  });
};

export const getSpecificBlog = async (args: SpecificGetArgs) => {
  return await client.get({
    endpoint: 'blogs',
    contentId: args.id,
    queries: args.draftKey
  });
};

export const getPopularBlog = async () => {
  const allBlog = await client.get({
    endpoint: 'blogs',
    queries: { limit: 1000 }
  });

  return allBlog.contents.filter((blog: Blog) => {
    return (
      blog.id === '11_b0nwhu0' ||
      blog.id === 'qj5rgkpz1pjk' ||
      blog.id === '4f0quc8nn' ||
      blog.id === 'exkeadgdzgi' ||
      blog.id === '1mjr-a1_knwt' ||
      blog.id === 'o51o2pvpsq'
    );
  });
};

export const getAllTag = async () => {
  return await client.get({
    endpoint: 'tags',
    queries: { limit: 1000 }
  });
};

export const getSortedAndLimitedTag = async () => {
  const allTag = await client.get({
    endpoint: 'tags',
    queries: { limit: 1000 }
  });

  const tags = await Promise.all(
    allTag.contents.map(async (tag: Tag) => {
      const blog = await getBlogByTag(tag.id);
      return { ...tag, count: blog.totalCount };
    })
  );

  const sortedTag = tags.sort((a, b) => {
    return a.count > b.count ? -1 : 1;
  });

  return sortedTag.slice(0, 14);
};

export const getTag = async (args: MultipleGetArgs) => {
  const queries = {
    offset: args.offset ? args.offset : 0,
    limit: args.limit
  };
  return await client.get({
    endpoint: 'tags',
    queries: queries
  });
};

export const getSpecificTag = async (tagId: string) => {
  return await client.get({
    endpoint: 'tags',
    contentId: tagId
  });
};

export const getBlogByTag = async (tagId: string) => {
  return await client.get({
    endpoint: 'blogs',
    queries: { filters: `tags[contains]${tagId}` }
  });
};
