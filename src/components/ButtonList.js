
import {HOME_PAGE_BUTTONS} from '../utility/constants';
const ButtonList = () => {
    return (
        <div className="button-list flex">
            {HOME_PAGE_BUTTONS.map((button, index)=>(
                <div key={index} className="button-list-item">
                   <button className='bg-gray-300 text-black px-4 py-2 mx-2 rounded-lg'>{button.label}</button>
                </div>
            ))}   
        </div>
    );
}

export default ButtonList;