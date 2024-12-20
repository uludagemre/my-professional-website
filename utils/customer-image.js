import vw from '../app/assets/svg/customers/vw.svg';


export const customerImage = (customer) => {
    const customerID = customer.toLowerCase();
    switch (customerID) {
        case 'vw':
            return vw;
        default:
            break;
    }
}
