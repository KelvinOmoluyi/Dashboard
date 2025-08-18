
import { LuSearch } from 'react-icons/lu';

const SearchBar = () => {
    return (
        <form className="h-10 w-60 bg-[#141415] rounded-md flex items-center gap-2 border-1 border-gray-900 pl-5 pr-2">
            <div className='w-fit h-fit'>
                <LuSearch size={20} color='#cccccc' />
            </div>
            <input 
            type="text" 
            className=" placeholder:text-gray-500 h-full w-full outline-0 text-gray-300"
            placeholder="search"
            />
        </form>
    );
}
 
export default SearchBar;