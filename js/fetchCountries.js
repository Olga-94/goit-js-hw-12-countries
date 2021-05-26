// import debounce from 'lodash.debounce';
// import { cardContainer, input} from './refs';
// import { notification, warn } from './notifications';
// import fetchCountries from './fetchCountries';
// import cardTemp from '../templates/cards';
// import listYTemp from '../templates/list';

// let inputText = input.addEventListener('input', debounce(onSearch, 500));


// function onSearch(e){
//     let countryName = e.target.value;
    
//     fetchCountries(countryName)
//         .then(renderCountryCard)
//         .catch(error)
// };

// function renderCountryCard(data){
    
//     const numberOfCountries = data.length;
//     const cardMarkUp = cardTemp(data);
//     const listMarkUp = listYTemp(data);
    
//     console.log(numberOfCountries);

//     if (numberOfCountries === 1) {
//         cardContainer.insertAdjacentHTML('beforeend', cardMarkUp);
//     }

//     else if (numberOfCountries >= 2 && numberOfCountries <= 10) {
//         cardContainer.insertAdjacentHTML('beforeend', listMarkUp);
//     }
    
//     else if (numberOfCountries > 10){
//         notification();
//    }  
//     else return;

// }

// function error(){
//     return warn();
// };


import axios from 'axios';
import { cardBox } from './refs';

axios.defaults.baseURL = 'https://restcountries.eu/rest/v2/name/';

export default function fetchCountries (searchCountry) {
    cardBox.innerHTML = '';
    return axios(`${searchCountry}`).then(response => response.data);
}