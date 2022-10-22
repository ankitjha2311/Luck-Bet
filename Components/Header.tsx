import React from 'react'
function Header() {
    return (
        <div>
            <div className='flex items-center space-x-2'>
                <img className='rounded-full h-10 w-10' src='Cryptoverse.png' />
                <div>
                    <h1>Cryptoverse</h1>
                    <p className='text-xs text-dark-500 truncate'>User</p>
                </div>
            </div>

            <div></div>
        </div>
    );
}

export default Header