import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import React from "react";

export default function AccordionOwnerList(props) {
  const {
    fullname,
    username,
    id,
    totalVenue,
    image,
    businessName,
    venueImage,
    venueName,
    venueCity,
    venueAddress,
  } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      console.log({venueAddress});
      <Accordion
        expanded={expanded === `panel${id}`}
        onChange={handleChange(`panel${id}`)}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls={`panel${id}bh-content`}
          id={`panel${id}bh-header`}
        >
          <div className="w-full">
            <div className="flex items-center">
              <div className="flex items-center basis-6/12">
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  alt="Remy Sharp"
                  src={
                    image
                      ? image
                      : "https://source.unsplash.com/360x360?profile"
                  }
                />
                <div className="ml-4 ">
                  <p>{fullname}</p>
                  <p className="text-slate-400">{username}</p>
                </div>
              </div>

              <div className="basis-6/12">
                <p>{businessName}</p>
                <p className="text-slate-400">{totalVenue}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div className="ml-8 flex justify-items-center">
                  {/* {<FiFileText />} */}
                  {/* <InsertDriveFileRoundedIcon
                      sx={{ color: green[500], fontSize: 40 }}
                    /> */}
                  <div>
                    <img
                      className="basis-6/12 w-44 h-24 rounded-md"
                      src="https://source.unsplash.com/360x360?soccer"
                      alt=""
                    />
                  </div>
                </div>
                <div className="basis-6/12">
                  <p>text{venueName}</p>
                  <p>text{venueCity}</p>
                  <p>text{venueAddress}</p>
                </div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
