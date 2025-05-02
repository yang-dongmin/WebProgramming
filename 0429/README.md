# React 이벤트 핸들러와 조건부 렌더링

## 이벤트 핸들러 (Event Handler)

사용자 인터페이스에서 발생하는 이벤트(예: 클릭, 입력 등)에 대한 응답으로 실행되는 함수

### 이벤트와 이벤트 핸들러 개념
- **이벤트**: 사용자가 버튼을 클릭한 사건 => 버튼 클릭 이벤트
- **이벤트 핸들러**(=Event listener): 사용자가 웹 페이지와 상호작용할 때 발생하는 다양한 이벤트(클릭, 마우스 오버, 키 입력 등)에 반응하여 특정 동작을 수행하는 함수

### 기본 이벤트 핸들러 사용법

React에서 이벤트 핸들러는 JSX에서 camelCase로 작성되며, 함수로 전달됩니다.

```jsx
function ButtonComponent() {
  function handleClick() {
    alert("버튼이 클릭되었습니다!");
  }
  
  return <button onClick={handleClick}>클릭</button>;
}
```

위 코드에서 `onClick={handleClick}` 부분이 이벤트 핸들러입니다. `handleClick` 함수는 버튼이 클릭될 때 실행됩니다.

### 이벤트 객체 사용 (SyntheticEvent)

React에서는 이벤트 핸들러 함수의 첫 번째 매개변수로 SyntheticEvent 객체가 전달됩니다. 이를 활용하면 이벤트 정보를 활용할 수 있습니다.

```jsx
function InputComponent() {
  function handleChange(event) {
    console.log("입력값:", event.target.value);
  }
  
  return <input onChange={handleChange} />;
}
```

위 코드에서 `event.target.value`를 사용하여 입력 필드의 값을 가져올 수 있습니다.

### 인자 전달

이벤트 핸들러에 추가적인 인자를 전달하려면 화살표 함수를 사용하거나 bind를 활용할 수 있습니다.

```jsx
function ButtonComponent() {
  function handleClick(name) {
    alert(`${name}님, 버튼을 클릭했습니다!`);
  }
  
  return <button onClick={() => handleClick("홍길동")}>클릭</button>;
}
```

클래스 컴포넌트에서는 bind를 사용할 수도 있습니다.

```jsx
class ButtonComponent extends React.Component {
  handleClick(name) {
    alert(`${name}님, 버튼을 클릭했습니다!`);
  }
  
  render() {
    return <button onClick={this.handleClick.bind(this, "홍길동")}>클릭</button>;
  }
}
```

### 이벤트 핸들러에서 상태 변경

이벤트 핸들러 내부에서 useState를 사용하여 상태를 변경할 수 있습니다.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  
  function handleClick() {
    setCount(count + 1);
  }
  
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}
```

### 기본 이벤트 동작 방지 (preventDefault)

이벤트의 기본 동작(예: 폼 제출, 링크 이동)을 막을 때 `event.preventDefault()`를 사용합니다.

```jsx
function FormComponent() {
  function handleSubmit(event) {
    event.preventDefault();
    alert("폼 제출이 방지되었습니다.");
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">제출</button>
    </form>
  );
}
```

### 이벤트 전파 중지 (stopPropagation)

이벤트가 부모 요소로 전파되지 않도록 `event.stopPropagation()`을 사용할 수 있습니다.

```jsx
function Parent() {
  function handleParentClick() {
    alert("부모 요소 클릭!");
  }
  
  function handleChildClick(event) {
    event.stopPropagation();
    alert("자식 요소 클릭!");
  }
  
  return (
    <div onClick={handleParentClick}>
      <button onClick={handleChildClick}>클릭</button>
    </div>
  );
}
```

### 이벤트 핸들러 최적화 (useCallback)

이벤트 핸들러가 불필요하게 재생성되는 것을 방지하려면 `useCallback`을 사용할 수 있습니다.

```jsx
import { useState, useCallback } from "react";

function OptimizedComponent() {
  const [count, setCount] = useState(0);
  
  const handleClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);
  
  return (
    <div>
      <p>카운트: {count}</p>
      <button onClick={handleClick}>증가</button>
    </div>
  );
}
```

## DOM 이벤트 vs React 이벤트

### 이벤트 처리 방식 (이벤트 등록 방식) 비교

| 항목 | DOM 이벤트 | React 이벤트 |
|------|------------|--------------|
| 이벤트 등록 방식 | addEventListener 사용 | JSX에서 onEvent 속성을 사용 |
| 이벤트 제거 방식 | removeEventListener 필요 | 컴포넌트 언마운트 시 자동 제거 |
| 이벤트 네이밍 방식 | 소문자 (click, change) | 카멜 케이스 (onClick, onChange) |
| this 바인딩 필요 여부 | 필요할 수도 있음 | 함수형 컴포넌트에서는 필요 없음 |

### 이벤트 객체 (Event Object) 비교

| 항목 | DOM 이벤트 | React 이벤트 |
|------|------------|--------------|
| 이벤트 객체 | Event 객체 (MouseEvent, KeyboardEvent 등) | SyntheticEvent 객체 |
| 이벤트 속성 | event.target, event.clientX 등 | event.target, event.nativeEvent 등 |
| 이벤트가 사라지는 시점 | 지속됨 | SyntheticEvent는 자동으로 풀(pool) 처리 |

React는 자체적으로 SyntheticEvent를 제공하는데, 이는 브라우저의 네이티브 이벤트를 감싼 객체로, 모든 브라우저에서 동일한 인터페이스를 제공합니다.

또한 SyntheticEvent는 이벤트 풀링(Event Pooling)을 사용하여 성능을 최적화하는데, 핸들러 실행 후 이벤트 객체가 재사용되므로 비동기 코드에서는 `event.persist()`를 호출해야 합니다.

### 이벤트 전파 방식 (Event Bubbling & Capturing) 비교

| 항목 | DOM 이벤트 | React 이벤트 |
|------|------------|--------------|
| 이벤트 전파 | 기본적으로 버블링 (Bubbling) | 기본적으로 버블링 (Bubbling) |
| 캡처링 지원 | { capture: true } 옵션 사용 | onClickCapture 등 Capture 접미사 사용 |
| 이벤트 중지 | event.stopPropagation() 사용 | event.stopPropagation() 사용 |

### 이벤트 성능 및 관리

React는 모든 이벤트를 루트 요소(document)에서 관리하여 이벤트 리스너를 한 곳에서 처리하는 이벤트 위임(Event Delegation) 방식을 사용합니다.

따라서 개별 요소마다 addEventListener를 여러 개 추가할 필요 없이, React의 이벤트 시스템이 자동으로 관리합니다.

또한, useCallback을 사용하면 불필요한 이벤트 핸들러 재생성을 방지할 수 있습니다.

### 결론

React 이벤트 시스템은 코드 작성이 간결하고, 이벤트 위임을 활용해 성능을 최적화하며, 자동 메모리 관리를 지원합니다.

하지만 React의 SyntheticEvent가 이벤트 객체를 풀링(pooling)하는 특성을 이해하고, 필요할 때 `event.persist()`를 사용해야 합니다.

| 비교 항목 | DOM 이벤트 | React 이벤트 |
|-----------|------------|--------------|
| 이벤트 등록 방식 | addEventListener 사용 | JSX에서 onEvent 속성을 사용 |
| 이벤트 객체 | 네이티브 Event | SyntheticEvent |
| 이벤트 전파 방식 | 기본적으로 버블링 | 기본적으로 버블링 |
| 이벤트 제거 | removeEventListener 필요 | 자동 제거 |
| 이벤트 위임 | 직접 설정 필요 | 자동 위임 (document에서 관리) |
| 최적화 | 최적화 필요 | useCallback 사용 가능 |

## 조건부 렌더링 (Conditional Rendering)

특정 조건에 따라 UI를 변경하는 방식

### 조건부 렌더링이란?
- 어떠한 조건에 따라서 렌더링이 달라지는 것입니다.
- 특정 조건에 따라 컴포넌트의 일부 또는 전체를 렌더링하는 방법입니다.
- 특정 조건에 따라 다른 UI 요소를 보여주는 것을 의미합니다.
- 이는 사용자의 입력, 데이터 상태, 또는 애플리케이션의 다른 조건에 따라 동적으로 콘텐츠를 변경하는 데 필수적입니다.

### Truthy, Falsy 값

**Truthy**: True는 아니지만 True로 여겨지는 값  
**Falsy**: False는 아니지만 False로 여겨지는 값

JavaScript에서는 Boolean이 아닌 값도 조건문에서 true 또는 false처럼 동작할 수 있습니다. 이러한 값을 Truthy(참 같은 값) 또는 Falsy(거짓 같은 값)이라고 합니다.

#### Truthy 값 예시:
```javascript
"hello"        // 문자열
" "            // 공백이 있는 문자열도 truthy
3.14           // 숫자 (0 제외)
-100           // 음수도 truthy
Infinity        // 무한대도 truthy
[]             // 빈 배열도 truthy
{}             // 빈 객체도 truthy
function(){}   // 함수도 truthy
```

#### Falsy 값 예시:
```javascript
false          // false 자체
0              // 숫자 0
-0             // 음수 0
0n             // BigInt 0
""             // 빈 문자열
null           // null 값
undefined      // undefined 값
NaN            // Not-A-Number (숫자가 아님)
```

### Truthy, Falsy 활용

1. **||(OR 연산)**
```javascript
console.log(false || "안녕");       // "안녕"
console.log(0 || 100);             // 100
console.log("" || "기본값");        // "기본값"
console.log(null || "대체값");      // "대체값"
let name = "" || "홍길동";
console.log(name);                 // "홍길동"
```

2. **&&(AND 연산)**
```javascript
console.log(true && "안녕");        // "안녕"
console.log(1 && 100);             // 100
console.log("hello" && 0);         // 0 (Falsy 만나서 종료)
console.log("" && "무시됨");        // "" (Falsy 만나서 종료)
```

3. **?? (Null 병합 연산자)**
```javascript
let user;
console.log(user ?? "기본 사용자");  // "기본 사용자"
let age = 0;
console.log(age ?? 20);            // 0 (Falsy이지만 null이 아니므로 유지)
```

### 엘리먼트 변수 (Element variables)

엘리먼트 변수는 JSX 코드를 변수에 할당하여 재사용하거나 조건에 따라 렌더링을 제어하는 데 사용됩니다.

#### 엘리먼트 변수 사용 방법
1. **변수 선언**: JSX 코드를 변수에 할당하기 전에 const, let 또는 var 키워드를 사용하여 변수를 선언합니다.
2. **JSX 할당**: 변수에 JSX 코드를 할당합니다. JSX 코드는 일반적인 자바스크립트 표현식이므로 변수에 직접 할당할 수 있습니다.
3. **렌더링**: 변수를 JSX 코드 내에서 중괄호 {}로 감싸서 렌더링합니다.

엘리먼트 변수를 사용하는 것은 컴포넌트의 렌더링을 보다 유연하게 관리할 수 있는 방법입니다.
엘리먼트 변수를 사용하면 JSX 코드에서 특정 엘리먼트를 변수에 저장하고, 이를 조건부 렌더링이나 반복 렌더링에 활용할 수 있습니다.

#### 엘리먼트 변수의 기본 사용법
```jsx
import React from 'react';

function App() {
  const isLoggedIn = true; // 로그인 상태를 나타내는 변수
  
  // 엘리먼트를 변수에 저장
  const greeting = isLoggedIn ? (
    <h1>환영합니다!</h1>
  ) : (
    <h1>로그인 해주세요.</h1>
  );
  
  return (
    <div>
      {greeting} {/* 변수로 저장한 엘리먼트를 렌더링 */}
    </div>
  );
}

export default App;
```

### 인라인 조건 (Inline condition)

인라인 조건(Inline Condition)은 프로그래밍에서 조건문을 한 줄로 표현하는 방법입니다.
보통 if 문을 사용하면 여러 줄의 코드가 필요하지만, 인라인 조건을 사용하면 더 간결한 코드 작성이 가능합니다.

#### 1. 기본적인 인라인 조건
일반적인 if 문을 사용하면 코드가 길어질 수 있습니다.
```javascript
let message;
if (isLoggedIn) {
  message = "환영합니다!";
} else {
  message = "로그인이 필요합니다.";
}
```

#### 2. && 연산자를 활용한 인라인 조건
조건이 참(true)일 때만 실행하고 싶을 때 사용할 수 있습니다.
```javascript
isLoggedIn && console.log("로그인 성공!");
```
isLoggedIn이 true이면 "로그인 성공!"이 출력됩니다. false이면 아무 동작도 하지 않습니다.

```javascript
let message = isAdmin && "관리자 계정입니다.";
```
isAdmin이 true면 "관리자 계정입니다."가 출력되고, false면 undefined가 되며 아무것도 출력되지 않습니다.

#### 3. || 연산자를 활용한 기본값 설정
Falsy 값(false, 0, null, undefined, "")이 주어지면 기본값을 설정할 수 있습니다.
```javascript
let username = inputName || "Guest";
```
inputName이 null, undefined, ""이면 "Guest"가 저장됩니다.
inputName이 "John"이면 "John"이 저장됩니다.

```javascript
console.log("" || "기본값");         // 출력: "기본값"
console.log(null || "기본값");       // 출력: "기본값"
console.log("사용자" || "기본값");    // 출력: "사용자"
```

### 조건부 렌더링 구현 방법

#### 1. 삼항 연산자
```jsx
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? "환영합니다!" : "로그인이 필요합니다."}
    </div>
  );
}
```
isLoggedIn이 true이면 "환영합니다!", 아니면 "로그인이 필요합니다."가 표시됩니다.

#### 2. 논리 연산자(&&)
```jsx
function Notification({ hasMessage }) {
  return (
    <div>
      <h1>안녕하세요!</h1>
      {hasMessage && (
        <p>새로운 메시지가 도착했습니다.</p>
      )}
    </div>
  );
}
```
hasMessage가 true일 때만 "새로운 메시지가 도착했습니다."가 표시됩니다.

#### 3. if문 사용 (return 내부에서 조건 분기)
```jsx
function UserStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <div>환영합니다!</div>;
  }
  return <div>로그인이 필요합니다.</div>;
}
```
isLoggedIn이 true이면 "환영합니다!", 아니면 "로그인이 필요합니다."가 표시됩니다.

#### 4. 컴포넌트를 활용한 조건부 렌더링
```jsx
function Welcome() {
  return <div>환영합니다!</div>;
}

function PleaseLogin() {
  return <div>로그인이 필요합니다.</div>;
}

function Greeting({ isLoggedIn }) {
  return isLoggedIn ? <Welcome /> : <PleaseLogin />;
}
```
isLoggedIn 값에 따라 Welcome 또는 PleaseLogin 컴포넌트가 렌더링됩니다.

#### 5. 즉시 실행 함수 (IIFE) 활용
```jsx
function UserProfile({ user }) {
  return (
    <div>
      {(() => {
        if (!user) return <div>사용자 정보 없음</div>;
        return <div>사용자: {user.name}</div>;
      })()}
    </div>
  );
}
```
user가 존재하면 이름을 표시하고, 없으면 "사용자 정보 없음"이 출력됩니다.

#### 6. switch 문을 활용한 조건부 렌더링
```jsx
function StatusMessage({ status }) {
  switch (status) {
    case "success":
      return <div>성공적으로 처리되었습니다!</div>;
    case "error":
      return <div>오류가 발생했습니다.</div>;
    case "loading":
      return <div>로딩 중...</div>;
    default:
      return <div>상태를 확인할 수 없습니다.</div>;
  }
}
```

#### 7. 조건부 렌더링 + 버튼 이벤트
```jsx
import { useState } from "react";

function ToggleMessage() {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div>
      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "숨기기" : "보이기"}
      </button>
      {isVisible && (
        <p>이 메시지가 보입니다!</p>
      )}
    </div>
  );
}
```
버튼 클릭 시 isVisible 상태가 변경되며, 메시지가 나타나거나 사라집니다.

### 조건부 렌더링 방법 비교

React에서 조건부 렌더링을 구현하는 방법은 여러 가지가 있으며, 상황에 맞게 선택하면 됩니다.

| 방법 | 사용 방식 | 특징 |
|------|----------|------|
| 삼항 연산자 (? :) | {condition ? A : B} | 간결한 표현 |
| 논리 연산자 (&&) | {condition && A} | 특정 조건에서만 렌더링 |
| if 문 | if (condition) return A; | 명확한 조건 처리 |
| 별도 컴포넌트 | <ComponentA> or <ComponentB> | 재사용성 증가 |
| 즉시 실행 함수 (IIFE) | {(() => { return A; })()} | 유연한 표현 가능 |
| switch 문 | switch (value) { case A: return B; } | 여러 조건 처리에 유용 |
| 상태 변경 이벤트 | useState와 함께 조건부 렌더링 | 동적 UI 구현 |
