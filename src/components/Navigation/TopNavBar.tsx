import React, { FC } from 'react';
import { FlexRow, Spacer } from '../../core/Containers';
import { RawInput } from '../../core/Forms';
import { BiBell, BiSearchAlt2 } from 'react-icons/bi';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from '../../core/Buttons/Dropdown';

interface TopNavBarProps {
    showSearchBar: boolean;
    showNotifBell: boolean;
    showMenu: boolean;
}

export const TopNavBar: FC<TopNavBarProps> = ({showSearchBar, showNotifBell, showMenu}) => {

    const navigate = useNavigate();
    const [packageId, setPackage] = React.useState('');

    const onSubmit = (e: any) => {
        e.preventDefault();

        setTimeout(() => {
            navigate(`/dashboard-home?package=${packageId}`);
        }, 2000);
    }

return (
    <FlexRow className='w-full px-10 py-5 items-center justify-between bg-grey-400'>
        {
            showSearchBar ?
            <FlexRow className='items-center border border-grey-400 rounded-lg shadow-lg p-2 bg-white'>
                <BiSearchAlt2 className='text-red-400 text-2xl mr-4'/>
                <form className='' onSubmit={e => onSubmit(e)}>
                <RawInput
                    className='phone:border-none p-2'
                    containerClass='w-300px'
                    name='packageId'
                    placeholder='Track Package'
                    onChange={setPackage}
                    type='packageId'
                    value={packageId}
                />
                <button className="hidden" type='submit'>
                    Search
                </button>
                </form>
            </FlexRow>
            :
            <Spacer />
        }
        
        <FlexRow className='items-center'>
            {
                showNotifBell ?
                <Link className='text-red-400 text-2xl p-4 mx-2 rounded-lg hover:bg-grey-400 relative' to='/notifications'>
                    <BiBell />
                    <Spacer className='absolute top-3 left-3 bg-red-100 rounded-full h-2 w-2' />
                </Link>
                :
                <></>
            }

            {
                showMenu ?
                <Dropdown />
                :
                <></>
            }
            
        </FlexRow>
        
    </FlexRow>
);
};