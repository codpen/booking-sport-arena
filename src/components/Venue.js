import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { CardLoading } from "./Card";
import PaginationRounded from "./Pagination";
import { API } from "../services/Users";
import { errorMessage } from "../functions/Alert";

export const Venues = ({ venues, loading }) => {
  const [skeleton] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 2xl:grid-cols-4 gap-10 ">
      {loading
        ? skeleton.map((item) => <CardLoading key={item} />)
        : venues.map((venue) => (
            <div
              key={venue.id}
              id={`venue-${venue.id}`}
              className="my-4 md:my-6 lg:my-6 bg-white shadow-md rounded-lg xl:my-6"
              onClick={() => {
                navigate(`/venues/${venue.id}`);
                localStorage.setItem("venue_id", JSON.stringify(venue.id));
              }}
            >
              <div className="rounded-2xl">
                <img
                  className="rounded-t-xl h-52 w-fit bg-cover"
                  src={
                    venue.image.length < 10
                      ? "https://images.unsplash.com/photo-1505305976870-c0be1cd39939?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                      : venue.image
                  }
                  alt=""
                />
                <div className="text-left m-2 py-1 px-3">
                  <h3 className="text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-2xl font-bold capitalize">
                    {venue.name}
                  </h3>
                  <h6 className="">{venue.location}</h6>
                  <h2 className="text-amber-500 text-xl font-semibold">
                    Rp. {venue.price.toLocaleString()}
                  </h2>
                </div>
              </div>
            </div>
          ))}
    </div>
  );
};

export function ListVenue({ search, category }) {
  const [venues, setVenues] = useState([]);
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);
  // eslint-disable-next-line no-unused-vars
  const [venuesPerPage, setVenuesPerPage] = useState(12);
  // let [searchParams] = useSearchParams();
  // let search = searchParams.get("search");
  // let category = searchParams.get("category");

  useEffect(() => {
    fetchVenues(search, category);
  }, [search, category]);

  const fetchVenues = async (search, category) => {
    setLoading(true);
    await axios
      .get(`${API}/venues`, {
        params: {
          name: search,
          category: category,
        },
      })
      .then((res) => {
        // console.log(res);
        if (res.data.data) {
          setVenues(res.data.data);
        }
        setLoading(false);
      })
      .catch((err) => {
        errorMessage(err);
      });
  };

  const indexOfLastVenue = currentPage * venuesPerPage;
  const indexOfFirstVenue = indexOfLastVenue - venuesPerPage;
  const currentVenues = venues.slice(indexOfFirstVenue, indexOfLastVenue);

  const displayVenue = () => {
    if (venues.length > 0) {
      return <Venues venues={currentVenues} loading={loading} />;
    }
    return <span>tidak ada data</span>;
  };

  return (
    <>
      <h4 className="uppercase text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl  my-8 text-teal-500 font-bold text-center">
        LIST ARENA
      </h4>
      {displayVenue()}
      {/* <PaginationRounded /> */}
    </>
  );
}
