import dbConnect from "../../../db/connect";
import Joke from "../../../db/model/Joke";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const jokes = await Joke.find();
    response.status(200).json(jokes);
  }
}
