import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import MenuIcon from "@/assets/menu.png";
import styles from "./Header.module.scss";
import { Link } from "wouter";
import { categoryList } from "@/lib/CategoryList";
import { useThemeContext } from "@/contexts/theme/useThemeContext";
import ThemeIcon from "@/assets/theme.png";
import ThemedIcon from "./ThemeIcon";

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
          <ThemedIcon
            imgSrc={MenuIcon}
            alt={"menu icon"}
            width={32}
            height={32}
          />
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

const ThemeToggleButton = () => {
  const theme = useThemeContext();

  return (
    <button
      type="button"
      onClick={theme.toggleTheme}
      style={{
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        display: "flex",
      }}
    >
      <ThemedIcon
        imgSrc={ThemeIcon}
        alt={"theme icon"}
        width={32}
        height={32}
      />
    </button>
  );
};

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__brand}>
        <h4>정해준이 정해준</h4>
      </div>
      <div className={styles.header__nav}>
        <ThemeToggleButton />
        <CategoryMenu categoryList={categoryList} />
      </div>
    </header>
  );
};

export default Header;
