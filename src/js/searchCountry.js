import debounce from 'lodash.debounce';
import { cardBox, input} from './refs';
import { notification, warn } from './notifications';
import fetchCountries from './fetchCountries';
import cardTemp from '../templates/cardTemp';
import listYTemp from '../templates/listTemp';

let inputText = input.addEventListener('input', debounce(onSearch, 500));


function onSearch(e){
    let nameCountry = e.target.value;

    if(nameCountry.length === 0){
        return
    };
    
    fetchCountries(nameCountry)
        .then(renderCountryCard)
        .catch(error)
};

function renderCountryCard(data){
    
    const numberOfCountries = data.length;
    const cardMarkUp = cardTemp(data);
    const listMarkUp = listYTemp(data);
    
    
    if (numberOfCountries === 1) {
        cardBox.insertAdjacentHTML('beforeend', cardMarkUp);
    }

    else if (numberOfCountries >= 2 && numberOfCountries <= 10) {
        cardBox.insertAdjacentHTML('beforeend', listMarkUp);
    }
    
    else if (numberOfCountries > 10){
        notification();
    }  
   
    else return

}

function error(){
    
    return warn();
    
};


