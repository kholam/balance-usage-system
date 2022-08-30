import { filterRecordsByUsername } from '../../lib/airtable';


const user = async (req, res) => {
  const { username } = req.query;

  try {
    if (username) {
      const records = await filterRecordsByUsername(username);

      if (records.length !== 0) {
        res.json(records);
      } else {
        res.json({ message: `name could not be found` });
      }
    } else {
      res.status(400);
      res.json({ message: "name is missing" });
    }
  } catch (error) {
    res.status(500);
    res.json({ message: "Oops! Something went wrong", error });
  }
};

export default user;