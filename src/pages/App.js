import Button from '../components/Buttons';
import { ListCategory } from '../components/Category';
import { InputText } from '../components/InputText';
import Layout from '../components/Layout';
import { ListVenue } from '../components/Venue';
import '../styles/App.css';

function App() {
	document.title = 'Hobiku - Booking Sport Arena';
	return (
		<>
			<Layout>
				<div className="banner h-80">
					<div className="cover h-80">
						<div className="h-full grid gap-4 content-center">
							<h5 className="uppercase font-bold text-white text-center text-2xl lg:text-3xl px-4">
								We offer you
								<br />
								the best sport arena in the city
							</h5>
							<div className="mx-auto flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-2">
								<InputText
									type="text"
									placeholder="Search"
									id="input-search"
								/>
								<Button
									variant="solid"
									className=""
									id="search-button">
									<i className="fa-solid fa-magnifying-glass"></i>
								</Button>
							</div>
						</div>
					</div>
				</div>
				<ListCategory />
				<ListVenue />
			</Layout>
		</>
	);
}

export default App;
