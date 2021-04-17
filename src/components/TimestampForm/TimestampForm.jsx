import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Card, Button } from "pi-ui";
import FileInput from "src/components/FileInput";
import HashInput from "src/components/HashInput";
import Tabs from "src/components/Tabs";
import { FileTab, HashTab } from "src/constants";
import styles from "./TimestampForm.module.css";

const TimestampForm = ({ history }) => {
  const [files, setFiles] = useState([]);
  const [hashes, setHashes] = useState([]);
  const [activeTab, setActiveTab] = useState(FileTab);
  const hasFiles = files && files.length;
  const hasHashes = hashes && hashes.length > 0 && hashes[0].digest !== "";

  const handleSubmit = () => {
    const hs = hashes.filter(h => h.digest !== "");
    const digests = files
      .map(file => file.digest)
      .concat(hs.map(hash => hash.digest));
    const names = files.map(file => file.name);
    history.push(
      `results#hashes=${digests.toString()}&names=${names.toString()}&timestamp=true`
    );
  };

  return (
    <>
      <Tabs active={activeTab} set={setActiveTab} />
      <Card className={styles.card}>
        <div className={styles.content}>
          {activeTab === FileTab ? (
            <FileInput files={files} setFiles={setFiles} />
          ) : activeTab === HashTab ? (
            <HashInput hashes={hashes} setHashes={setHashes} />
          ) : null}
        </div>
      </Card>
      <div className={styles.submitButtonWrapper}>
        <Button
          type="button"
          kind={hasFiles || hasHashes ? "primary" : "disabled"}
          className={styles.submitButton}
          onClick={handleSubmit}
        >
          Submit
        </Button>
      </div>
    </>
  );
};

export default withRouter(TimestampForm);
