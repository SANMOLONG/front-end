import { Route, Routes } from "react-router-dom";
import * as Pages from "./pages";

function App() {
	return (
		<Routes>
			<Route path='/' element={<Pages.Main />} />
			<Route path='/home' element={<Pages.Home />} />
			<Route path='/chatting' element={<Pages.Chatting />} />
			<Route path='/mypage' element={<Pages.Mypasge />} />
			<Route path='/joinboard' element={<Pages.JoinBoard />} />
			<Route path='/joinwrite' element={<Pages.JoinWrite />} />
		</Routes>
	);
}

export default App;
