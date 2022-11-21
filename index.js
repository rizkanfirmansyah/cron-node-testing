const cron = require('node-cron')
const fs = require('fs')

i = 0;
cron.schedule('*/5 * * * * *', function() {
    fs.writeFile('logs/file' + i + '.txt', 'Cron file activated', function(err) {
        if (err) throw err;
        console.log('====================================');
        console.log('Saved File');
        console.log('====================================');
    });
    i++;
})