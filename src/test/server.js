import { setupServer } from "msw/node";
import { rest } from "msw";

const users = [
  {
    gender: "female",
    name: {
      title: "Mrs",
      first: "Sophie",
      last: "Owens",
    },
    location: {
      street: {
        number: 2211,
        name: "The Drive",
      },
      city: "Donabate",
      state: "Dún Laoghaire–Rathdown",
      country: "Ireland",
      postcode: 97933,
      coordinates: {
        latitude: "17.6979",
        longitude: "109.1924",
      },
      timezone: {
        offset: "+9:00",
        description: "Tokyo, Seoul, Osaka, Sapporo, Yakutsk",
      },
    },
    email: "sophie.owens@example.com",
    login: {
      uuid: "eb5d3d43-fe11-48e6-9d8e-f8ed86e4e890",
      username: "tinywolf555",
      password: "leigh",
      salt: "5fhF4zZ2",
      md5: "1d3237837dfe1708d21097d1b9455045",
      sha1: "d893cc2438aeaae85db4e7786035801745c512ea",
      sha256:
        "e9362ea6e3b2b56f461897e9d91e083fbf60c5204c387857ba9c310a6860994f",
    },
    dob: {
      date: "1994-01-15T20:31:49.763Z",
      age: 27,
    },
    registered: {
      date: "2016-08-15T21:27:49.180Z",
      age: 5,
    },
    phone: "031-938-5604",
    cell: "081-828-6251",
    id: {
      name: "PPS",
      value: "2237582T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/49.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/49.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/49.jpg",
    },
    nat: "IE",
  },
];

const handlers = [
  rest.get("https://randomuser.me/api/?results=8", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        results: users,
      })
    );
  }),
];

export const server = setupServer(...handlers);
beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
