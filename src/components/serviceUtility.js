import NetInfo from '@react-native-community/netinfo';
import { baseUrl, errorMessages } from './Constants';
import axios from 'axios'

export const networkAvailable = () => new Promise((resolve, reject) =>
    NetInfo.fetch().then(state => state.isConnected ? resolve('Connected') : reject(errorMessages.NO_INTERNET)))

export const axiosServerCall = (url, methodType, params) => new Promise((resolve, reject) => {
    var header = {
        'Authorization': 'Bearer ' + 'ccd2bcd2-f1cb-3483-900d-ba9dd4675e00',
        'Channel': 'MOBILE',
        'Content-Type': 'application/json',
        'X-BusinessTx-ID': 'ABCD123459',
        'X-External-CorrelationId': 'ABCD123999'
    }
    var timeout = 5000;

    axios.request({
        url, methodType, baseURL: `${baseUrl}`, params, timeout, responseType: 'json', header,
    }).then(async (response) => {
        if (response.status === 200) {
            resolve({ success: true, data: response.data, message: '' })
        } else if (response.status === 403) {
            resolve({ success: false, data: response.data, message: '' })
        } else if (response.status === 406) {
            resolve({ success: false, data: response.data, message: '' })
        } else if (response.status === 501) {
            resolve({ success: false, data: response.data, message: '' })
        } else {
            resolve({ success: false, data: response.data, message: '' })
        }
    }).catch((err) => {
        console.log('API ERROR:-', err);
        resolve({ success: false, message: err.toString() })
    })
})

