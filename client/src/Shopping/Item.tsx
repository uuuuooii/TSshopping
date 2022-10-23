
const Item = ({ item, handleClick,cart }:any) => {
  console.log(item)
  const { name, price } = item;
  return (
    <div className="items">
      <div className="details">
        <p>{name}</p>
        <p className="price">{price}원</p>
        <button onClick={() => handleClick(item)}>추가</button>
      </div>
    </div>
  );
};

export default Item;
