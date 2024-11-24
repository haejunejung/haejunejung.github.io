import {
  Children,
  Fragment,
  isValidElement,
  PropsWithChildren,
  ReactNode,
} from "react";

interface SeparatedProps {
  with: ReactNode;
}

export const Separated = ({
  children,
  with: separator,
}: PropsWithChildren<SeparatedProps>) => {
  const childrenArray = Children.toArray(children).filter(isValidElement);
  const childrenLength = childrenArray.length;

  return (
    <>
      {childrenArray.map((child, i) => (
        <Fragment key={i}>
          {child}
          {i + 1 !== childrenLength ? separator : null}
        </Fragment>
      ))}
    </>
  );
};
