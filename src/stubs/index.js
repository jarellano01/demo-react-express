import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

const mock = new MockAdapter(axios);
mock.onGet('/api/test').reply(200, {
    message: 'Test was successfull'
});