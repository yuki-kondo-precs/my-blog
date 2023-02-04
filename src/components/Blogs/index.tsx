import Link from "next/link";
import Image from "next/image";
import type { Blog } from "types/blog";
import CardStyles from '@styles/objects/projects/Card.module.scss';
import { getRelativeDate } from 'utills/getRelativeDate';

type Props = {
  blogs: Blog[];
};

export function Blogs(props: Props) {
  return (
    <>
      {props.blogs.map((blog) => (
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
    </>
  );
}
