import tum from '../app/assets/svg/education/institutions/tum.png';
import koc from '../app/assets/svg/education/institutions/koc.jpg';
import iel from '../app/assets/svg/education/institutions/iel.png';


export const educationImage = (education) => {
    switch (education) {
        case 'tum':
            return tum;
        case 'koc':
            return koc;
        case 'iel':
            return iel;
        default:
            break;
    }
}
