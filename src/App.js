import Home from './components/Homepage/Home';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
	return (
		<div className='App'>
			<Router>
			<Home />
			</Router>
		</div>
	);
}
export default App;