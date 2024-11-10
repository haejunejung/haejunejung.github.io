import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import MenuIcon from "@/assets/menu.svg";
import styles from "./Header.module.scss";
import { Link } from "wouter";
import { categoryList } from "@/lib/CategoryList";

interface CategoryItemProps {
  link: string;
  label: string;
}

const CategoryItem = ({ link, label }: CategoryItemProps) => (
  <DropdownMenu.Item asChild>
    <Link href={link}>
      <div className={styles.dropdown__item}>{label}</div>
    </Link>
  </DropdownMenu.Item>
);

const CategoryMenu = ({
  categoryList,
}: {
  categoryList: CategoryItemProps[];
}) => {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button className={styles.dropdown__trigger} aria-label="menu options">
          <img src={MenuIcon} alt="menu icon" />
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className={styles.dropdown__content}
          sideOffset={5} // 원하는 여백 조정
        >
          {categoryList.map((category) => (
            <CategoryItem
              key={category.link}
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
    <header className={styles.header}>
      <div className={styles.header__brand}>
        <h4>정해준이 정해준</h4>
      </div>
      <div className={styles.header__nav}>
        <CategoryMenu categoryList={categoryList} />
      </div>
    </header>
  );
};

export default Header;
