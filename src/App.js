//import 'antd/dist/antd.css'; 만들어진 css를 손 쉽게 쓸 수 있는 라이브러리
import "./App.css";
import MainPageComponent from "./main/index.js";
import { Switch, Route, Link, useHistory } from "react-router-dom"; // 화면 이동을 돕는 라이브러리
//Route 컴포넌트는 해당 경로에 들어가게 됐을 때 메인페이지를 보여준다.는 의미
import Uploadpage from "./upload";
import ProductPage from "./product";
//path="/product/:id 콜론이 붙은 부분이 자유롭게 숫자를 입력할 수 있게 된다 그 숫자를 ProductPage에서 받는다
import { Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";
function App() {
  const history = useHistory();
  return (
    <div>
      <div id="header">
        <div id="header-area">
          <Link to="/">
            <img src="/images/icons/logo.png" />
          </Link>
          <Button
            size="large"
            onClick={function () {
              history.push("/upload");
              //이 함수는 매개변수로 입력한 경로로 이동하는 함수
            }}
            icon={<DownloadOutlined />}
          >
            상품 업로드
          </Button>
        </div>
      </div>
      <div id="body">
        <Switch>
          <Route exact={true} path="/">
            <MainPageComponent />
          </Route>
          <Route exact={true} path="/products/:id">
            <ProductPage />
          </Route>
          <Route exact={true} path="/upload">
            <Uploadpage />
          </Route>
        </Switch>
      </div>
      <div id="footer"></div>
    </div>
  );
}

export default App;
