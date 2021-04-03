import React from 'react';
import axios from 'axios';

const URL="http://www.parkadda.com:8000"

export const ContactForm =(body)=>{
    return axios.post(URL,body)
}