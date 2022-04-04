import './buy.scss'
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';

const Buy = () => {
    return (
        <form className='form'>
            <h2>1 btc</h2>
            <Input label={'Списать'} placeholder={'15.00 - 12500.00'}/>
            <Input label={'Получить'} placeholder={'Сумма'}/>
            <Button text={'Купить'}/>
        </form>
    )
}

export default Buy;