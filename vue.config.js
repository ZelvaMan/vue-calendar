module.exports = {
  configureWebpack: {
    // resolve: {
    //   alias: {
    //     $: 'jquery'
    //   }
    // }
    externals: {
      jquery: 'jQuery'
    }

  }
}