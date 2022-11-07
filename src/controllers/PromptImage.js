const openai = require("../config/openai");

module.exports = {
  async create(request, response) {
    //Authorization: Bearer process.env.YOUR_API_KEY
    const res = await openai.listEngines();
    console.log("RES", res);
    return response;
  },
};
