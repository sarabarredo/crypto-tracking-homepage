import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tendencies.css';
import { FiArrowUpRight, FiArrowDownLeft } from 'react-icons/fi';

const Tendencies = () => {

    const [data, setData] = useState(null);

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false';

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])

    if (!data) return null;

  return (
    <div className='featured' id='tendencies'>
        <div className='container'>
            <div className='left'>
                <h2>Descubre las criptomonedas más populares: Bitcoin, Ethereum, Dogecoin y más...</h2>
                <p>Explora el mundo de las criptomonedas y los NFT.</p>
                <button className='btn'>Ver todas las monedas</button>
            </div>
            <div className='right'>
                <div className='card'>
                    <div className='top'>
                        <img src={data[0].image} alt='/' />
                    </div>
                    <div>
                        <h5>{data[0].name}</h5>
                        <p>{data[0].current_price.toLocaleString()}€</p>
                    </div>
                    {data[0].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft />
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight />
                            {data[0].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[1].image} alt='/' />
                    </div>
                    <div>
                        <h5>{data[1].name}</h5>
                        <p>{data[1].current_price.toLocaleString()}€</p>
                    </div>
                    {data[1].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft />
                            {data[1].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight />
                            {data[1].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[2].image} alt='/' />
                    </div>
                    <div>
                        <h5>{data[2].name}</h5>
                        <p>{data[2].current_price.toLocaleString()}€</p>
                    </div>
                    {data[2].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft />
                            {data[2].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight />
                            {data[2].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[3].image} alt='/' />
                    </div>
                    <div>
                        <h5>{data[3].name}</h5>
                        <p>{data[3].current_price.toLocaleString()}€</p>
                    </div>
                    {data[3].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft />
                            {data[3].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight />
                            {data[3].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[4].image} alt='/' />
                    </div>
                    <div>
                        <h5>{data[4].name}</h5>
                        <p>{data[4].current_price.toLocaleString()}€</p>
                    </div>
                    {data[4].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft />
                            {data[4].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight />
                            {data[4].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[5].image} alt='/' />
                    </div>
                    <div>
                        <h5>{data[5].name}</h5>
                        <p>{data[5].current_price.toLocaleString()}€</p>
                    </div>
                    {data[5].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft />
                            {data[5].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight />
                            {data[5].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[6].image} alt='/' />
                    </div>
                    <div>
                        <h5>{data[6].name}</h5>
                        <p>{data[6].current_price.toLocaleString()}€</p>
                    </div>
                    {data[6].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft />
                            {data[6].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight />
                            {data[6].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[7].image} alt='/' />
                    </div>
                    <div>
                        <h5>{data[7].name}</h5>
                        <p>{data[7].current_price.toLocaleString()}€</p>
                    </div>
                    {data[7].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft />
                            {data[7].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight />
                            {data[7].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[8].image} alt='/' />
                    </div>
                    <div>
                        <h5>{data[8].name}</h5>
                        <p>{data[8].current_price.toLocaleString()}€</p>
                    </div>
                    {data[8].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft />
                            {data[8].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight />
                            {data[8].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
                <div className='card'>
                    <div className='top'>
                        <img src={data[9].image} alt='/' />
                    </div>
                    <div>
                        <h5>{data[9].name}</h5>
                        <p>{data[9].current_price.toLocaleString()}€</p>
                    </div>
                    {data[9].price_change_percentage_24h < 0 ? (
                        <span className='red'>
                            <FiArrowDownLeft />
                            {data[9].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    ) : (
                        <span className='green'>
                            <FiArrowUpRight />
                            {data[9].price_change_percentage_24h.toFixed(2)}%
                        </span>
                    )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tendencies;