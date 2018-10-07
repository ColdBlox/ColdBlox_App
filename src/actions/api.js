import {
    client
} from 'ontology-dapi';

client.registerClient({});
const article_id = '02'
const data = {
    temp: [38, 40, 41, 37, 38, 40, 40, 39, 41, 43, 46, 40]
}

function hex2a(hexx) {
    var hex = hexx.toString();//force conversion
    var str = '';
    for (var i = 0; (i < hex.length && hex.substr(i, 2) !== '00'); i += 2)
        str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    return str;
}

export async function getReadings() {
    let contract = 'dd7a8a140d1437ad1bb92f42d13345167b052b79';
    let method = 'getReadings'
    let parameters = [{
        type: 'String',
        value: article_id
    }]
    const result = await client.api.smartContract.invokeRead({
        contract,
        method,
        parameters
    });

    return JSON.parse(hex2a(result))
}

export async function putReadings() {
    let contract = 'dd7a8a140d1437ad1bb92f42d13345167b052b79';
    let method = 'putReadings'
    let parameters = [{
        type: 'String',
        value: article_id
    }, {
        type: 'String',
        value: JSON.stringify(data)
    }]
    let requireIdentity = false
    let gasPrice = 500
    let gasLimit = 20000
    const result = await client.api.smartContract.invoke({
        contract,
        method,
        parameters,
        gasPrice,
        gasLimit,
        requireIdentity
    });
    if (result) {
        alert('Successfully inserted data into blockchain')
    } else {
        alert('Failed')
    }
}