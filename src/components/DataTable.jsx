import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

export default function DataTable({ rows, columns }) {
	return (
		<div style={{ width: "100%", height: 450 }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={10 ? 10 : rows.length}
				rowsPerPageOptions={[10]}
				components={{
					Toolbar: GridToolbar,
				}}
				disableSelectionOnClick
			/>
		</div>
	);
}