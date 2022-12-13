import { takeEvery } from 'redux-saga/effects';
import { buscarCategorias } from 'store/reducers/categorias';
import { createStandaloneToast } from '@chakra-ui/toast';

const { toast } = createStandaloneToast();

function* observarCategorias() {
  yield console.log('observando');
  toast({
    title: 'Carregando',
    description: 'Carregando categorias',
    status: 'loading',
    duration: 2000,
    isClosable: true
  });
  toast({
    title: 'Sucesso!',
    description: 'Categorias carregadas com sucesso!',
    status: 'success',
    duration: 2000,
    isClosable: true
  });
  toast({
    title: 'Erro',
    description: 'Erro na busca de categorias',
    status: 'error',
    duration: 2000,
    isClosable: true
  });
}

export function* categoriasSaga() {
  yield takeEvery(buscarCategorias, observarCategorias);
}