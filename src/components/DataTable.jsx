import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
	{ field: "day", headerName: "Day", width: 150 },
	{
		field: "date",
		headerName: "Date",
		type: "date",
		width: 150,
	},
	{
		field: "booking",
		headerName: "Booking Time",
		width: 200,
	},
	{
		field: "user",
		headerName: "Booked by",
		width: 300,
	},
	{
		field: "status",
		headerName: "Status",
		width: 100,
		editable: true,
	},
];

export default function DataTable({ rows }) {
	return (
		<div style={{ width: "100%", height: 450 }}>
			<DataGrid
				rows={rows}
				columns={columns}
				pageSize={6 ? 6 : rows.length}
				rowsPerPageOptions={[6]}
				// disableSelectionOnClick
			/>
		</div>
	);
}
