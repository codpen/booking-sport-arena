import React from "react";
import { LayoutOwner } from "../../components/Layout";

export default function AddServices() {
	return (
		<LayoutOwner>
			<form>
				<div className="flex flex-wrap mx-3 mb-6">
					<div className="mb-5 w-full px-3 lg:px-10">
						<h6 className="font-bold my-3">Operational Hours</h6>
					</div>
				</div>
			</form>
		</LayoutOwner>
	);
}
