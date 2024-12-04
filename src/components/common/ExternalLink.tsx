import { ComponentPropsWithoutRef, PropsWithChildren } from "react";

/**
 * @description 외부 하이퍼링크를 들어갈 때 사용하는 컴포넌트예요.
 *
 * `noopener`를 통해 하이퍼링크에 target="_blank" 속성이 적용된 링크를 열 때 탭 내빙 공격을 방지해요.
 * `noreferer`는 HTTP요청에서 Referer 헤더를 생략해요.
 *
 * @link https://yozm.wishket.com/magazine/detail/1586/
 */
export function ExternalLink({
  children,
  href,
  rel,
  ...props
}: PropsWithChildren<{ href: string }> & ComponentPropsWithoutRef<"a">) {
  return (
    <a
      href={href}
      target="_blank"
      rel={`noopener noreferrer ${rel}`}
      {...props}
    >
      {children}
    </a>
  );
}
