import { ListCategory } from '../components/Category';
import Layout from '../components/Layout';
import PaginationRounded from '../components/Pagination';
import { ListVenue } from '../components/Venue';

function App() {
	return (
		<>
			<Layout>
				<ListCategory />
				<ListVenue />
				<PaginationRounded />
			</Layout>
		</>
	);
}

export default App;
