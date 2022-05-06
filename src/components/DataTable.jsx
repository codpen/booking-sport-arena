import * as React from "react";
import {
	DataGrid,
	GridToolbarContainer,
	GridToolbarFilterButton,
} from "@mui/x-data-grid";

import PropTypes from "prop-types";

export default function DataTable({ rows, columns }) {
	const [filterButtonEl, setFilterButtonEl] = React.useState(null);
	return (
		<div style={{ width: "100%", height: 450 }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={10 ? 10 : rows.length}
				rowsPerPageOptions={[10]}
				components={{
					Toolbar: CustomToolbar,
				}}
				componentsProps={{
					panel: {
						anchorEl: filterButtonEl,
					},
					toolbar: {
						setFilterButtonEl,
					},
				}}
				disableSelectionOnClick
			/>
		</div>
	);
}

const CustomToolbar = ({ setFilterButtonEl }) => (
	<GridToolbarContainer>
		<GridToolbarFilterButton ref={setFilterButtonEl} />
	</GridToolbarContainer>
);
CustomToolbar.propTypes = {
	setFilterButtonEl: PropTypes.func.isRequired,
};
 