module.exports = {
    outputDir: 'dist',
    devServer: {
    },
    parallel: require('os').cpus().length > 1,
}