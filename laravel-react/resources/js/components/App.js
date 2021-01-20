import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import GlobalNav from './GlobalNav';
import Top from './Top';
import About from './About';

const App = () => {
    return(
        // 루틴 정의(History API 이용)
        <BrowserRouter>
        <React.Fragment>
            <GlobalNav />
            {/* <Switch> 안쪽에 라우팅 : url에 매치된 첫 번째 라우팅만 렌더링 */}
            <switch>
                {/* exact : 주어진 경로와 정확히 맞아야 설정한 컴포넌트를 보여줌 */}
                <Route path="/" exact component={Top} /> 
                <Route path="/about" component={About} />
            </switch>
        </React.Fragment>
        </BrowserRouter>
    )
}

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}