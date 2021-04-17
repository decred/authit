import qs from "query-string";
import { getDigestName } from "src/helpers/localstorage";

export const updateDigests = (digests, newDigests) =>
  digests.map(d => {
    const newDigest = newDigests.filter(nd => nd.digest === d.digest)[0];
    return newDigest || d;
  });

export const processQueryData = locationHash => {
  const {
    hashes: strHashes,
    names: strNames,
    timestamp: strTimestamp
  } = qs.parse(locationHash);

  const hashes = strHashes.split(",");
  const names = strNames ? strNames.split(",") : [];
  const shouldTimestamp = strTimestamp === "true";

  // file names are set from the query param if existent otherwise the
  // digest is used as the name
  const data = hashes.map((d, i) => ({
    // check for file names in localstorage
    name: getDigestName(d) || names[i] || d,
    digest: d
  }));

  return { data, shouldTimestamp };
};
