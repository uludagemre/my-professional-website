import data from '../app/assets/svg/experience/companies/data.jpeg';
import scalable from '../app/assets/svg/experience/companies/scalable.jpg';
import adastra from '../app/assets/svg/experience/companies/adastra.jpg';
import vngrs from '../app/assets/svg/experience/companies/vngrs.jpg';
import insider from '../app/assets/svg/experience/companies/insider.webp';
import goksal from '../app/assets/svg/experience/companies/goksal.jpeg';


export const experienceImage = (customer) => {
    const customerID = customer.toLowerCase();
    switch (customerID) {
        case 'data':
            return data;
        case 'scalable':
            return scalable;
        case 'adastra':
            return adastra;
        case 'vngrs':
            return vngrs;
        case 'insider':
            return insider;
        case 'goksal':
            return goksal;
        default:
            break;
    }
}
