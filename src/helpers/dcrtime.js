import dcrtime from "dcrtimejs";

dcrtime.setNetwork(process.env.REACT_APP_NETWORK);

export const digestPayload = dcrtime.getSHA256fromBase64;

export const timestamp = dcrtime.timestamp;

export const verify = dcrtime.verify;

// Handlers for API calls
export const handleVerify = async data => {
  const digests = getDigests(data);
  const res = await verify(digests);
  if (res.error) throw res.error;
  return res;
};

export const handleTimestamp = async data => {
  const digests = getDigests(data);
  const res = await timestamp(digests, "data");
  if (res.error) throw res.error;
  return res;
};

// Helper functions
export const mergeDigestsAndResult = (digests, res) =>
  digests.map(ds => {
    const result = res.digests?.find(d => ds.digest === d.digest);
    return {
      ...ds,
      ...result
    };
  });

export const getDigests = data => data.map(d => d.digest);

export const isDigestAnchored = digest =>
  !!(digest.chaininformation && digest.chaininformation.chaintimestamp);

export const isDigestFound = digest => digest.result === 1;

export const isDigestAnchorPending = digest =>
  isDigestFound(digest) && !isDigestAnchored(digest);

export const isDigestNotAnchored = digest => !isDigestFound(digest);

export const getAnchoredDigests = digests => digests.filter(isDigestAnchored);

export const getPendingDigests = digests =>
  digests.filter(isDigestAnchorPending);

export const getNotAnchoredDigests = data => data.filter(isDigestNotAnchored);
