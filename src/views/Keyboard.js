import {Row, Col, Button} from 'antd';
import { useContext, useEffect } from 'react';
import { GlobalState } from '../context/GlobalState';
import { evaluateExpression } from '../service/calculate';
import './style.css';

const Keyboard = () => {
    const {expression, setExpression, result, setResult} = useContext(GlobalState);
    
    const onClick = (key) => {
        switch (key) {
            case 'del': {
                if (expression) {
                    setExpression(expression.slice(0, -1));
                    setResult('');
                }
                break;
            }
            case 'ac': {
                setExpression('');
                setResult('');
                break;
            }
            case 'eq': {
                try {
                    const res = evaluateExpression(expression);
                    setResult(res);
                } catch (error) {
                    setResult("Error");
                }
                break;
            }
            default: {
                if (expression.length < 50){
                    setExpression(prevExpression => prevExpression + key);
                    setResult('');
                }
            }
        }
    }

    useEffect (() => {
        console.log(expression);
    }, [expression]);

    return (
        <div className='keyboard'>
            <Row className='row'>
                <Col span={6}>
                    <Button type='primary' className='cal-button' style={{color: '#f22'}}
                        onClick={()=>{
                            const key='del';
                            onClick(key);
                        }}
                    > DEL </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button' style={{color: '#1f1'}}
                        onClick={()=>{
                            const key='(';
                            onClick(key);
                        }}
                    > ( </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button' style={{color: '#1f1'}}
                        onClick={()=>{
                            const key=')';
                            onClick(key);
                        }}
                    > ) </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button' style={{color: '#1f1'}}
                        onClick={()=>{
                            const key='/';
                            onClick(key);
                        }}
                    > / </Button>
                </Col>
            </Row>
            <Row className='row'>
                <Col span={6}>
                    <Button type='primary' className='cal-button'
                        onClick={()=>{
                            const key='7';
                            onClick(key);
                        }}
                    > 7 </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button'
                        onClick={()=>{
                            const key='8';
                            onClick(key);
                        }}
                    > 8 </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button'
                        onClick={()=>{
                            const key='9';
                            onClick(key);
                        }}
                    > 9 </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button' style={{color: '#1f1'}}
                        onClick={()=>{
                            const key='*';
                            onClick(key);
                        }}
                    > x </Button>
                </Col>
            </Row>
            <Row className='row'>
                <Col span={6}>
                    <Button type='primary' className='cal-button'
                        onClick={()=>{
                            const key='4';
                            onClick(key);
                        }}
                    > 4 </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button'
                        onClick={()=>{
                            const key='5';
                            onClick(key);
                        }}
                    > 5 </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button'
                        onClick={()=>{
                            const key='6';
                            onClick(key);
                        }}
                    > 6 </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button' style={{color: '#1f1'}}
                        onClick={()=>{
                            const key='-';
                            onClick(key);
                        }}
                    > - </Button>
                </Col>
            </Row>
            <Row className='row'>
                <Col span={6}>
                    <Button type='primary' className='cal-button'
                        onClick={()=>{
                            const key='1';
                            onClick(key);
                        }}
                    > 1 </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button'
                        onClick={()=>{
                            const key='2';
                            onClick(key);
                        }}
                    > 2 </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button'
                        onClick={()=>{
                            const key='3';
                            onClick(key);
                        }}
                    > 3 </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button' style={{color: '#1f1'}}
                        onClick={()=>{
                            const key='+';
                            onClick(key);
                        }}
                    > + </Button>
                </Col>
            </Row>
            <Row className='row'>
                <Col span={6}>
                    <Button type='primary' danger className='cal-button'
                        onClick={()=>{
                            const key='ac';
                            onClick(key);
                        }}
                    > AC </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button'
                        onClick={()=>{
                            const key='0';
                            onClick(key);
                        }}
                    > 0 </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button'
                        onClick={()=>{
                            const key='.';
                            onClick(key);
                        }}
                    > . </Button>
                </Col>
                <Col span={6}>
                    <Button type='primary' className='cal-button-eq'
                        onClick={()=>{
                            const key='eq';
                            onClick(key);
                        }}
                    > = </Button>
                </Col>
            </Row>
        </div>
    );
}
export default Keyboard;