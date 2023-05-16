const dayjs = require('dayjs')

module.exports = (timestamp) => {
    const formattedtime = dayjs(timestamp).format('MMMM D, YYYY')
    console.log(formattedtime)

    return formattedtime
}