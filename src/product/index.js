import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import "./index.css";
//useEffect 컴포넌트가 렌더링 될 때 마다 특정 작업을 실행할 수 있도록 하는 Hook
//setState 함수형 컴포넌트에서 상태값을 관리하게 해준다
//setproducts를 통해product의 값을 변경하면 해당 컴포넌트는 다시 렌더링 되어서 state가 변경될 때 마다 화면이 업데이트 된다
//useEffect로 딱 한번만 불리게 해준다. 렌더링 될때마다 또 불리는걸 방지
//axios에서 result로 받아서 setproducts로 state를 업데이트 해준다.
function ProductPage() {
  const { id } = useParams();
  const [product, setProducts] = useState(null);
  useEffect(function () {
    axios
      .get(
        `https://e963fa47-a1f3-44dd-b306-4e74abf86308.mock.pstmn.io/products/${id}`
      )
      .then(function (result) {
        setProducts(result.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  if (product === null) {
    return <h1>상품정보를 받고 있습니다...</h1>;
  }
  //처음에 product에는 default로 unll이 들어가서 오류가 발생한다.
  //네트워크 통신은 비동기 통신이기 때문에 데이터를 받아오지 못한체로 즉,product에 null값이
  //들어간 체로 return을 하게 된다.
  //if문을 통해 1차로 리턴을 하게되면 밑의 return은 실행되지 않고 통신이 완료되면
  //다시 실행시켜 아래 return문을 작동시킨다.
  return (
    <div>
      <div id="image-box">
        <img src={"/" + product.imageUrl} />
      </div>
      <div id="profile-box">
        <img src="/images/icons/avatar.png" />
        <span>{product.seller}</span>
      </div>
      <div id="contents-box">
        <div id="name">{product.name}</div>
        <div id="price">{product.price}</div>
        <div id="createdAt">2020년 12월 8일</div>
        <div id="description">{product.description}</div>
      </div>
    </div>
  );
}

export default ProductPage;
