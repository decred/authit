import React from "react";
import PropTypes from "prop-types";
import Modal from "src/components/Modal";
import { StatusTag, P } from "pi-ui";
import styles from "./ModalResultsInfo.module.css";

const ModalResultsInfo = ({ show, onClose }) => {
  const title = "Hashes sent to Dcrtime can be either";
  const content = (
    <>
      <StatusTag text="Timestamped" type="greenCheck" />
      <P className={styles.paragraph}>
        The hash has been succesfully timestamped onto the Decred blockchain.
      </P>
      <StatusTag text="Pending" type="bluePending" />
      <P className={styles.paragraph}>
        The Dcrtime server has received the hash and it will be timestamped onto
        the Decred blockchain at the next timestamping interval. This occurs
        once per hour. Once the hash has been timestamped into a DCR block, the
        block must receive 6 confirmations before the timestamp is considered
        successful.
      </P>
      <StatusTag text="Not Found" type="orangeNegativeCircled" />
      <P className={styles.paragraph}>
        The Dcrtime server has not received the hash.
      </P>
    </>
  );
  return (
    <Modal title={title} content={content} show={show} onClose={onClose} />
  );
};

ModalResultsInfo.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func
};

export default ModalResultsInfo;
