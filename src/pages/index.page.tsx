import Link from "next/link";
import Image from "next/image";
import { client } from "libs/client";
import type { Blog, Tag } from "types/blog";
import { InferGetStaticPropsType, NextPage } from "next";
import { ContentLayout } from "components/Layout";
import CardListStyles from '@styles/objects/projects/CardList.module.scss';
import CardStyles from '@styles/objects/projects/Card.module.scss';
import { getRelativeDate } from 'utills/getRelativeDate';

// Props（blogsとtags）の型
type Props = {
  blogs: Blog[];
  // tags: Tag[];
};

export const getStaticProps = async () => {
  const blog = await client.get({ endpoint: "blog" });
  // const tag = await client.get({ endpoint: "tag" });

  return {
    props: {
      blogs: blog.contents,
      // tags: tag.contents,
    },
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  blogs,
  // tags
}: Props) => {
  return (
    <ContentLayout
      content={<div className={CardListStyles["card-list"]}>
        {blogs.map((blog) => (
          <article key={blog.id} className={CardStyles["card"]}>
            <Link href={`/blog/${blog.id}`} className={CardStyles["card__inner"]}>
              {<Image
                width={blog.image.width}
                height={blog.image.height}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto',
                }}
                alt={`${blog.title}`}
                src={blog.image.url}
                className={CardStyles.card__img}
              />}
              <p className={CardStyles.card__title}>{blog.title}</p>
              <div className={`${CardStyles.card__summary} ${CardStyles.profile}`}>
                {getRelativeDate(new Date(blog.createdAt))}
              </div>
            </Link>
          </article>
        ))}
      </div>}
    >
    </ContentLayout>
  )
}

export default Home;
