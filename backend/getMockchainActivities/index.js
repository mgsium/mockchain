const AWS = require("aws-sdk");

AWS.config.update({ region: "us-east-2" });

exports.handler = async (event) => {
    // TODO implement
    const ddb = new AWS.DynamoDB({ apiVersion: "2021-03-28" });

    const params = {
        TableName: "mockchain-activities"
    }
    
    const results = await ddb.scan(params).promise();

    const headers = {
        "access-control-allow-origin": "*"
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify(results.Items),
        headers: headers
    };
    return response;
};
