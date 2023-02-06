import Link from "next/link";
import { AiFillTag } from "react-icons/ai";
import TagStyles from '@styles/objects/components/Tag.module.scss';
import TagListStyles from '@styles/objects/projects/TagList.module.scss';
import type { Tag } from "types/blog";

type Props = {
  tags: Tag[];
  useLink?: boolean;
};
export const Tags = ({ tags, useLink = true }: Props) => {
  return (
    <div className={TagListStyles.tagList}>
      {tags.map((tag) => (
        useLink ?
          <Link key={tag.id} href={`/tags/${tag.id}`} className={TagStyles.tag}>
            {/* <AiFillTag className={TagStyles.tagIcon} /> */}
            <span># {tag.name}</span>
          </Link>
          : <span key={tag.id} className={TagStyles.tag}>#{tag.name}</span>
      ))}
    </div>
  )
}
