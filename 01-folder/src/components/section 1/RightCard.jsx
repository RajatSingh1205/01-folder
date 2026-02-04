import React from 'react'

const RightCard = ({img}) => {
    return (
        <div className='h-full shrink-0 overflow-hidden relative w-80 rounded-3xl'>
            <img className='h-full w-full object-cover' src={img} alt="card"/>
            <div className='absolute top-0 left-0 h-full w-full bg-transparent p-8 flex flex-col justify-between'>
                <h2 className='bg-white text-2xl font-semibold rounded-full h-12 w-12 flex justify-center items-center'>1</h2>
                <div>
                    <p className='text-white'>Rintaro Okabe is a fictional character and the protagonist of the visual novel game Steins;Gate, developed by 5pb. and Nitroplus and part of the Science Adventure series.</p>
                </div>
            </div>
        </div>
    )
}
export default RightCard