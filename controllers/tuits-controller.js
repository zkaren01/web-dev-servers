import tuitsDao from "../tuits-dao.js"

const createTuit = async (req, res) => {
  const newTuit = req.body;
  const insertedTuit = await tuitsDao.createTuit(newTuit);
  // newTuit._id = (new Date()).getTime()+'';
  // newTuit.topic = "NA";
  // newTuit.username = "NA";
  // newTuit.liked = true;
  // newTuit.verified = false;
  // newTuit.handle = "NA";
  // newTuit.time = "NA";
  // newTuit.title = "NA";
  // newTuit.tuit = "NA";
  // newTuit.video = "NA";
  // newTuit.image = "NA";
  // newTuit.logoImage = "/Tuiter/images/reactJS.jpeg";
  // newTuit.avatarImage = "/Tuiter/images/reactJS.jpeg";
  // newTuit.comments = 0;
  // newTuit.retuits = 0;
  // newTuit.likes = 0;
  // newTuit.dislikes = 0;
  // tuits.push(newTuit);
  res.json(insertedTuit);
}

const findAllTuits = async (req, res) => {
  const tuits = await tuitsDao.findAllTuits()
  res.json(tuits);
}

const updateTuit = async (req, res) => {
  const tuitdIdToUpdate = req.params.tid;
  const updatedTuit = req.body;
  const status = await tuitsDao.updateTuit(tuitdIdToUpdate, updatedTuit);
  res.sendStatus(status);
}

const deleteTuit = async (req, res) => {
  const tuitdIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitdIdToDelete);
  res.sendStatus(status);
}

export default (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findAllTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
};