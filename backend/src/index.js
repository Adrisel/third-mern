
const app = require('./app')
require('./database')


async function main(){
    await app.listen(app.get('port'))
    console.log(`listening on por ${app.get('port')}`)
}

main()