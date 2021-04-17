import React from "react";
import TimestampForm from "src/components/TimestampForm";
import ModalNewHashInfo from "src/components/ModalNewHashInfo";
import Page from "src/components/Layout/Page";
import Title from "src/components/Title";

const Timestamp = () => (
  <Page>
    <Title title="Create new hash" modal={ModalNewHashInfo} />
    <TimestampForm />
  </Page>
);

export default Timestamp;
