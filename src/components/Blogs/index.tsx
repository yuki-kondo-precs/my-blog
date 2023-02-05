import Link from "next/link";
import Image from "next/image";
import type { Blog } from "types/blog";
import CardStyles from '@styles/objects/projects/Card.module.scss';
import { Tags } from "components/Tags";
import { getRelativeDate } from 'utills/getRelativeDate';

type Props = {
  blogs: Blog[];
};

export function Blogs(props: Props) {
  return (
    <>
      {props.blogs.map((blog) => (
        <article key={blog.id} className={CardStyles.card}>
          <Link href={`/blog/${blog.id}`} className={CardStyles.cardInner}>
            <div className={CardStyles.cardThumbnail}>
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
                className={CardStyles.cardThumbnailImg}
              />
            </div>
            <p className={CardStyles.cardTitle}>{blog.title}</p>
            <div className={CardStyles.cardSummary}>
              {getRelativeDate(new Date(blog.createdAt))}
            </div>
            <div className={CardStyles.cardTags}>
              <Tags tags={blog.tags} />
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}
