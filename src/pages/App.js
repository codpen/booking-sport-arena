import Button from '../components/Buttons';
import { ListCategory } from '../components/Category';
import { InputText } from '../components/InputText';
import Layout from '../components/Layout';
import PaginationRounded from '../components/Pagination';
import { ListVenue } from '../components/Venue';
import '../styles/App.css';

function App() {
	return (
		<>
			<Layout>
				<div className="banner">
					<div className="cover">
						<div className="h-full grid gap-4 content-center">
							<div className="mx-auto flex flex-row gap-2">
								<InputText type="text" placeholder="Search" />
								<Button variant="solid" className="" size="lg">
									Search
								</Button>
							</div>
						</div>
					</div>
				</div>
				<ListCategory />
				<ListVenue />
				<PaginationRounded />
			</Layout>
		</>
	);
}

export default App;
