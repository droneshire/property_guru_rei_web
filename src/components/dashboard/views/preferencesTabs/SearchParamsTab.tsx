import React, { FC } from "react";
import { DocumentSnapshot } from "firebase/firestore";
import { Typography, FormGroup, Divider, Box } from "@mui/material";

import FindInPageIcon from "@mui/icons-material/FindInPage";

import { ClientConfig } from "types/user";
import {
  FirestoreBackedTextField,
  FirestoreBackedRangeSlider,
} from "components/utils/forms";
import searchParamsSliderList from "./searchParamsSliderList";

const SearchParamsTab: FC<{
  userConfigSnapshot: DocumentSnapshot<ClientConfig>;
}> = ({ userConfigSnapshot }) => {
  const updatingAnything = !!userConfigSnapshot?.metadata.fromCache;

  return (
    <>
      <Box sx={{ display: "flex", alignItems: "baseline" }}>
        <FindInPageIcon sx={{ mr: "10px" }} />
        <Typography variant="h6" gutterBottom>
          Search Term
        </Typography>
      </Box>
      <FormGroup>
        <FirestoreBackedTextField
          label="Search Location"
          disabled={updatingAnything}
          docSnap={userConfigSnapshot!}
          fieldPath="searchParams.searchString"
          variant="standard"
          sx={{ maxWidth: 300 }}
        />
      </FormGroup>
      {searchParamsSliderList.map(
        (
          { label, icon: C, key, fieldPathMin, fieldPathMax, min, max, step },
          index
        ) => {
          return (
            <>
              <Divider sx={{ marginTop: 2, marginBottom: 4 }} />
              <Box sx={{ display: "flex", alignItems: "baseline" }}>
                <C sx={{ mr: "10px" }} />
                <Typography variant="h6" gutterBottom>
                  {label}
                </Typography>
              </Box>
              <Box sx={{ marginTop: 2 }}>
                <FormGroup>
                  <FirestoreBackedRangeSlider
                    key={index}
                    disabled={updatingAnything}
                    docSnap={userConfigSnapshot!}
                    min={min}
                    max={max}
                    step={step}
                    fieldPath={fieldPathMax}
                    fieldPathStart={fieldPathMin}
                    minDistance={0}
                    valueLabelDisplay="auto"
                    marks={[
                      { value: min, label: min },
                      { value: max, label: max },
                    ]}
                    sx={{ maxWidth: 300 }}
                  />
                </FormGroup>
              </Box>
            </>
          );
        }
      )}
    </>
  );
};

export default SearchParamsTab;
