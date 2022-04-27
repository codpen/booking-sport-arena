import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme({
	palette: {
		primary: {
			main: '#14B8A6',
		},
		secondary: {
			main: '#fff',
		},
	},
});

export default function PaginationRounded() {
	return (
		<div className='my-5 flex justify-end'>
			<ThemeProvider theme={theme}>
				<Stack spacing={2}>
					<Pagination count={10} color='primary' shape='rounded' />
				</Stack>
			</ThemeProvider>
		</div>
	);
}
