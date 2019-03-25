import * as React from "react";
import {connect} from "react-redux";
import {Helmet} from "react-helmet";
import {getHomeList} from './store/action';
const {Fragment} = React;




const Home =()=>{
    return(
        <Fragment>
            <Helmet>
                <title>这是SSR新闻页面 - 丰富多彩的资讯</title>
				<meta name="description" content="这是SSR新闻页面 - 丰富多彩的资讯" />
            </Helmet>
            <div>

            </div>
        </Fragment>
    )
}

Home.loadData=(store)=>{
    return store.dispatch(getHomeList());
}

export default connect()(Home)