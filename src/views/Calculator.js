import Keyboard from './Keyboard';
import Screen from './Screen';
import './style.css';

const Calculator = () => {
    return (
        <div className="calculator">
            <Screen />
            <Keyboard />
        </div>
    );
}

export default Calculator;