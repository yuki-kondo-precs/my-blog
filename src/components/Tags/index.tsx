import Link from "next/link";
import { AiFillTag } from "react-icons/ai";
import type { Tag } from "types/blog";
import TagListStyles from '@styles/objects/projects/TagList.module.scss';
import TagStyles from '@styles/objects/components/Tag.module.scss';

type Props = {
  tags: Tag[];
};
export const Tags = ({ tags }: Props) => {
  return (
    <div className={TagListStyles.tagList}>
      {tags.map((tag) => (
        <Link key={tag.id} href={`/tags/${tag.id}`} className={TagStyles.tag}>
          {/* <AiFillTag className={TagStyles.tagIcon} /> */}
          <span>{tag.name}</span>
        </Link>
      ))}
    </div>
  )
}
