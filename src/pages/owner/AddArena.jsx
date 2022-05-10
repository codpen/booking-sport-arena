import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Buttons";
import {
  errorMessage,
  fillAll,
  MuiError,
  successMessage,
} from "../../functions/Alert";
import {
  InputText,
  TextArea,
  RadioCategory,
  InputFile,
} from "../../components/InputText";
import { LayoutOwner } from "../../components/Layout";
import axios from "axios";
import Swal from "sweetalert2";
import { statusLogin, API } from "../../services/Users";

export default function CreateArena() {
  const existedVenue = localStorage.getItem("venue_id") ? true : false;
  const url = document.location.href;
  const [venueId, setVenueId] = useState(
    existedVenue ? localStorage.getItem("venue_id") : ""
  );
  const [venueName, setVenueName] = useState("");
  const [details, setDetails] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const navigate = useNavigate();
  const token = statusLogin();
  document.title = `Hobiku | Create Arena`;

  useEffect(() => {
    url === `${window.location.origin}/owner/edit/${venueId}` && getVenue();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getVenue = async () => {
    await axios
      .get(`${API}/venues/${venueId}`)
      .then((res) => {
        setVenueName(res.data.data.name);
        setDetails(res.data.data.description);
        setAddress(res.data.data.address);
        setCity(res.data.data.city);
        setCategory(res.data.data.category.id);
        setImage(res.data.data.image);
        setImagePreview(res.data.data.image);
        document.title =
          url === `${window.location.origin}/owner/edit/${venueId}`
            ? `Edit | ${res.data.data.name}`
            : "Hobiku | Create Arena";
      })
      .catch((err) => {
        MuiError(err);
      });
  };

  function createVenue() {
    const formData = new FormData();
    formData.append("name", venueName);
    formData.append("description", details);
    formData.append("address", address);
    formData.append("city", city);
    formData.append("category_id", category);
    formData.append("image", image);
    return formData;
  }

  const changeImageButton = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    setImage(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const nextButton = (e) => {
    e.preventDefault();
    if (venueName && address && city && category && image) {
      const formData = createVenue();
      Swal.fire({
        title: "Are you sure?",
        text: "Please make sure all the information is correct",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
      }).then((result) => {
        if (result.value) {
          navigate("/owner/services");
          axios
            .post(`${API}/venues/step1`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${token}`,
              },
            })
            .then((res) => {
              successMessage(res);
              setVenueId(res.data.data.id);
              navigate("/owner/services");
            })
            .catch((err) => {
              errorMessage(err);
            });
        }
      });
    } else {
      fillAll();
    }
  };

	const updateButton = (e) => {
		e.preventDefault();
		if (venueName && address && city) {
			const formData = new FormData();
			formData.append("name", venueName);
			formData.append("description", details);
			formData.append("address", address);
			formData.append("city", city);
			formData.append("category_id", category);
			Swal.fire({
				title: "Are you sure?",
				text: "Please make sure all the information is correct",
				icon: "warning",
				showCancelButton: true,
				confirmButtonColor: "#3085d6",
				cancelButtonColor: "#d33",
				confirmButtonText: "Yes",
				cancelButtonText: "No",
			}).then((result) => {
				if (result.value) {
					axios
						.put(`${API}/venues/step1/${venueId}`, formData, {
							headers: {
								"Content-Type": "application/json",
								Authorization: `Bearer ${token}`,
							},
						})
						.then((res) => {
							successMessage(res);
							navigate(`/owner/edit/${venueId}/services`);
						})
						.catch((err) => {
							errorMessage(err);
						});
				}
			});
		} else {
			fillAll();
		}
	};

	const submitImage = (e) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append("image", image);
		axios
			.put(`${API}/venues/image/${venueId}`, formData, {
				headers: {
					"Content-Type": "multipart/form-data",
					Authorization: `Bearer ${token}`,
				},
			})
			.then((res) => {
				successMessage(res);
			})
			.catch((err) => {
				errorMessage(err);
			});
	};
	return (
		<LayoutOwner>
			<form>
				<div className="flex flex-wrap mx-3 mb-6">
					<div className="mb-5 w-full px-3 lg:px-10">
						<h6 className="font-bold my-3">
							Venue Name
							{url !==
								`${window.location.origin}/owner/edit/${venueId}` && (
								<strong className="text-amber-500">*</strong>
							)}
						</h6>
						<InputText
							id="input-arena-name"
							type="text"
							placeholder="Enter venue name"
							value={venueName}
							onChange={(e) => setVenueName(e.target.value)}
						/>
					</div>
					<div className="mb-5 w-full px-3 lg:px-10">
						<h6 className="font-bold my-3">Detail Venue</h6>
						<TextArea
							id="input-arena-detail"
							placeholder="Enter venue detail"
							value={details}
							onChange={(e) => setDetails(e.target.value)}
						/>
					</div>
					<div className="mb-5 w-full px-3 lg:px-10">
						<h6 className="font-bold my-3">
							Address
							{url !==
								`${window.location.origin}/owner/edit/${venueId}` && (
								<strong className="text-amber-500">*</strong>
							)}
						</h6>
						<div className="flex md:flex-wrap flex-col gap-y-2 md:flex-row md:gap-0">
							<InputText
								id="input-arena-address"
								type="text"
								className="md:w-6/12 px-3"
								placeholder="Jln. "
								value={address}
								onChange={(e) => setAddress(e.target.value)}
							/>
							<div className="md:w-1/12 px-3"></div>
							<InputText
								id="input-arena-city"
								type="text"
								className="md:w-5/12 px-3"
								placeholder="City name"
								value={city}
								onChange={(e) => setCity(e.target.value)}
							/>
						</div>
					</div>
					<div className="mb-5 w-full px-3 lg:px-10">
						<h6 className="font-bold my-3">
							Category{" "}
							{url !==
								`${window.location.origin}/owner/edit/${venueId}` && (
								<strong className="text-amber-500">*</strong>
							)}
						</h6>
						<div className="">
							<RadioCategory
								value={category ? category : parseInt(category)}
								setValue={setCategory}
							/>
						</div>
					</div>
					<div className="mb-5 w-full px-3 lg:px-10">
						<h6 className="font-bold my-3">
							Upload Image
							{url !==
								`${window.location.origin}/owner/edit/${venueId}` && (
								<strong className="text-amber-500">*</strong>
							)}
						</h6>
						<div className="border-2 rounded-md">
							<img
								className="rounded-md mx-auto h-fit"
								src={imagePreview ? imagePreview : image}
								height="100%"
								width="100%"
								alt=""
							/>
							<div className="flex items-center flex-col md:flex-row bg-white">
								<InputFile
									id="input-arena-image"
									accept="image/png, image/jpeg"
									onChange={(e) => changeImageButton(e)}
								/>
								{/* {existedVenue !== null && ( */}
								{url ===
									`${window.location.origin}/owner/edit/${venueId}` && (
									<Button
										variant="solid"
										id="change-arena-image-button"
										onClick={(e) => submitImage(e)}
										className="mx-4 my-2">
										Upload
									</Button>
								)}
							</div>
						</div>
					</div>
					{url !==
						`${window.location.origin}/owner/edit/${venueId}` && (
						<p className="w-full px-3 lg:px-10">
							(<strong className="text-amber-500">*</strong>)
							Please make sure you fill all the required fields
							correctly.
						</p>
					)}
					{url ===
						`${window.location.origin}/owner/edit/${venueId}` && (
						<p className="w-full px-3 lg:px-10">
							(<strong className="text-teal-500">*</strong>) If
							you change the image, please click the upload button
							to upload the new image.
						</p>
					)}
					<div className="w-full flex justify-center md:justify-end my-2 lg:mx-10 flex-col lg:flex-row">
						{url ===
							`${window.location.origin}/owner/edit/${venueId}` && (
							<Button
								className="w-full md:w-28 my-2"
								onClick={(e) => {
									updateButton(e);
								}}
								variant="warning"
								type="submit"
								id="button-next">
								Update
							</Button>
						)}
						{url !==
							`${window.location.origin}/owner/edit/${venueId}` && (
							<Button
								className="w-full md:w-28 my-2"
								onClick={(e) => nextButton(e)}
								variant="solid"
								type="submit"
								id="button-next">
								Next
							</Button>
						)}
					</div>
				</div>
			</form>
		</LayoutOwner>
	);
}
