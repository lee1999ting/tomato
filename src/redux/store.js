/* 
	该文件专门用于暴露一个store对象
*/

//引入createStore，专门用于创建redux中最为核心的store对象
import { createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
//引入汇总之后的reducer
import reducer from './reducers'

//暴露store 
export default createStore(reducer,composeWithDevTools())