const request = require("supertest");
const app = require("../../app");
const expect = require('chai').expect;
const endpointUrl = "/todos/";


describe(endpointUrl, () => {

  it("POST " + endpointUrl, async () => {
    const response = await request(app)
      .post(endpointUrl)
      .send({number: 'VII'});
    expect(response.statusCode).to.equal(201);
  });

});
