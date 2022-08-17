import axios, { AxiosResponse } from 'axios';

type EnrollmentType = {

}

const port = 3000;

const instance = axios.create({
	baseURL: `http://localhost:${port}/`,
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody)
}

export const enrollmentApi = {
	enroll: (enrollment: EnrollmentType): Promise<EnrollmentType> =>
		requests.post('member', enrollment)
}