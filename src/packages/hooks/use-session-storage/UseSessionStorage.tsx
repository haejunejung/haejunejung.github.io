// NOTE: 블로그 포스트에서 보여주기 위한 컴포넌트

import { useSessionStorage } from ".";

const WithPrimitiveInitialValue = () => {
  const [state, setState, removeState] = useSessionStorage({
    key: "with-primitve-initialValue",
    initialValue: 0,
  });

  const handleClick = () => {
    setState((prevState) => prevState + 1);
  };

  return (
    <div>
      <p>{state}</p>
      <button onClick={handleClick}>변경</button>
      <button onClick={removeState}>삭제</button>
    </div>
  );
};

const WithInitialValue = () => {
  const [state, setState, removeState] = useSessionStorage<{
    id: string;
    label: string;
  }>({
    key: "with-initialValue",
    initialValue: { id: "1", label: "label" },
  });

  const handleClick = () => {
    setState((prevState) => ({ ...prevState, id: prevState.id + 1 }));
  };

  return (
    <div>
      <p>
        {state.id}: {state.label}
      </p>
      <button onClick={handleClick}>변경</button>
      <button onClick={removeState}>삭제</button>
    </div>
  );
};

const WithoutInitialValue = () => {
  const [state, setState, removeState] = useSessionStorage<string>({
    key: "without-initialValue",
  });

  const handleClick = () => {
    setState(() => "new Value");
  };

  return (
    <div>
      <p>{state}</p>
      <button onClick={handleClick}>변경</button>
      <button onClick={removeState}>삭제</button>
    </div>
  );
};

const UseSessionStorage = Object.assign(
  {},
  {
    WithInitialValue: WithInitialValue,
    WithPrimitiveInitialValue: WithPrimitiveInitialValue,
    WithoutValue: WithoutInitialValue,
  }
);

export default UseSessionStorage;
