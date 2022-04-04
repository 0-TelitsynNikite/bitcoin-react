import './sell.scss'
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {bitcoinValue} from '../../store/store'
import { useState } from 'react';

const Sell = () => {
    const [value, setValue] = useState('');

    const changeData = (e) => {
        if (!isNaN(e.target.value)) {
            setValue((e.target.value * bitcoinValue).toFixed(2))
        }
    }

    return (
        <form className='form'>
            <h2>1 btc = {bitcoinValue}</h2>
            <Input changeValue={changeData} label={'Продать'} placeholder={'0.0001btc - 12500.00btc'}/>
            <h1>{value ? value : '0'}</h1>
            <Button text={'Продать'}/>
        </form>
    )
}
 
export default Sell;