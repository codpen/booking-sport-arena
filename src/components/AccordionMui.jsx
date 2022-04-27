import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";
import { Document } from "react-pdf";
import { Page } from "react-pdf";

export default function AccordionMui() {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <div className="w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                />
                <div className="ml-4">
                  <strong>full name naem name</strong>
                  <p>username</p>
                </div>
              </div>

              <div>
                <strong>mail@mail.com</strong>
                <p>+91-1234567890</p>
              </div>

              <div>
                <strong>may 26, 2019</strong>
                <p>6.30pm</p>
              </div>

              <div>
                <button className="w-auto bg-yellow-400 px-6 py-1 rounded-full mr-20 text-white">
                  Pending
                </button>
              </div>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <div className="w-full">
              <div className="flex items-center justify-between">
                <div>nama file.pdf</div>
                <div>
                  <button className="w-auto bg-emerald-600 px-6 py-1 rounded-full mr-5 text-white">
                    approve
                  </button>
                  <button className="w-auto bg-red-600 px-6 py-1 rounded-full mr-20 text-white">
                    reject
                  </button>
                </div>
              </div>
            </div>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
