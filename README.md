# 상품 리스트 및 장바구니 기능 구현 과제 (Developed by 김은혜)

<img src = "./client/public/image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202022-10-24%20%EC%98%A4%EC%A0%84%205.12.29.png" width= "30%" height="30%">
<img src ="./client/public/image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202022-10-24%20%EC%98%A4%EC%A0%84%205.13.08.png"width= "30%" height="30%">

</br>

## 실행 방법

---

## Server 실행법 <br>

- json-server 사용
  - mock data를 생성
  - 실제 API에서 보내주는 데이터 형식에 맞게 json 파일에 데이터를 담아 fetch 함수를 사용해 데이터를 받아옴

```javascript
// json-server 설치하기
yarn add json-server
```

```javascript
// json-server 실행하기
yarn json-server --watch db.json --port 3001
```

<br/>

## Client 실행법 <br/>

- typescipt 사용

```javascript
//React 실행
yarn start
```

<br/>

# 사용 시나리오

- 원하는 item 추가시, 장바구니로 추가됨. (cart.length로 선택한 개수 표현)
- 장바구니 icon을 클릭 하면, 장바구니로 이동.
- 장바구니에서 추가된 item 확인 가능.
- '+' '-' 버튼으로 item 수량 설정 가능.
- 삭제 버튼으로 item 개별 삭제 가능. (id로 구별)

<br/>

# 기능

- item data

```javascript
const [item, setItem] = useState([]);
useEffect(() => {
  fetch("http://localhost:3001/items")
    .then((res) => res.json())
    .then((res) => {
      setItem(res);
    });
}, []);
```

- discounts data

```javascript
const [discounts, setDiscounts] = useState([]);
useEffect(() => {
  fetch("http://localhost:3001/discounts")
    .then((res) => res.json())
    .then((res) => {
      setDiscounts(res);
    });
}, []);
```

- 장바구니 담기

```javascript
const handleClick = (item: any) => {
  if (cart.indexOf(item) !== -1) return;
  setCart([...cart, item]);
};
```

- 금액 변경

```javascript
const handlePrice = () => {
  let ans = 0;
  cart.map((item: any) => (ans += item.count * item.price));
  setPrice(ans);
};

useEffect(() => {
  handlePrice();
});
```

- 개수 변경

```javascript
const handleChange = (item: any, d: any) => {
  const ind = cart.indexOf(item);
  const arr = cart;
  arr[ind].count += d;

  if (arr[ind].count === 0) arr[ind].count = 1;
  setCart([...arr]);
};
```

- 삭제

```javascript
const handleRemove = (id: any) => {
  const arr = cart.filter((item: any) => item.id !== id);
  setCart(arr);
  handlePrice();
};
```

# 진행 중

- 할인 기능
- 문제

  - state 값을 cart로 넘겨 주는 부분에서 undefined가 떠서 onClick 이밴트에서 에러 발생.

  <img src = "./client/public/image/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7%202022-10-24%20%EC%98%A4%EC%A0%84%205.17.13.png" width= "40%" height="40%">
