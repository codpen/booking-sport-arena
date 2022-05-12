import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

// import InsertDriveFileRoundedIcon from "@mui/icons-material/InsertDriveFileRounded";
// import { green } from "@mui/material/colors";

export default function AccordionUserList(props) {
  const { fullname, username, email, phone, id } = props;
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
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
                  alt="avatar"
                  src="https://source.unsplash.com/360x360?profile"
                />
                <div className="ml-4 ">
                  <p>{fullname}</p>
                  <p className="text-slate-400">{username}</p>
                </div>
              </div>

              <div className="basis-3/12">
                <p>{email}</p>
                <p className="text-slate-400">{phone}</p>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="w-full"></div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
