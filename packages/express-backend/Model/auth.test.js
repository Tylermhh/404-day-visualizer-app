import { registerUser, loginUser, authenticateUser } from './auth.js';
import userModel from './user.js';
import connectDB from '../db.js';

jest.mock('./user.js', () => ({
    findOne: jest.fn(),
    findById: jest.fn(),
}));
jest.mock('../db.js', () => jest.fn().mockResolvedValue(true));

const mockResponse = () => {
    const res = {};
    res.status = jest.fn().mockReturnValue(res);
    res.json = jest.fn().mockReturnValue(res);
    res.send = jest.fn().mockReturnValue(res);
    return res;
};

const mockRequest = (body = {}, params = {}, query = {}) => {
    return {
        body,
        params,
        query,
    };
};

describe("Auth Tests", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('registers a new user successfully', async () => {
        const req = mockRequest({ username: "newUser001", pwd: "password1" });
        const res = mockResponse();

        userModel.findOne.mockResolvedValue(null);
        userModel.mockImplementation(() => ({
            save: jest.fn().mockResolvedValue({
                _id: "someUserId",
                username: "newUser",
            }),
        }));

        await registerUser(req, res);

        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
            username: "newUser",
            userID: expect.any(String),
        }));
    });

    it('Fails reg if user exists', async () => {
        const req = mockRequest({ username: "testuser04", pwd: "password" });
        const res = mockResponse();

        userModel.findOne.mockResolvedValue(true);

        await registerUser(req, res);

        expect(res.status).toHaveBeenCalledWith(409);
        expect(res.send).toHaveBeenCalledWith("Username already taken.");
    });

});

