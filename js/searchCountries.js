import debounce from 'lodash.debounce';
import { cardContainer, input} from './refs';
import { notification, warn } from './notifications';
import fetchCountries from './fetchCountries';
import cardTpl from '../templates/cardTpl';
import listYTpl from '../templates/listTpl';

let inputText = input.addEventListener('input', debounce(onSerch, 500));


function onSerch(e){
    let countryName = e.target.value;

    if(countryName.length === 0){
        return
    };
    
    fetchCountries(countryName)
        .then(renderCountryCard)
        .catch(error)
};

function renderCountryCard(data){
    
    const numberOfCountries = data.length;
    const cardMurkUp = cardTpl(data);
    const listMurkUp = listYTpl(data);
    
    // console.log(numberOfCountries);
    
    if (numberOfCountries === 1) {
        cardContainer.insertAdjacentHTML('beforeend', cardMurkUp);
    }

    else if (numberOfCountries >= 2 && numberOfCountries <= 10) {
        cardContainer.insertAdjacentHTML('beforeend', listMurkUp);
    }
    
    else if (numberOfCountries > 10){
        notification();
    }  
   
    else return

}

function error(){
    
    return warn();
    
};