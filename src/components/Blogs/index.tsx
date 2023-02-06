import Image from 'next/image';
import Link from 'next/link';
import CardStyles from '@styles/objects/projects/Card.module.scss';
import { Tags } from 'components/Tags';
import type { Blog } from 'types/blog';
import { getRelativeDate } from 'utilities/getRelativeDate';

type Props = {
  blogs: Blog[];
};

export function Blogs(props: Props) {
  return (
    <>
      {props.blogs.map(blog => (
        <article key={blog.id} className={CardStyles.card}>
          <Link href={`/blog/${blog.id}`} className={CardStyles.cardInner}>
            <div className={CardStyles.cardThumbnail}>
              <Image
                width={blog.image.width}
                height={blog.image.height}
                sizes="100vw"
                style={{
                  width: '100%',
                  height: 'auto'
                }}
                alt={`${blog.title}`}
                src={blog.image.url}
                className={CardStyles.cardThumbnailImg}
              />
            </div>
            <p className={CardStyles.cardTitle}>{blog.title}</p>
            <p className={CardStyles.cardSummary}>
              {getRelativeDate(new Date(blog.createdAt))}
            </p>
            <div className={CardStyles.cardTags}>
              <Tags tags={blog.tags} useLink={false} />
            </div>
          </Link>
        </article>
      ))}
    </>
  );
}
