import './buy.scss'
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import { bitcoinValue } from '../../store/store';
import { useState } from 'react';

const Buy = () => {
    const [value, setValue] = useState('');

    const changeData = (e) => {
        if (!isNaN(e.target.value)) {
            setValue((e.target.value / bitcoinValue).toFixed(7))
        }
    }

    return (
        <form className='form'>
            <h2>1 руб = {(1 / bitcoinValue).toFixed(10)}btc</h2>
            <Input changeValue={changeData} label={'Списать'} placeholder={'15.00р - 12500.00р'}/>
            <h1>{value ? `${value}btc` : '0'}</h1>
            <Button text={'Купить'}/>
        </form>
    )
}

export default Buy;