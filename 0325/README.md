# 🏗️ Properties (프로퍼티)

## 🔹 `props`란?
- `props`는 **Properties**의 줄임말로, **부모 컴포넌트가 자식 컴포넌트에게 데이터를 전달하는 방법**이다.
- **단방향 데이터 흐름**을 가지며, 부모 → 자식 방향으로만 값이 전달된다.
- **자식 컴포넌트에서는 `props`를 변경할 수 없고, 읽기 전용 데이터**로 사용해야 한다.
- `props`를 활용하면 **컴포넌트 간의 재사용성과 유지보수성을 높일 수 있다**.

## 📌 Property Types (프로퍼티 자료형)
- `props`의 자료형을 미리 선언하면 **코드 안정성과 가독성을 향상**시킬 수 있다.
- **`prop-types` 라이브러리를 사용하여 `props`의 타입을 명시**할 수 있다.

### ✅ `prop-types` 예제
```javascript
import PropTypes from 'prop-types';

const UserProfile = ({ name, age, isActive }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>나이: {age}</p>
      <p>{isActive ? "활성화됨" : "비활성화됨"}</p>
    </div>
  );
};

UserProfile.propTypes = {
  name: PropTypes.string,  // 문자열 타입
  age: PropTypes.number,   // 숫자 타입
  isActive: PropTypes.bool // 불리언 타입
};
```

## ⚙️ Property Default Values (프로퍼티 기본값)
- `defaultProps`를 사용하면 **`props`가 전달되지 않았을 때 사용할 기본값을 설정**할 수 있다.
- 기본값을 설정하면 **컴포넌트의 안정성과 유지보수성이 향상된다**.

### ✅ `defaultProps` 예제
```javascript
const UserProfile = ({ name }) => {
  return <h1>{name}</h1>;
};

UserProfile.defaultProps = {
  name: "기본값" // props가 없을 경우 사용할 기본값
};
```

---

# 🎯 `props.children` 활용하기

## 🔹 `children`이란?
- `children`은 **특정 컴포넌트 내부에 포함된 요소들을 전달**하는 `props`이다.
- **컴포넌트를 감싸는 형태**로 사용할 때 내부 요소들이 `children`으로 전달된다.

### ✅ `children` 기본 예제
```javascript
const Card = ({ children }) => {
  return <div className="card">{children}</div>;
};

const App = () => {
  return (
    <Card>
      <h2>카드 제목</h2>
      <p>카드의 내용입니다.</p>
    </Card>
  );
};
```

---

# 🏗️ State(상태)

## 📌 `state`란?
- **리액트 컴포넌트의 변경 가능한 데이터**를 의미한다.
- **컴포넌트 내부에서 직접 관리되며, `state`가 변경되면 컴포넌트가 자동으로 리렌더링된다**.
- **렌더링이나 데이터 흐름에 영향을 주는 값만 `state`에 포함**하는 것이 좋다.

## 📌 `state`의 특징
- `state`는 **자바스크립트 객체 형태**로 존재한다.
- `state`는 **직접 변경할 수 없으며, 반드시 `setState()` 또는 `useState`를 사용하여 변경해야 한다**.

## ⚙️ 함수형 컴포넌트에서의 `useState` 사용법
```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};
```

---

# 🔄 컴포넌트 생명주기(Lifecycle)

## 📌 생명주기란?
- **리액트 컴포넌트가 생성되고, 업데이트되며, 사라지는 과정**을 의미한다.
- 특정 시점에서 코드가 실행될 수 있도록 **생명주기 메서드(Lifecycle Methods)**를 제공한다.
- **클래스 컴포넌트에서는 생명주기 메서드**, **함수형 컴포넌트에서는 `useEffect` 훅**을 사용한다.

## 🏗️ 생명주기의 3단계
1. **마운트(Mounting)** → 컴포넌트가 생성되어 화면에 나타나는 단계  
2. **업데이트(Updating)** → `state` 또는 `props`가 변경될 때  
3. **언마운트(Unmounting)** → 컴포넌트가 제거되는 단계  

## ✅ 함수형 컴포넌트에서 `useEffect` 활용
```javascript
import React, { useState, useEffect } from "react";

const MyComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("컴포넌트 마운트됨");

    return () => {
      console.log("컴포넌트 언마운트됨");
    };
  }, []);

  return (
    <div>
      <h1>카운트: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  );
};

export default MyComponent;
```

---
