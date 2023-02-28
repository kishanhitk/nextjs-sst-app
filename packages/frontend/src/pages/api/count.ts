import AWS from "aws-sdk";
import { NextApiRequest, NextApiResponse } from "next";

const dynamoDb = new AWS.DynamoDB.DocumentClient({
  region: process.env.REGION,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const getParams: any = {
    // Get the table name from the environment variable
    TableName: process.env.TABLE_NAME,
    // Get the row where the counter is called "hits"
    Key: {
      counter: "hits",
    },
  };
  const results = await dynamoDb.get(getParams).promise();

  // If there is a row, then get the value of the
  // column called "tally"
  let count = results.Item ? results.Item.tally : 0;

  const putParams: any = {
    TableName: process.env.TABLE_NAME,
    Key: {
      counter: "hits",
    },
    // Update the "tally" column
    UpdateExpression: "SET tally = :count",
    ExpressionAttributeValues: {
      // Increase the count
      ":count": ++count,
    },
  };

  await dynamoDb.update(putParams).promise();

  res.status(200).send(count);
}
