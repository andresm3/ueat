// const TodoController = require("../../controller/controller");
const service = require("../../service/service");
const expect = require('chai').expect;
const httpMocks = require("node-mocks-http");
const Service = new service();

let req, res, next;
const todoId = "5d5ecb5a6e598605f06cb945";
beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = jest.fn();
});

/* describe("TodoController.roman2decimal", () => {
  it("should have a roman2decimal function", () => {
    expect(typeof TodoController.roman2decimal).toBe("function");
  });

  it("should return 200 OK and response 5", async () => {
    const convertRoman = jest.spyOn(Service.prototype, "convertRoman");
    convertRoman.mockImplementation(() => "5");
    await TodoController.roman2decimal(req, res, next);
    expect(typeof response).to.equal('object');
    expect(res.statusCode).toBe(200);
    expect(res._getJSONData()).toStrictEqual({respuesta: '5'});
    expect(res._isEndCalled()).toBeTruthy();
  });
}); */

describe('Service tests', () => {


    it('1 convertRoman success', async () => {
        const response = await Service.convertRoman('MCMIV');
        console.log('>>response: '+ JSON.stringify(response));
        expect(typeof response).to.equal('object');
        expect(response.decimal).to.equal(1904);

    });

    it('2 convertRoman success', async () => {
        const response = await Service.convertRoman('DXL');
        console.log('>>response: '+ JSON.stringify(response));
        expect(typeof response).to.equal('object');
        expect(response.decimal).to.equal(540);

    });

    it('3 convertRoman success', async () => {
      const response = await Service.convertRoman('XXI');
      console.log('>>response: '+ JSON.stringify(response));
      expect(typeof response).to.equal('object');
      expect(response.decimal).to.equal(21);

    });

    it('4 convertRoman success', async () => {
      const response = await Service.convertRoman('LVIII');
      console.log('>>response: '+ JSON.stringify(response));
      expect(typeof response).to.equal('object');
      expect(response.decimal).to.equal(58);

    });

    it('5 convertRoman success', async () => {
      const response = await Service.convertRoman('IX');
      console.log('>>response: '+ JSON.stringify(response));
      expect(typeof response).to.equal('object');
      expect(response.decimal).to.equal(9);

    });

    it('convertRoman failed', async () => {
        const response = await Service.convertRoman('ZZZ');
        console.log('>>response: '+ JSON.stringify(response));
        expect(typeof response).to.equal('object');
        expect(response.msg).to.equal('Roman number doesnt exist');

    });
});