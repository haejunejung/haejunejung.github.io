import List from "@/components/List";
import ListItem from "@/components/ListItem";
import techBlogList from "@/lib/TechBlogList";

interface TechBlogItemProps {
  imgSrc: string;
  name: string;
  link: string;
}

const TechBlogItem = ({ imgSrc, name, link }: Readonly<TechBlogItemProps>) => {
  return (
    <ListItem key={name}>
      <ListItem.Left>
        <ListItem.Thumnail imgSrc={imgSrc} alt={name} />
      </ListItem.Left>
      <ListItem.Right>
        <ListItem.TechLink link={link} name={name} />
      </ListItem.Right>
    </ListItem>
  );
};

const TechBlogPage = () => {
  return (
    <List
      title="기술 블로그 모음"
      items={techBlogList}
      renderItem={TechBlogItem}
    />
  );
};

export default TechBlogPage;