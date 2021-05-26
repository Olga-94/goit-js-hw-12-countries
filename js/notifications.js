import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert } from '@pnotify/core';

export const notification = () => alert({
    title: 'notification',
    text: 'Too many matches found. Please, enter a more specific query!',
    delay: 2000
});

export const warn = () => alert({
    title: 'warn',
    text: 'No country found!',
    delay: 2000
});