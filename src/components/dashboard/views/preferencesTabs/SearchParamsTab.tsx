import React, { FC } from "react";
import { DocumentSnapshot } from "firebase/firestore";
import {
  Typography,
  FormGroup,
  Divider,
} from "@mui/material";

import { ClientConfig } from "types/user";
import {
  FirestoreBackedTextField,
} from "components/utils/forms";


const SearchParamsTab: FC<{
  userConfigSnapshot: DocumentSnapshot<ClientConfig>;
}> = ({ userConfigSnapshot }) => {
  const updatingAnything = !!userConfigSnapshot?.metadata.fromCache;
  return (
    <>
      <Typography variant="h6" gutterBottom>
        Search Term
      </Typography>
      <FormGroup>
        <FirestoreBackedTextField
          label="Search Term"
          disabled={updatingAnything}
          docSnap={userConfigSnapshot!}
          fieldPath="searchParams.searchString"
          variant="standard"
          sx={{ maxWidth: 300 }}
        />
      </FormGroup>
      <Divider sx={{ marginTop: 2, marginBottom: 4 }} />
      <Typography variant="h6" gutterBottom>
        Bed & Bath
      </Typography>
    </>
  );
};

export default SearchParamsTab;
