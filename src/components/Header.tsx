import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import * as Separator from "@radix-ui/react-separator";
import MenuIcon from "@/assets/menu.svg";
import FirstIcon from "@/assets/first.svg";
import SecondIcon from "@/assets/second.svg";
import ThirdIcon from "@/assets/third.svg";
import styles from "./Header.module.scss";
import LinkComponent from "./LinkComponent";

interface CategoryItemProps {
  icon: string;
  link: string;
  label: string;
}

const categories: CategoryItemProps[] = [
  {
    link: "/blog",
    label: "블로그",
    icon: FirstIcon,
  },
  {
    link: "/tect-blog",
    label: "테크 블로그",
    icon: SecondIcon,
  },
  {
    link: "/problem-solver",
    label: "알고리즘(PS)",
    icon: ThirdIcon,
  },
];

const CategoryItem: React.FC<CategoryItemProps> = ({ icon, link, label }) => (
  <DropdownMenu.Item className={styles.dropdownItem}>
    <img src={icon} alt={`${label} 아이콘`} />
    <LinkComponent link={link}>
      <p className={styles.categoryLabel}>{label}</p>
    </LinkComponent>
  </DropdownMenu.Item>
);

const CategoryMenu = () => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.dropdownButton} aria-label="category options">
          <img src={MenuIcon} alt="메뉴 아이콘" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.dropdownContent}
          sideOffset={5} // 원하는 여백 조정
        >
          {categories.map((category) => (
            <CategoryItem
              key={category.link}
              icon={category.icon}
              link={category.link}
              label={category.label}
            />
          ))}
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};

const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <p className={styles.title}>정해준이 정해준</p>
        <CategoryMenu />
      </div>
      <Separator.Root className={styles.divider} />
    </header>
  );
};

export default Header;
