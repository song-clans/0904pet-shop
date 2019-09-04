module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // for more about customizing your Truffle configuration!
  networks: {
    development: {
      host: "192.168.0.160",
      port: 8545,
      network_id: "*", // Match any network id
      gas:4000000
    },

    // ganache: {    truffle.cmd migrate --networks ganache
    //   host: "192.168.0.160",
    //   port: 8545,
    //   network_id: "*", // Match any network id
    //   gas:4000000
    // },


    develop: {
      port: 8545
    }
  }
};
