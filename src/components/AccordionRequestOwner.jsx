import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Avatar } from "@mui/material";

export default function AccordionRequestOwner() {
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
            <div className="flex items-center">
              <div className="flex items-center basis-2/5">
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  alt="Remy Sharp"
                  src="https://source.unsplash.com/360x360?profile"
                />
                <div className="ml-4 ">
                  <p>full name naem name</p>
                  <p className="text-slate-400">username</p>
                </div>
              </div>

              <div className="basis-1/5">
                <p>mail@mail.com</p>
                <p className="text-slate-400">+91-1234567890</p>
              </div>

              <div className="basis-1/5">
                <p>may 26, 2019</p>
                <p className="text-slate-400">6.30pm</p>
              </div>

              <div className="basis-1/5 text-center">
                <button className="w-28 bg-yellow-400 px-6 py-1 rounded-full mr-20 text-white block">
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
                <div className="ml-8">
                  <a
                    href="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    file pdf
                  </a>
                </div>
                <div>
                  <button className="w-28 bg-emerald-600 px-6 py-1 rounded-full mr-5 text-white">
                    approve
                  </button>
                  <button className="w-28 bg-red-600 px-6 py-1 rounded-full mr-10 text-white">
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
