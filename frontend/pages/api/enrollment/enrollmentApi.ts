import axios, { AxiosResponse } from 'axios';
import IEnrollmentType from '../../../components/pages/enrollment/enrollmentType';

const instance = axios.create({
	baseURL: 'http://localhost:8080/',
	timeout: 15000,
});

const responseBody = (response: AxiosResponse) => response.data;

const requests = {
	post: (url: string, body: {}) => instance.post(url, body).then(responseBody)
}

export const enrollmentApi = {
	sendEnrollment: (enrollment: IEnrollmentType): Promise<IEnrollmentType> =>
		requests.post('SOMEAPI', enrollment)
}