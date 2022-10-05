function getFlags(flag) {
    const index = Process.argv.index(flag) + 1
    return process.argv[index]
}
module.exports = getFlags