import { createSafeContext } from "@/utils";
import { isFunction } from "es-toolkit";
import { PropsWithChildren } from "react";

const [ConditionalRenderProvider, useConditionalRender] =
  createSafeContext<boolean>("ConditionalRenderContext");

function When({ children }: PropsWithChildren) {
  const condition = useConditionalRender();
  return condition ? <>{children}</> : null;
}

function Otherwise({ children }: PropsWithChildren) {
  const condition = useConditionalRender();
  return condition ? null : <>{children}</>;
}

function Root({
  condition,
  children,
}: PropsWithChildren<{
  condition: boolean | (() => boolean);
}>) {
  const value = isFunction(condition) ? condition() : condition;

  return (
    <ConditionalRenderProvider value={value}>
      {children}
    </ConditionalRenderProvider>
  );
}

/**
 * @description if-else 구문을 선언적으로 사용할 수 있도록 돕는 컴포넌트예요.
 *
 * @example
 * TO-BE
 * return (
 *  <>
 *    {condition ? <TrueComponent /> : <FalsyComponent />}
 *  </>
 * )
 *
 * AS-IS
 * return (
 *  <>
 *    <ConditionalRender condition={condition}>
 *      <ConditionalRender.When><TrueComponent /></ConditionalRender.When>
 *      <ConditionalRender.Otherwise><FalsyComponent /></ConditionalRender.Otherwise>
 *    </ConditionalRender>
 *  </>
 * )
 */
export const ConditionalRender = Object.assign(Root, {
  Root: Root,
  When: When,
  Otherwise: Otherwise,
});
