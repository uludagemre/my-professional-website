import scalable from '../app/assets/svg/experience/companies/scalable.jpg';
import insider from '../app/assets/svg/experience/companies/insider.webp';

import vw from '../app/assets/svg/customers/volkswagen.svg';
import comeon from '../app/assets/svg/customers/comeon.png';
import bmw from '../app/assets/svg/customers/bmw.svg';
import audi from '../app/assets/svg/customers/audi.svg';
import siemens from '../app/assets/svg/customers/siemens.svg';
import arcelik from '../app/assets/svg/customers/arcelik.png';

export const customerImage = (customer) => {
    const customerID = customer.toLowerCase();
    switch (customerID) {
        case 'scalable':
            return scalable;
        case 'insider':
            return insider;
        case 'volkswagen':
            return vw;
        case 'comeon':
            return comeon;
        case 'bmw':
            return bmw;
        case 'audi':
            return audi;
        case 'siemens':
            return siemens;
        case 'arcelik':
            return arcelik;
        default:
            break;
    }
}
