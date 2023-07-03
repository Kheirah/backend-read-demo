import dbConnect from "../../../db/connect";
import Joke from "../../../db/model/Joke";

export default async function handler(request, response) {
  await dbConnect();

  if (request.method === "GET") {
    const joke = await Joke.findById(request.query.id);
    
    if (!joke) {
      return response.status(404).json({ status: "Not Found" });
    }

    response.status(200).json(joke);
  }
}
