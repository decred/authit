import React from "react";
import PropTypes from "prop-types";
import Modal from "src/components/Modal";
import { P } from "pi-ui";
import styles from "./ModalNewHashInfo.module.css";

const ModalNewHashInfo = ({ show, onClose }) => {
  const title = "Create new hash";

  const content = (
    <div>
      <P>
        The timestamp service allows you to create a Proof-of-Existence for a
        file. A Proof-of-Existence provides cryptographic proof that a file
        existed in its exact form at a specific Decred block height. It is
        commonly referred to as a timestamp.
      </P>
      <P>
        When you upload a file to the timestamp service, a hash of the file is
        submitted to the Dcrtime server. A hash is a way to take a variable
        length input, such as a file, and compress it down to a fixed length
        output.
      </P>
      <P>
        Hash example:
        <span className={styles.hash}>
          a1cf14dda0a4158077d5f4ce961d09b9c00f65d5e29429989c031c234ffe2a43
        </span>
      </P>
      <P>
        Hashing a 100 page document will result in the same sized output as
        hashing a 1 page document. The hashes will be different values, but they
        will both be 64 characters long.
      </P>
      <P>
        This hash is guaranteed to be unique. The only way to reproduce it is to
        hash the original file. If even a single letter is changed in the
        original file, the resulting hash will be completely different. With
        this property we can cryptographically prove that a file existed at a
        specific Decred block height.
      </P>
      <P>
        The Dcrtime server does an hourly timestamp of all received hashes in
        that hour. It organizes them in a merkle tree, and the root of that
        merkle tree is appended into a transaction, being effectively
        timestamped and forever imprinted onto the Decred blockchain. This also
        guarantees minimal onchain footprint. Since only the merkle root is
        timestamped on the transaction, it does not matter if the tree had one
        or one million hash nodes.
      </P>
      <P>
        An example of a timestamp can be found in the OP_RETURN of the following
        DCR transaction:
      </P>
      <P>
        <a href="https://explorer.dcrdata.org/tx/9584e34a8f3c805c2df71f45632c73b69bd9c29b37322d7003cd9cc9b8b8fe2e">
          https://explorer.dcrdata.org/tx/9584e34a8f3c805c2df71f45632c73b69bd9c29b3...
        </a>
      </P>
    </div>
  );

  return (
    <Modal title={title} content={content} show={show} onClose={onClose} />
  );
};

ModalNewHashInfo.propTypes = {
  show: PropTypes.bool,
  onClose: PropTypes.func
};

export default ModalNewHashInfo;
