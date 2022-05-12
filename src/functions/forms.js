export function updatedItems(venueName, details, address, city, category) {
	const formData = new FormData();
	formData.append("name", venueName);
	formData.append("description", details);
	formData.append("address", address);
	formData.append("city", city);
	formData.append("category_id", category);
	return formData;
}

export function createdArenaItems(
	venueName,
	details,
	address,
	city,
	category,
	image
) {
	const formData = new FormData();
	formData.append("name", venueName);
	formData.append("description", details);
	formData.append("address", address);
	formData.append("city", city);
	formData.append("category_id", category);
	formData.append("image", image);
	return formData;
}
