import axios from 'axios';
import {cardBox} from './refs';

axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/name/';

export default function fetchCountries (searchCountry) {
    cardBox.innerHTML = '';
    return axios(`${searchCountry}`).then(response => response.data);
}
