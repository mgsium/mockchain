const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-2" });

exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB({ apiVersion: "2021-03-22" });
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-east-2" });
    
    const { 
        id, 
        userId, 
        name, 
        description, 
        entryFee, 
        startTimestamp, 
        endTimestamp 
    } = event;
    
    const params = {
        TableName: "mockchain-events",
        Item: {
            id: id,
            userId: userId,
            name: name,
            description: description,
            entryFee: entryFee,
            startTimestamp: startTimestamp,
            endTimestamp: endTimestamp
        }
    }
    
    const headers = {
        "access-control-allow-origin": "*"
    }
    
    try {
        const data = await documentClient.put(params).promise();
        const response = {
            statusCode: 201,
            body: JSON.stringify('Item Inserted'),
            headers: headers
        };
        return response;
    } catch (err) {
        console.log(err);
        const response = {
            statusCode: 400,
            headers: headers,
            body: err.message
        };
        return response;
    }
}