module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8546,
      network_id: "*" // Match any network id
    },
    parity: {
      host: "172.17.0.4",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};