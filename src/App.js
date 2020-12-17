import React from 'react'
import { HashRouter, Route, Link } from 'react-router-dom'

// 导入页面组件
import Home from './pages/Home'
import CityList from './pages/CityList'
export default function App() {
    return (
        <HashRouter>
            <ul>
                <li><Link to="/home">首页</Link></li>
                <li><Link to="/citylist">城市选择页面</Link></li>
            </ul>

            <Route path="/home" component={Home}></Route>
            <Route path="/citylist" component={CityList}></Route>
        </HashRouter>
    )
}
