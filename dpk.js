const crypto = require("crypto");

function generateHash(data) {
  return crypto.createHash("sha3-512").update(data).digest("hex");
}

function deterministicPartitionKey(event) {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (!event) {
    return TRIVIAL_PARTITION_KEY;
  }

  let candidate = event.partitionKey || generateHash(JSON.stringify(event));

  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = generateHash(candidate);
  }

  return candidate;
}

module.exports = {
  deterministicPartitionKey
};
