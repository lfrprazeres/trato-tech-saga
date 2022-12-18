import Header from 'components/Header';
import styles from './Pagamento.module.scss';
import Select from 'components/Select';
import Button from 'components/Button';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { carregarPagamento } from 'store/reducers/carrinho';

export default function Pagamento() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(carregarPagamento());
  }, [dispatch])

  return (
    <div className={styles.container}>
      <Header titulo='Pagamento' />
      <div className={styles.dados}>
        <p className={styles.forma}> Olá usuário! Escolha a forma de pagamento: </p>
        <Select placeholder='Forma de pagamento' alt='Forma de pagamento'>
          <option value='-'> Forma de pagamento </option>
        </Select>
        <div className={styles.content}>
          <p> Total com taxas: R$ 0.00 </p>
        </div>
        <div className={styles.finalizar}>
          <Button> Finalizar Compra </Button>
        </div>
      </div>
    </div>
  )
}